import type { FC } from 'react';

interface LinkProps {
  href: string;
  title: string;
}

export const Link: FC<LinkProps> = ({ href, title }) => {
  return (
    <a
      className='font-sans text-[20px] font-semibold text-white hover:text-hover-green'
      href={href}
    >
      {title}
    </a>
  );
};
