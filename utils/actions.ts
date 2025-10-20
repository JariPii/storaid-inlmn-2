'use server';
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

export const subscribeEmil = async (
  _prevState: unknown,
  formData: FormData
): Promise<{ success: false; message: string }> => {
  const email = formData.get('subscribe');

  if (!email) {
    return { success: false, message: 'Need to be an email address' };
  }

  const url = process.env.SUBSCRIBE_EMAIL_API;

  if (!url) {
    return { success: false, message: 'Subscription api not available' };
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  const result = await res.json();

  if (!res.ok) {
    return { success: false, message: result.message ?? 'Subscription failed' };
  }

  return { success: result.message, message: result.message };
};
