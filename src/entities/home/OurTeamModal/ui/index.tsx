import { type FC } from 'react';
import { CustomModal } from '@shared/ui/Modal';
import { Icon } from '@shared/icons/Icon';
import { ourTeam } from '../model';

interface OurTeamModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const OurTeamModal: FC<OurTeamModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <CustomModal
      isOpen={isOpen}
      onRequestClose={() => {
        setIsOpen(false);
      }}
      className='h-[600px] w-[300px] rounded-[20px] bg-modal-background px-[50px] py-[30px] outline-none tablet:h-[800px] tablet:w-[600px] tablet:px-[100px] tablet:py-[60px]'
    >
      <Icon
        name='close'
        onClick={() => {
          setIsOpen(false);
        }}
        className='absolute right-[24px] top-[15px] z-10 size-[16px] cursor-pointer'
      />
      <h2 className='mb-[10px] text-center text-[25px] font-bold tablet:mb-[30px] tablet:text-[34px]'>
        Our team
      </h2>
      <ul className='flex flex-col gap-[10px] tablet:gap-[20px]'>
        {ourTeam.map((item) => (
          <li key={item.name}>
            <h3 className='text-center text-[20px] font-bold tablet:text-[25px]'>
              {item.position}
            </h3>
            <p className='text-center text-[16px] tracking-[0.02rem] tablet:text-[20px]'>
              {item.name}
            </p>
            <a
              className='block text-center text-[16px] tracking-[0.02rem] tablet:text-[20px]'
              href={`mailto:${item.email}`}
            >
              {item.email}
            </a>
          </li>
        ))}
      </ul>
    </CustomModal>
  );
};
