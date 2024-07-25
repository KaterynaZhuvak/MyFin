import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@shared/lib/cn';
import { Icon } from '@shared/icons/Icon';
import { SidebarButton } from '../SidebarButton';

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

export const Sidebar: FC = () => {
  return (
    <aside className='sticky left-0 flex h-screen w-[378px] flex-col bg-[#060606] pb-[168px]'>
      <nav className='flex grow flex-col  justify-center gap-[32px]'>
        {navItems.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                'flex h-[76px] items-center gap-[16px] pl-[75px] text-[20px] transition-all',
                {
                  'bg-gradient-to-b from-[#0D301F] to-[#074A35]  text-white':
                    isActive,
                  'text-gray-400': !isActive,
                }
              )
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
};
