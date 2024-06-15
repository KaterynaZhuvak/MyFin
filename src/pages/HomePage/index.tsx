import type { FC } from 'react';
import { Hero } from '@entities/Hero';
import { About } from '@entities/About/ui';

export const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <About />
    </>
  );
};
