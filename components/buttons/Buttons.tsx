import React from 'react';

const Buttons = ({ children }: { children: React.ReactNode }) => {
  return <button className='button-primary'>{children}</button>;
};
export default Buttons;
