import { useEffect, useState, type FC } from 'react';

interface CustomAlertProps {
  isPending: boolean;
  isError: boolean;
  isSuccess: boolean;
  open?: boolean;
}

let borderColor: string;
let message: string;
let buttonText: string;

export const CustomAlert: FC<CustomAlertProps> = ({
  isPending,
  isError,
  isSuccess,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isPending || isError || isSuccess) {
      setIsOpen(true);
    }
  }, [isPending, isError, isSuccess]);

  const onButtonClick = (): void => {
    setIsOpen(!isOpen);
  };

  if (isPending) {
    borderColor = 'border-yellow-600';
    message = 'Pending';
    buttonText = 'Processing';
  } else if (isError) {
    borderColor = 'border-[#D9524C]';
    message = 'Something went wrong';
    buttonText = 'Try Later';
  } else if (isSuccess) {
    borderColor = 'border-[#3CCEA1]';
    message = 'New expense created';
    buttonText = 'OK';
  }

  return (
    <div
      className={`${isOpen ? 'block' : 'hidden'} absolute inset-0 z-[100] flex items-center justify-center bg-black/50`}
    >
      <div className='flex flex-col items-center justify-center gap-12'>
        <div
          className={`${borderColor} flex size-[340px] items-center justify-center rounded-full border-4 bg-[#1C1C1C]`}
        >
          <span className='text-[16px]'>{message}</span>
        </div>
        <button
          onClick={onButtonClick}
          disabled={isPending}
          className='gradient h-12 w-[158px] rounded-[15px] text-[28px] font-bold'
          type='button'
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};
