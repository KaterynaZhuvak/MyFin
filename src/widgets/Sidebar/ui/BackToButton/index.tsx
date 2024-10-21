import type { FC } from 'react';
import { Icon } from '@shared/icons/Icon';
import { useStore } from '@shared/lib/useStore';

export const BackToButton: FC = () => {
  const { sidebarStore } = useStore();

  const backToBtnStyles = `
  flex
  items-center
  gap-[4px]

  w-full
  p-[12px_0_0_16px]

  bg-[#000]

  font-[12px]
  text-[#adadad]

  transition-all
  duration-300
  cursor-pointer

  hover:text-[#ddd]

  tablet:hidden
  `;

  return (
    <button
      className={backToBtnStyles}
      type='button'
      onClick={() => {
        sidebarStore.setIsOpen(true);
      }}
    >
      <Icon name='back-to' className='size-[16px]' /> Back to menu
    </button>
  );
};
