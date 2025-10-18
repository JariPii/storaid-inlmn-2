type Testimonial = {
  id: number;
  //   rating: string;
  rating: number;
  description: string;
  avatar: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 3,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ut libero lectus, porta nec turpis sit amet, lobortis fringilla ante.',
    avatar: 'https://randomuser.me/api/portraits/med/men/32.jpg',
    name: 'Aiden Harvey',
    role: 'Customer',
  },
  {
    id: 2,
    rating: 5,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ut libero lectus, porta nec turpis sit amet, lobortis fringilla ante.',
    avatar: 'https://randomuser.me/api/portraits/med/women/44.jpg',
    name: 'Sarah Geller',
    role: 'Customer',
  },
  {
    id: 3,
    rating: 5,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ut libero lectus, porta nec turpis sit amet, lobortis fringilla ante.',
    avatar: 'https://randomuser.me/api/portraits/med/women/68.jpg',
    name: 'Olivia Harvey',
    role: 'Customer',
  },
];

type CheckItem = {
  text: string;
};

type Pricingplan = {
  title: string;
  price: string;
  subscription: string;
  description: string;
  checks: CheckItem[];
};

export const pricingPlans: Pricingplan[] = [
  {
    title: 'Small Unit',
    price: '50',
    subscription: '/month',
    description:
      'Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.',
    checks: [
      { text: 'Nam nec ipsum in dolor' },
      { text: 'Fusce nec ligula ut arcu' },
      { text: 'Aliquam pulvinar arcu in' },
      { text: 'Duis gravida enim porta' },
      { text: 'Etiam eget libero non ligula' },
    ],
  },

  {
    title: 'Medium Unit',
    price: '100',
    subscription: '/month',
    description:
      'Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.',
    checks: [
      { text: 'Nam nec ipsum in dolor' },
      { text: 'Fusce nec ligula ut arcu' },
      { text: 'Aliquam pulvinar arcu in' },
      { text: 'Duis gravida enim porta' },
      { text: 'Etiam eget libero non ligula' },
    ],
  },
  {
    title: 'Large Unit',
    price: '150',
    subscription: '/month',
    description:
      'Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.',
    checks: [
      { text: 'Nam nec ipsum in dolor' },
      { text: 'Fusce nec ligula ut arcu' },
      { text: 'Aliquam pulvinar arcu in' },
      { text: 'Duis gravida enim porta' },
      { text: 'Etiam eget libero non ligula' },
    ],
  },
  {
    title: 'Executive Unit',
    price: '200',
    subscription: '/month',
    description:
      'Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.',
    checks: [
      { text: 'Nam nec ipsum in dolor' },
      { text: 'Fusce nec ligula ut arcu' },
      { text: 'Aliquam pulvinar arcu in' },
      { text: 'Duis gravida enim porta' },
      { text: 'Etiam eget libero non ligula' },
    ],
  },
];
