import type { FC } from 'react';
import Icons from './sprite.svg';

interface IconProps {
  name: string;
  className: string;
}

export const Icon: FC<IconProps> = ({ name, className }) => {
  return (
    <svg className={className}>
      <use href={`${Icons}#${name}-icon`} />
    </svg>
  );
};
