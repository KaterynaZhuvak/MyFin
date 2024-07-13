import { memo, type FC } from 'react';
import { cn } from '../lib/cn';
import Icons from './sprite.svg';

interface IconProps {
  name: string;
  className?: string;
  onClick?: () => void;
  fill?: string;
}

export const Icon: FC<IconProps> = memo(
  ({ name, className, fill, onClick }) => {
    return (
      <svg
        className={cn(className, onClick && 'cursor-pointer')}
        onClick={onClick}
        role={onClick ? 'buttton' : undefined}
        fill={fill ?? 'none'}
        xmlns='http://www.w3.org/2000/svg'
      >
        <use href={`${Icons}#${name}-icon`} width='100%' height='100%' />
      </svg>
    );
  }
);

Icon.displayName = 'Icon';
