import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Link } from '../../shared/ui/Link/Link';
import { ButtonForNavigation } from '../../shared/ui/ButtonForNavigation/ButtonForNavigation';
import { BurgerMenu } from '../../shared/ui/BurgerMenu/BurgerMenu';
import { CloseButton } from '../../shared/ui/CloseButton/CloseButton';

export const NavigationList: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  const openMenu = (): void => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? <BurgerMenu onClick={openMenu} /> : null}
      {isOpen || !isMobile ? (
        <div
          className={`tablet:flex tablet:items-center tablet:gap-[40px] ${isOpen ? 'block' : 'hidden'} max-[767px]:absolute max-[767px]:inset-x-0 max-[767px]:top-0 `}
        >
          <CloseButton onClick={openMenu} />
          <nav>
            <ul className='flex max-[767px]:flex-col max-[767px]:gap-[24px] max-[767px]:bg-[#151515] max-[767px]:px-[24px] max-[767px]:py-[32px] tablet:gap-[40px]'>
              <li>
                <Link href='#home' title='Home' />
              </li>
              <li>
                <Link href='#about' title='About' />
              </li>
              <li>
                <Link href='#features' title='Features' />
              </li>
            </ul>
          </nav>
          <ButtonForNavigation
            title='Log in'
            styles='gradient rounded-[15px] desktop:blok tablet:block mobile:hidden py-[6px] px-[31px] text-[20px] font-semibold '
            path='/signin'
          />
        </div>
      ) : null}
    </>
  );
};
