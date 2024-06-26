import { useState, type FC } from 'react';
import { Icon } from '@shared/icons/Icon';
import { CustomModal } from '@shared/ui/Modal';
import { ourTeam } from '../model';

export const Footer: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className=' bg-header-background'>
      <div className='container relative flex flex-col items-center justify-center gap-[28px] py-[26px] tablet:gap-[49px] tablet:pb-[45px] tablet:pt-[30px]'>
        <div className='flex items-center justify-center gap-[32px] tablet:gap-[96px]'>
          <button
            type='button'
            className='text-[16px] tablet:text-[20px] tablet:tracking-[0.02rem]'
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Contact us
          </button>
          <button
            type='button'
            disabled
            className='text-[16px] tracking-[0.02rem] tablet:text-[20px]'
          >
            Privacy policy
          </button>
        </div>
        <p className='text-[12px] tablet:text-[16px]'>
          &#169;2024 MyFin. All Rights Reserved
        </p>
        <Icon
          name='logo-footer'
          className='absolute right-[16px] top-[57px] h-[14px] w-[62px] tablet:right-[72px] tablet:top-[53px] tablet:h-[60px] tablet:w-[186px]'
        />
      </div>
      <CustomModal
        isOpen={isOpen}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        className='size-[90%] rounded-[20px] bg-[#2D3433] px-[50px] py-[30px] outline-none tablet:h-[90%] tablet:w-2/5 tablet:px-[100px] tablet:py-[60px]'
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
    </footer>
  );
};
