import type { FC } from 'react';

interface EmailProps {
  email: string;
  className?: string;
}

export const Email: FC<EmailProps> = ({ email, className }) => {
  return (
    <a className={className} href={`mailto:${email}`}>
      {email}
    </a>
  );
};
