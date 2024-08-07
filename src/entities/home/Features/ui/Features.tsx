import type { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
import { observer } from 'mobx-react';
import { useStore } from '@shared/lib/useStore';
import { Icon } from '@shared/icons/Icon';
import { Rectangle } from '@shared/ui/Rectangle';
import { featuresList } from '../model';

export const Features: FC = observer(() => {
  const { navigationStore } = useStore();
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <section
      ref={navigationStore.sectionRefs.features}
      className='container mb-[96px] tablet:mb-[176px] desktop:px-[182px]'
    >
      <h2 className='mb-[24px] text-center text-[24px] font-bold tracking-[0.01rem] tablet:mb-[80px] tablet:text-[40px]'>
        <span className='text-title-green'>F</span>eatures
      </h2>
      <ul>
        {featuresList.map(({ title, description, icon }, index) => (
          <li key={title} className='mb-[56px] last:mb-0 tablet:mb-[192px]'>
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
                className={`absolute w-[80px] tablet:h-[180px] tablet:w-[230px] desktop:h-[185px] desktop:w-[430px] 
                ${index === featuresList.length - 1 ? 'hidden' : ''} 
                ${index % 2 === 0 ? 'left-[130px] top-[80px] rotate-[85deg] tablet:left-[230px] tablet:top-[330px] tablet:rotate-[93deg] desktop:left-[320px] desktop:top-[320px] desktop:rotate-[53deg]' : 'left-[130px] top-[90px] tablet:left-[220px] tablet:top-[340px] tablet:rotate-[-50deg] desktop:left-[320px] desktop:top-[320px] desktop:rotate-[-5deg]'}`}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
});
