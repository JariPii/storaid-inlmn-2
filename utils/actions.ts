'use server';

import z from 'zod/v4';
import { API } from './apiConfig';
import {
  BookingSchema,
  bookingSchema,
  ContactInfoSchema,
  contactInfoSchema,
  subscribeSchema,
} from './formSchemas';
import {
  ActionResponse,
  BookingData,
  ContactData,
  SubscribeData,
  FAQ,
  Blog,
  Testimonial,
} from './types';

export const fetchAllFAQs = async (): Promise<FAQ[]> => {
  const url = API.FAQ;

  try {
    if (!url) {
      throw new Error('FAQ_API is borken');
    }

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error('Failed to fetch FAQs!');
    }

    const faqs = (await res.json()) as FAQ[];

    return faqs;
  } catch (error) {
    throw new Error('Something aint feelin raijt');
  }
};

export const fetchAllTesitmonials = async (): Promise<Testimonial[]> => {
  try {
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
  } catch (error) {
    throw new Error('Something aint feelin raijt');
  }
};

export const fetchAllBlogs = async (): Promise<Blog[]> => {
  const url = API.BLOGS;
  try {
    if (!url) {
      throw new Error('Blog API is not available');
    }

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error('Failed to fetch blogs');
    }

    const blogs = (await res.json()) as Blog[];

    return blogs;
  } catch (error) {
    throw new Error('Blogs are unavailable right now');
  }
};

// !! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const subscribeEmail = async (
  _prevState: ActionResponse<SubscribeData> | null,
  formData: FormData
): Promise<ActionResponse<SubscribeData>> => {
  const rawData: SubscribeData = {
    email: (formData.get('email') as string) || '',
  };

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

  try {
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
    let message = 'Something went wrong. Please try again later.';

    if (err instanceof TypeError) {
      message: 'Could not connect to the server.';
    }
    return { success: false, message };
  }
};
// !!!>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// !!!>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const sendContactInformation = async (
  _prevState: ActionResponse<ContactData> | null,
  formData: FormData
): Promise<ActionResponse<ContactData>> => {
  try {
    const rawData = Object.fromEntries(
      Object.keys(contactInfoSchema.shape).map((key) => [
        key,
        formData.get(key) || '',
      ])
    ) as ContactInfoSchema;

    const validatedFields = contactInfoSchema.safeParse(rawData);

    if (!validatedFields.success) {
      const errorTree = z.treeifyError(validatedFields.error);

      const errors: Record<string, string[]> = {};
      const errorProps = errorTree.properties as Record<
        string,
        { errors?: string[] }
      >;

      for (const [key, value] of Object.entries(errorProps)) {
        if (value.errors && value.errors.length > 0) {
          errors[key] = value.errors;
        }
      }

      const errorMessage = Object.values(errors)[0]?.[0];

      return {
        success: false,
        message: errorMessage,
        errors,
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

    const result = await res.json();

    return {
      success: result,
      message: result.message,
    };
  } catch (err) {
    let message = 'Something went wrong. Please try again later.';

    if (err instanceof TypeError) {
      message: 'Could not connect to the server.';
    }
    return { success: false, message };
  }
};

// !!!>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const sendBookingInformation = async (
  _prevState: ActionResponse<BookingData> | null,
  formData: FormData
): Promise<ActionResponse<BookingData>> => {
  try {
    const rawData = Object.fromEntries(
      Object.keys(bookingSchema.shape).map((key) => [
        key,
        formData.get(key) || '',
      ])
    ) as BookingSchema;

    const validatedFields = bookingSchema.safeParse(rawData);

    if (!validatedFields.success) {
      const errorTree = z.treeifyError(validatedFields.error);

      const errors: Record<string, string[]> = {};
      const errorProps = errorTree.properties as Record<
        string,
        { errors?: string[] }
      >;

      for (const [key, value] of Object.entries(errorProps)) {
        if (value.errors && value.errors.length > 0) {
          errors[key] = value.errors;
        }
      }

      const errorMessage = Object.values(errors)[0]?.[0];

      return {
        success: false,
        message: errorMessage,
        errors,
        inputs: rawData,
      };
    }

    const jsonData = JSON.stringify(validatedFields.data);

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

    return { success: true, message: result.message, errors: {}, inputs: {} };
  } catch (err) {
    let message = 'Something went wrong. Please try again later.';

    if (err instanceof TypeError) {
      message: 'Could not connect to the server.';
    }
    return { success: false, message };
  }
};

// !!!>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
