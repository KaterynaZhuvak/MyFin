import type { FC } from 'react';
import { cn } from '../lib/cn';
import Icons from './sprite.svg';

interface IconProps {
  name: string;
  className?: string;
  onClick?: () => void;
  fill?: string;
}

export const Icon: FC<IconProps> = ({ name, className, fill, onClick }) => {
  return (
    <svg
      className={cn(className, onClick && 'cursor-pointer')}
      onClick={onClick}
      role={onClick ? 'buttton' : undefined}
      fill={fill ?? 'none'}
      xmlns='http://www.w3.org/2000/svg'
    >
      <use href={`${Icons}#${name}-icon`} />
    </svg>
  );
};
