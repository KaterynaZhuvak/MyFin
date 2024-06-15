import type { FC } from 'react';
import { Hero } from '@entities/Hero';

export const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <div>About</div>
    </>
  );
};
