import type { FC } from 'react';
import { cn } from '@shared/lib/cn';

interface EmailProps {
  to: string;
  className?: string;
}

export const Email: FC<EmailProps> = ({ to, className }) => {
  return (
    <a
      className={cn('hover:text-bright-green', className)}
      href={`mailto:${to}`}
    >
      {to}
    </a>
  );
};
