import type { FC } from 'react';
import Icons from './sprite.svg';

interface IconProps {
  id: string;
  className: string;
}

export const Icon: FC<IconProps> = ({ id, className }) => {
  return (
    <svg className={className}>
      <use href={`${Icons}#${id}-icon`} />
    </svg>
  );
};
