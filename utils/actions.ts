'use server';

import z from 'zod/v4';
import { API } from './apiConfig';
import {
  bookingSchema,
  contactInfoSchema,
  subscribeSchema,
  validateWithZodSchema,
} from './formSchemas';
import {
  ActionResponse,
  BookingData,
  ContactData,
  SubscribeData,
} from './types';

export type FAQ = {
  id?: number;
  title: string;
  description: string;
};

export const fetchAllFAQs = async (): Promise<FAQ[]> => {
  const url = API.FAQ;

  if (!url) {
    throw new Error('FAQ_API is borken');
  }

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch FAQs!');
  }

  const faqs = (await res.json()) as FAQ[];

  return faqs;
};

export type Testimonial = {
  id?: number;
  comment: string;
  name: string;
  companyName: string;
  avatarUrl: string;
  rating: number;
};

export const fetchAllTesitmonials = async (): Promise<Testimonial[]> => {
  const url = API.TESTIMONIALS;

  if (!url) {
    throw new Error('Testimonials API is borken');
  }

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch Testimonials!');
  }

  const testimonials = (await res.json()) as Testimonial[];

  return testimonials;
};

export type Blog = {
  id: string;
  created: string;
  title: string;
  description: string;
  imageUrl: string;
};

export const fetchAllBlogs = async (): Promise<Blog[]> => {
  const url = API.BLOGS;

  if (!url) {
    throw new Error('Blog API is not available');
  }

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch blogs');
  }

  const blogs = (await res.json()) as Blog[];

  return blogs;
};

export type Subscribe = {
  email: string;
};
// !! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const subscribeEmail = async (
  _prevState: ActionResponse<SubscribeData> | null,
  formData: FormData
): Promise<ActionResponse<SubscribeData>> => {
  try {
    const rawData: SubscribeData = {
      email: (formData.get('email') as string) || '',
    };
    // const rawData = Object.fromEntries(formData);

    const validatedData = subscribeSchema.safeParse(rawData);

    if (!validatedData.success) {
      const errorTree = z.treeifyError(validatedData.error);

      const mappedErrors: { email?: string[] } = {};
      if (errorTree.properties?.email?.errors?.length) {
        mappedErrors.email = errorTree.properties.email.errors;
      }

      return {
        success: false,
        message: mappedErrors.email?.[0] || 'Invalid email',
        errors: mappedErrors,
        inputs: rawData,
      };
    }

    const url = API.SUBSCRIBE;

    if (!url) {
      return { success: false, message: 'Subscription api not available' };
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedData.data),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const result = await res.json();

    return { success: true, message: result.message };
  } catch (err) {
    return { success: false, message: (err as Error).message };
  }
};
// export const subscribeEmail = async (
//   _prevState: unknown,
//   formData: FormData
// ): Promise<{ success: boolean; message: string }> => {
//   try {
//     const email = Object.fromEntries(formData);

//     console.log('ENTRY OBJECT', email);

//     const inputData = validateWithZodSchema(subscribeSchema, email);

//     console.log('VALIDATED', inputData);

//     const url = API.SUBSCRIBE;

//     if (!url) {
//       return { success: false, message: 'Subscription api not available' };
//     }

//     const res = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(inputData),
//     });
//     console.log('🚀 ~ subscribeEmail ~ res:', res);

//     const result = await res.json();
//     console.log('RESULT', result);

//     return { success: true, message: result.message };
//   } catch (err) {
//     return { success: false, message: (err as Error).message };
//   }
// };
// !!!>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export type ContactFormCredentials = {
  name: string;
  email: string;
  phoneNumber?: string;
  subject: string;
  comment: string;
};

// !!!>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// MARK: !!!>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const sendContactInformation = async (
  _prevState: ActionResponse<ContactData> | null,
  formData: FormData
): Promise<ActionResponse<ContactData>> => {
  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = contactInfoSchema.safeParse(rawData);

    console.log('ENTRY OBJECTs', rawData);

    if (!validatedFields.success) {
      return {
        success: false,
        message: 'Field input is invalid',
        errors: validatedFields.error.flatten().fieldErrors,
        inputs: rawData,
      };
    }

    const url = API.CONTACT;

    if (!url) {
      return { success: false, message: 'Api not available' };
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedFields.data),
    });

    console.log('LOGGING RES', res);

    const result = await res.json();

    console.log('CONTACT FORM', result);

    return { success: result, message: result.message };
  } catch (err) {
    return { success: false, message: (err as Error).message };
  }
};

// !!!>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// !!!>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export type BookingsInformation = {
  name: string;
  email: string;
  selectedUnit: string;
  prupose: string;
};

export const sendBookingInformation = async (
  _prevState: ActionResponse<BookingData> | null,
  formData: FormData
): Promise<ActionResponse<BookingData>> => {
  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = bookingSchema.safeParse(rawData);
    console.log(
      '🚀 ~ sendBookingInformation ~ validatedFields:',
      validatedFields
    );

    if (!validatedFields.success) {
      return {
        success: false,
        message: 'Field input is invalid',
        errors: validatedFields.error.flatten().fieldErrors,
        inputs: rawData,
      };
    }

    const url = API.BOOKING;

    if (!url) {
      return { success: false, message: 'Api not available' };
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedFields.data),
    });

    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: result.message ?? 'Booking failed',
      };
    }

    return { success: true, message: result.message };
  } catch (err) {
    return { success: false, message: (err as Error).message };
  }
};
// export const sendBookingInformation = async (
//   _prevState: unknown,
//   formData: FormData
// ): Promise<{ success: boolean; message: string }> => {
//   try {
//     const inputData = Object.fromEntries(formData);
//     const validatedFields = validateWithZodSchema(bookingSchema, inputData);

//     const url = API.BOOKING;

//     if (!url) {
//       return { success: false, message: 'Api not available' };
//     }

//     const res = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(validatedFields),
//     });

//     const result = await res.json();

//     if (!res.ok) {
//       return {
//         success: false,
//         message: result.message ?? 'Booking failed',
//       };
//     }

//     return { success: true, message: result.message };
//   } catch (err) {
//     return { success: false, message: (err as Error).message };
//   }
// };

// !!!>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// !!!>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
