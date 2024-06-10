import type { FC } from 'react';
import Icons from './sprite.svg';

interface IconProps {
  name: string;
  className: string;
  onClick?: () => void;
}

export const Icon: FC<IconProps> = ({ name, className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      role={onClick ? 'buttton' : null}
    >
      <use href={`${Icons}#${name}-icon`} />
    </svg>
  );
};
