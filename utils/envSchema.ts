import z from 'zod/v4';

const envSchema = z.object({
  BLOG_API: z.url(),
  FAQ_API: z.url(),
  TESTIMONIALS_API: z.url(),
  SUBSCRIBE_EMAIL_API: z.url(),
  BOOKING_API: z.url(),
  CONTACT_API: z.url(),
});

export const env = envSchema.parse(process.env);
