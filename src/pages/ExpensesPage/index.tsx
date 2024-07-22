import type { FC } from 'react';
import { Icon } from '@shared/icons/Icon';
import { useStore } from '@shared/lib/useStore';

export const ExpensesPage: FC = () => {
  const { sidebarStore } = useStore();

  // const handleStateChange = (): void => {
  // sidebarStore.setIsOpen();
  // };

  return (
    <>
      ExpensesPage
      <button
        className='flex h-[18px] w-auto cursor-pointer items-center gap-[4px] bg-inherit font-[12px] text-[#adadad] hover:text-[#ddd] hover:drop-shadow-[0_0px_2px_#888] tablet:hidden'
        type='button'
        onClick={() => {
          sidebarStore.setIsOpen();
        }}
      >
        <Icon name='back-to' className='size-[16px]' /> Back to menu
      </button>
    </>
  );
};
