import { observer } from 'mobx-react';
import { type FC } from 'react';
import cashImage from '@shared/assets/images/cash-image.webp';
import pigImage from '@shared/assets/images/pig-image.webp';
import { useStore } from '@shared/lib/useStore';

let borderColorClass = 'border-yellow-600';
let imageSource = '';
let imageAlt = '';

export const CustomAlert: FC = observer(() => {
  const { alertStore } = useStore();

  const onButtonClick = (): void => {
    alertStore.toggleIsOpen();
  };

  if (alertStore.getIsSuccess()) {
    borderColorClass = 'border-[#3CCEA1]';
    imageSource = cashImage;
    imageAlt = 'Success';
  } else if (alertStore.getIsError()) {
    borderColorClass = 'border-[#D9524C]';
    imageSource = pigImage;
    imageAlt = 'Error';
  } else if (alertStore.getIsPending()) {
    borderColorClass = 'border-yellow-600';
    imageSource = '';
    imageAlt = 'Pending';
  }

  return (
    <div
      className={`${alertStore.getIsOpen() ? 'block' : 'hidden'} fixed inset-0 z-[100] flex items-center justify-center bg-black/50`}
    >
      <div className='flex flex-col items-center justify-center gap-12'>
        <div
          className={`${borderColorClass} flex size-[340px] flex-col items-center justify-center gap-6 rounded-full border-4 bg-[#1C1C1C]`}
        >
          <span className='text-[16px] font-bold'>
            {alertStore.getMessage()}
          </span>
          {alertStore.getIsPending() ? null : (
            <img src={imageSource} alt={imageAlt} className='size-[160px]' />
          )}
        </div>
        <button
          onClick={onButtonClick}
          disabled={alertStore.getIsPending()}
          className='gradient h-12 w-[158px] rounded-[15px] text-[28px] font-bold'
          type='button'
        >
          OK
        </button>
      </div>
    </div>
  );
});
