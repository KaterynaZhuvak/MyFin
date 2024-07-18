import type { FC } from 'react';
import { Icon } from '@shared/icons/Icon';
import { useStore } from '@shared/lib/useStore';

export const ExpensesPage: FC = () => {
  const { sidebarStore } = useStore();

  const handleStateChange = (): void => {
    sidebarStore.setIsOpen();
  };

  return (
    <>
      ExpensesPage
      <button
        className='flex h-[18px] w-auto cursor-pointer items-center gap-[4px] font-[12px] text-[#ADADAD] tablet:hidden'
        type='button'
        onClick={handleStateChange}
      >
        <Icon name='back-to' className='size-[16px]' /> Back to menu
      </button>
    </>
  );
};
