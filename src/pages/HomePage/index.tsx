import type { FC } from 'react';
import { Hero } from '@entities/home/Hero';
import { About } from '@entities/home/About';
import { Features } from '@entities/home/Features';

export const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Features />
    </>
  );
};
