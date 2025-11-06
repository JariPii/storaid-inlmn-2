import * as z from 'zod/v4';

export const subscribeSchema = z.object({
  email: z.email({ message: 'Enter a valid email' }),
});

export type SubscribeSchema = z.infer<typeof subscribeSchema>;

export const contactInfoSchema = z.object({
  name: z
    .string({ message: 'Enter name' })
    .min(2, { message: 'Must contain atleast 2 letters' }),
  email: z.email({ message: 'Enter a valid email address' }),
  phoneNumber: z.string().optional(),
  subject: z.string({ message: 'Enter a valid subject' }),
  comment: z.string({ message: 'Please provide a message' }).min(5).max(150),
});

export type ContactInfoSchema = z.infer<typeof contactInfoSchema>;

export const bookingSchema = z.object({
  name: z
    .string({ message: 'Please enter your name' })
    .min(2, { message: 'Must contain atleast 2 letters' }),
  email: z.email({ message: 'Enter a valid email' }),
  selectedUnit: z.string({ message: 'Enter a unit' }),
  purpose: z.string().refine(
    (purpose) => {
      const wordCount = purpose.split(' ').length;
      return wordCount >= 1 && wordCount <= 30;
    },
    {
      message: 'Enter your purpose for the unit',
    }
  ),
});

export type BookingSchema = z.infer<typeof bookingSchema>;

export function validateWithZodSchema<T>(
  schema: z.ZodType<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);
  console.log('🚀 ~ validateWithZodSchema ~ result:', result);

  if (!result.success) {
    const message = result.error.issues
      .map((issue) => `${issue.path.join('.') || 'field'}: ${issue.message}`)
      .join(', ');
    console.log('🚀 ~ validateWithZodSchema ~ message:', message);

    throw new Error(message);
  }
  console.log('SUCCESS FROM validateWithZodSchema', result.data);

  return result.data;
}
