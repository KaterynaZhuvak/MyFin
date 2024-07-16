import { type FC } from 'react';
import { useFormikContext } from 'formik';
import { Button } from '@shared/ui/Button';
import { cn } from '@shared/lib/cn';

export const AuthButton: FC = () => {
  const { isValid, dirty } = useFormikContext();

  return (
    <Button
      variant={isValid && dirty ? 'gradient' : 'disabled'}
      size='m'
      title='Log in'
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
