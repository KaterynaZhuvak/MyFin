import { type FC } from 'react';
import { Rectangle } from '@shared/ui/Rectangle';
import { aboutList } from '../model';

export const About: FC = () => {
  return (
    <section
      id='section2'
      className='container mb-[59px] tablet:mb-[106px] desktop:px-[182px]'
    >
      <h2 className='mb-[24px] text-center text-[24px] font-bold tracking-[0.01rem] tablet:mb-[40px] tablet:text-[40px]'>
        About <span className='text-title-green'>M</span>y
        <span className='text-title-green'>F</span>in
      </h2>
      <p className='mb-[32px] text-[16px] font-normal leading-[24px] tablet:mb-[80px] tablet:text-[24px] tablet:leading-[36px]'>
        MyFin is a personal financial manager. Easy to use, it is an ideal
        assistant in the daily control of your budget. You can keep a spending
        log, analyze your spending statistics, and get tips for planning your
        budget. A user-friendly interface allows you to do all this in a matter
        of minutes.
      </p>
      <ul className='flex items-center justify-between'>
        {aboutList.map(({ icon, title }) => (
          <li key={icon}>
            <Rectangle
              name={icon}
              variant='purple'
              size='s'
              className='size-[40px] tablet:size-[90px]'
            />
            <p className='text-center text-[12px] tablet:text-[24px]'>
              {title}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
