import { useEffect, useState, type FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Icon } from '@shared/icons/Icon';
import { Button } from '@shared/ui/Button';

interface LocationState {
  scrollToSection: string;
}

export const NavigationList: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const openMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string): void => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToSection: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const state = location.state as LocationState;
    const element = document.getElementById(state.scrollToSection);
    element?.scrollIntoView({ behavior: 'smooth' });
  }, [location]);

  return (
    <>
      {isMobile ? (
        <Icon
          name='menu'
          onClick={openMenu}
          className='h-[22px] w-[30px] cursor-pointer'
        />
      ) : null}
      {isOpen || !isMobile ? (
        <div
          className={`max-[767px]:absolute max-[767px]:inset-x-0 max-[767px]:top-0 max-[767px]:bg-header-background tablet:flex tablet:items-center tablet:gap-[40px] ${isOpen ? 'block' : 'hidden'}`}
        >
          <nav className='max-[767px]:container max-[767px]:relative'>
            <Icon
              name='close'
              onClick={openMenu}
              className='absolute right-[24px] top-[15px] z-10 size-[16px] cursor-pointer tablet:hidden'
            />
            <ul className='flex max-[767px]:flex-col max-[767px]:gap-[24px] max-[767px]:px-[24px] max-[767px]:py-[32px] tablet:gap-[40px]'>
              <li>
                <button
                  type='button'
                  onClick={() => {
                    scrollToSection('section1');
                  }}
                  className='font-sans text-[20px] font-semibold text-white hover:text-hover-green'
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type='button'
                  onClick={() => {
                    scrollToSection('section2');
                  }}
                  className='font-sans text-[20px] font-semibold text-white hover:text-hover-green'
                >
                  About
                </button>
              </li>
              <li>
                <button
                  type='button'
                  onClick={() => {
                    scrollToSection('section3');
                  }}
                  className='font-sans text-[20px] font-semibold text-white hover:text-hover-green'
                >
                  Features
                </button>
              </li>
            </ul>
          </nav>
          <Button
            title='Login'
            variant='gradient'
            size='s'
            className='px-[31px] mobile:hidden tablet:block'
            onClick={() => {
              navigate('/login');
            }}
          />
        </div>
      ) : null}
    </>
  );
};
