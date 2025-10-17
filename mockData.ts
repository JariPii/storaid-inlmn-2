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
    // rating: '3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ut libero lectus, porta nec turpis sit amet, lobortis fringilla ante.',
    avatar: 'https://randomuser.me/api/portraits/med/men/32.jpg',
    name: 'Aiden Harvey',
    role: 'Customer',
  },
  {
    id: 2,
    rating: 5,
    // rating: '5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ut libero lectus, porta nec turpis sit amet, lobortis fringilla ante.',
    avatar: 'https://randomuser.me/api/portraits/med/women/44.jpg',
    name: 'Sarah Geller',
    role: 'Customer',
  },
  {
    id: 3,
    rating: 5,
    // rating: '3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ut libero lectus, porta nec turpis sit amet, lobortis fringilla ante.',
    avatar: 'https://randomuser.me/api/portraits/med/women/68.jpg',
    name: 'Olivia Harvey',
    role: 'Customer',
  },
];
