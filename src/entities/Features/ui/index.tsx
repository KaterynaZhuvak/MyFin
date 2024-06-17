import type { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Icon } from '@shared/icons/Icon';
import { Rectangle } from '@shared/ui/Rectangle';
import { rectangleList } from '../model';

export const Features: FC = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <section className='container mb-[59px] tablet:mb-[106px] desktop:px-[182px]'>
      <h2 className='mb-[24px] text-center text-[24px] font-bold tracking-[0.01rem] tablet:mb-[80px] tablet:text-[40px]'>
        <span className='text-title-green'>F</span>eatures
      </h2>
      <ul>
        {rectangleList.map(({ title, description, icon }, index) => (
          <li key={title} className='mb-[56px] tablet:mb-[192px]'>
            <p
              className={`mb-[8px] flex w-[120px] justify-center text-[14px] font-bold tablet:mb-[16px] tablet:w-[300px] tablet:text-[32px] ${
                index % 2 === 1 ? 'ml-auto flex-row-reverse' : ''
              }`}
            >
              {title}
            </p>
            <div
              className={`relative flex items-center gap-[14px] tablet:gap-[16px] ${
                index % 2 === 1 ? 'flex-row-reverse' : ''
              }`}
            >
              <Rectangle
                name={icon}
                variant='green'
                size='m'
                className='size-[50px] tablet:size-[100px]'
              />
              <p className='text-[16px] font-normal leading-[18px] tablet:text-[24px] tablet:leading-[36px]'>
                {description}
              </p>
              <Icon
                name={isMobile ? 'line-mobile' : 'line'}
                className={`absolute tablet:h-[180px] tablet:w-[230px] desktop:h-[185px] desktop:w-[430px] 
                ${index === rectangleList.length - 1 ? 'hidden' : ''} 
                ${index % 2 === 0 ? 'top-[200px] rotate-[80deg] tablet:left-[270px] tablet:top-[320px] tablet:rotate-90 desktop:left-[320px] desktop:top-[320px] desktop:rotate-[53deg]' : 'left-[130px] top-[125px] tablet:left-[180px] tablet:top-[320px] tablet:rotate-[-50deg] desktop:left-[320px] desktop:top-[320px] desktop:rotate-[-5deg]'}`}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
