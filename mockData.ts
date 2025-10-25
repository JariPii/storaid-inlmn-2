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
