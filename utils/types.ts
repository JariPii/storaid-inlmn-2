export type FAQ = {
  id?: number;
  title: string;
  description: string;
};

export type Testimonial = {
  id?: number;
  comment: string;
  name: string;
  companyName: string;
  avatarUrl: string;
  rating: number;
};

export type Blog = {
  id: string;
  created: string;
  title: string;
  description: string;
  imageUrl: string;
};

export type SubscribeData = {
  email: string;
};

export type ContactData = {
  name: string;
  email: string;
  phoneNumber?: string;
  subject: string;
  comment: string;
};

export type BookingData = {
  name: string;
  email: string;
  selectedUnit: string;
  purpose: string;
};

export type ActionResponse<T extends Record<string, unknown>> = {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof T]?: string[];
  };
  // inputs?: EmailFormData;
  inputs?: {
    [K in keyof T]?: string;
  };
};
