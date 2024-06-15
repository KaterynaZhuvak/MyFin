import type { FC } from 'react';
import { Hero } from '@entities/Hero';
import { About } from '@entities/About';

export const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <About />
    </>
  );
};
