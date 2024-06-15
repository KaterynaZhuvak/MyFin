import type { FC } from 'react';
import { cn } from '../lib/cn';
import Icons from './sprite.svg';

interface IconProps {
  name: string;
  className?: string;
  onClick?: () => void;
  width: string;
  height: string;
  fill?: string;
}

export const Icon: FC<IconProps> = ({
  name,
  width,
  height,
  className,
  fill,
  onClick,
}) => {
  return (
    <svg
      className={cn(className, onClick && 'cursor-pointer')}
      onClick={onClick}
      role={onClick ? 'buttton' : undefined}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill ?? 'none'}
      xmlns='http://www.w3.org/2000/svg'
    >
      <use href={`${Icons}#${name}-icon`} />
    </svg>
  );
};
