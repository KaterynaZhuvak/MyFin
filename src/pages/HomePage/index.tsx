import type { FC } from 'react';
import { Hero } from '@entities/Hero';
import { About } from '@entities/About';
import { Features } from '@entities/Features';

export const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Features />
    </>
  );
};
