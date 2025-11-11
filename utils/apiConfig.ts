import { env } from './envSchema';

export const API = {
  BLOGS: env.BLOG_API,
  FAQ: env.FAQ_API,
  TESTIMONIALS: env.TESTIMONIALS_API,
  SUBSCRIBE: env.SUBSCRIBE_EMAIL_API,
  BOOKING: env.BOOKING_API,
  CONTACT: env.CONTACT_API,
};
