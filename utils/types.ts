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
  prupose: string;
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
