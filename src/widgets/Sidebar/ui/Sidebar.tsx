import { type FC } from 'react';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react';
import { cn } from '@shared/lib/cn';
import { Icon } from '@shared/icons/Icon';
import { useStore } from '@shared/lib/useStore';
import { SidebarButton } from './SidebarButton';

const navItems = [
  {
    to: '/expenses',
    label: 'Expenses',
    icon: <Icon className='size-[24px]' name='notebook' />,
  },
  {
    to: '/statistics',
    label: 'Statistics',
    icon: <Icon className='size-[24px]' name='stonks' />,
  },
  {
    to: '/budgets',
    label: 'Budgets',
    icon: <Icon className='size-[24px]' name='wallet' />,
  },
  {
    to: '/settings',
    label: 'Settings',
    icon: <Icon className='size-[24px]' name='settings' />,
  },
];

export const Sidebar: FC = observer(() => {
  const { sidebarStore } = useStore();

  const navItemOnClick = (): void => {
    if (window.innerWidth <= 768) {
      sidebarStore.setIsOpen(false);
    }
  };

  const asideStyles = `
    ${sidebarStore.isOpen ? 'left-0' : 'left-[-100%]'}
    absolute
    flex
    size-full
    tablet:w-[378px]
    flex-col
    bg-[#060606]
    p-[110px_0_80px_0]

    tablet:p-[340px_0_168px_0]
    tablet:static
  `;

  const navLinkStyles = `
    flex
    h-[76px]
    items-center
    gap-[16px]
    text-[20px]
    transition-all
    border-black
    justify-center
    select-none

    tablet:justify-start
    tablet:pl-[75px]

    hover:pl-[20px]
    hover:text-white

    tablet:hover:pl-[85px]
  `;

  return (
    <aside className={asideStyles}>
      <nav className='flex h-[376px] grow flex-col justify-center gap-[24px]'>
        {navItems.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            onClick={navItemOnClick}
            className={({ isActive }) =>
              cn(navLinkStyles, {
                'bg-gradient-to-b from-[#0D301F] to-[#074A35] text-white':
                  isActive,
                'text-gray-400': !isActive,
              })
            }
          >
            {icon}
            {label}
          </NavLink>
        ))}
      </nav>
      <SidebarButton />
    </aside>
  );
});
