import z from 'zod/v4';

export const subscribeSchema = z.object({
  email: z.email({ message: 'Enter a valid email' }),
});

export type SubscribeSchema = z.infer<typeof subscribeSchema>;

export const contactInfoSchema = z.object({
  name: z
    .string()
    .regex(/^[A-Za-z\s]+$/, 'Enter name, only letters are accepted')
    .min(2, { message: 'Name must be atleast 2 letters' })
    .max(15, { message: 'Name is too long' }),
  email: z.email({
    message: 'Enter a valid email address',
  }),
  phoneNumber: z.preprocess(
    (val) => (val === '' ? undefined : val),
    z
      .string()
      .min(9)
      .regex(/^[0-9\s]+$/, 'Phonenumber can only contain numbers')
      .optional()
  ),
  subject: z
    .string()
    .regex(/^[A-Za-z\s]+$/, 'Subject can only contain letters')
    .min(1, { message: 'Enter a subject' }),
  comment: z.string().superRefine((val, ctx) => {
    const wordCount = val.split(' ').filter(Boolean).length;

    if (wordCount < 2) {
      ctx.addIssue({
        code: 'custom',
        message: 'Message needs to be longer',
      });
    }
    if (wordCount > 30) {
      ctx.addIssue({
        code: 'custom',
        message: 'Message needs to be shorter',
      });
    }
  }),
});

export type ContactInfoSchema = z.infer<typeof contactInfoSchema>;

export const bookingSchema = z.object({
  name: z
    .string()
    .regex(/^[A-Za-z]+$/, 'Enter name, only letters are accepted')
    .min(2, { message: 'Name must be atleast 2 letters' })
    .max(15, { message: 'Name is too long' }),
  email: z.email({ message: 'Enter a valid email' }),
  selectedUnit: z.string().min(1, { message: 'Choose a unit' }),
  purpose: z.string().superRefine((val, ctx) => {
    const wordCount = val.split(' ').filter(Boolean).length;

    if (wordCount < 2) {
      ctx.addIssue({
        code: 'custom',
        message: 'Message needs to be longer',
      });
    }
    if (wordCount > 30) {
      ctx.addIssue({
        code: 'custom',
        message: 'Message needs to be shorter',
      });
    }
  }),
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
