import type { FC } from 'react';
import { Icon } from '@shared/icons/Icon';
import { useStore } from '@shared/lib/useStore';

export const BackToButton: FC = () => {
  const { sidebarStore } = useStore();

  const backToBtnStyles = `
  flex
  h-[18px]
  cursor-pointer
  items-center
  gap-[4px]
  bg-inherit
  font-[12px]
  text-[#adadad]
  p-[0_10px]
  transition-all
  duration-300

  hover:text-[#ddd]
  hover:drop-shadow-[0_0px_2px_#888]

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
