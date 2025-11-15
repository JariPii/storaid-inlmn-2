import z from 'zod/v4';

export const subscribeSchema = z.object({
  email: z.email({ error: 'Enter a valid email' }),
});

export type SubscribeSchema = z.infer<typeof subscribeSchema>;

export const contactInfoSchema = z.object({
  name: z
    .string()
    .regex(/^[A-Za-z\s]+$/, 'Enter name, only letters are accepted')
    .min(2, {
      error: 'Name is too short.',
    })
    .refine((val) => val.replace(/\s/g, '').length <= 50, {
      error: 'Name is too long',
    }),
  email: z.email({
    error: 'Enter a valid email address',
  }),
  phoneNumber: z.preprocess(
    (val) => (val === '' ? undefined : val),
    z
      .string()
      .regex(/^\+?[0-9\s]+$/, 'Only numbers')
      .refine((val) => val.replace(/[^\d]/g, '').length >= 9, {
        error: 'Invalid phonenumber.',
      })
      .optional()
  ),
  subject: z
    .string()
    .regex(/^[A-Za-z\s]+$/, 'Subject can only contain letters')
    .refine((val) => val.replace(/\s/g, '').length >= 2, {
      error: 'Please provide a subject.',
    })
    .max(15),
  comment: z.string().superRefine((val, ctx) => {
    const wordCount = val.split(' ').filter(Boolean).length;

    if (wordCount < 2) {
      ctx.addIssue({
        code: 'custom',
        error: 'Message needs to be longer',
      });
    }
    if (wordCount > 30) {
      ctx.addIssue({
        code: 'custom',
        error: 'Message needs to be shorter',
      });
    }
  }),
});

export type ContactInfoSchema = z.infer<typeof contactInfoSchema>;

export const bookingSchema = z.object({
  name: z
    .string()
    .regex(/^[A-Za-z\s]+$/, 'Enter name, only letters are accepted')
    .min(2, {
      error: 'Name is too short.',
    })
    .refine((val) => val.replace(/\s/g, '').length <= 50, {
      error: 'Name is too long',
    }),
  email: z.email({ error: 'Enter a valid email' }),
  selectedUnit: z.string().min(1, { error: 'Choose a unit' }),
  purpose: z.string().superRefine((val, ctx) => {
    const wordCount = val.split(' ').filter(Boolean).length;

    if (wordCount < 2) {
      ctx.addIssue({
        code: 'custom',
        error: 'Message needs to be longer',
      });
    }
    if (wordCount > 30) {
      ctx.addIssue({
        code: 'custom',
        error: 'Message needs to be shorter',
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
