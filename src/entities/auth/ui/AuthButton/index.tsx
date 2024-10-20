import { type FC } from 'react';
import { useFormikContext } from 'formik';
import { Button } from '@shared/ui/Button';
import { cn } from '@shared/lib/cn';

interface AuthButtonProps {
  title: string;
}

export const AuthButton: FC<AuthButtonProps> = ({ title }) => {
  const { isValid, dirty } = useFormikContext();

  return (
    <Button
      variant={isValid && dirty ? 'gradient' : 'disabled'}
      size='m'
      title={title}
      className={cn(
        'mt-[10px] h-[56px] w-[318px] py-[auto] text-[32px] font-bold tablet:h-[64px] tablet:w-[378px]',
        {
          'cursor-not-allowed': !isValid || !dirty,
        }
      )}
      isSubmit
      disabled={!isValid || !dirty}
    />
  );
};
