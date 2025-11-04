'use server';

import { error } from 'console';
import {
  bookingSchema,
  contactInfoSchema,
  subscribeSchema,
  validateWithZodSchema,
} from './formSchemas';

export type FAQ = {
  id?: number;
  title: string;
  description: string;
};

export const fetchAllFAQs = async (): Promise<FAQ[]> => {
  const url = process.env.FAQ_API;

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
  const url = process.env.TESTIMONIALS_API;

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
  const url = process.env.BLOG_API;

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
export const subscribeEmil = async (
  _prevState: unknown,
  formData: FormData
): Promise<{ success: boolean; message: string }> => {
  const email = formData.get('subscribe') as string;

  if (!email) {
    return { success: false, message: 'Need to be an email address' };
  }

  const url = process.env.SUBSCRIBE_EMAIL_API;

  if (!url) {
    return { success: false, message: 'Subscription api not available' };
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const result = await res.json();

    return { success: result.message, message: result.message };
  } catch (error) {
    console.log(error);
  }

  return { success: true, message: 'Great job!' };
};

// !!!>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const subscribeEmail = async (
  _prevState: unknown,
  formData: FormData
): Promise<{ success: boolean; message: string }> => {
  try {
    const email = Object.fromEntries(formData);

    console.log('ENTRY OBJECT', email);

    const inputData = validateWithZodSchema(subscribeSchema, email);

    console.log('VALIDATED', inputData);

    const url = process.env.SUBSCRIBE_EMAIL_API;

    if (!url) {
      return { success: false, message: 'Subscription api not available' };
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputData),
    });
    console.log('🚀 ~ subscribeEmail ~ res:', res);

    const result = await res.json();
    console.log('RESULT', result);

    return { success: result.message, message: result.message };
  } catch (err) {
    return { success: false, message: (err as Error).message };
  }
};
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
  _prevState: unknown,
  formData: FormData
): Promise<{ success: boolean; message: string }> => {
  try {
    const inputData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(contactInfoSchema, inputData);

    console.log('ENTRY OBJECTs', inputData);

    const url = process.env.CONTACT_API;

    if (!url) {
      return { success: false, message: 'Api not available' };
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedFields),
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
  _prevState: unknown,
  formData: FormData
): Promise<{ success: boolean; message: string }> => {
  try {
    const inputData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(bookingSchema, inputData);

    const url = process.env.BOOKING_API;

    if (!url) {
      return { success: false, message: 'Api not available' };
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedFields),
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

// !!!>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// !!!>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
