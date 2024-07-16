import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@shared/lib/cn';
import { Icon } from '@shared/icons/Icon';
import { Button } from '@shared/ui/Button';

const navItems = [
  { to: '/expenses', label: 'Expenses', icon: 'expenses' },
  { to: '/statistics', label: 'Statistics', icon: 'statistics' },
  { to: '/budgets', label: 'Budgets', icon: 'budgets' },
  { to: '/settings', label: 'Settings', icon: 'settings' },
];

export const Sidebar: FC = () => {
  return (
    <aside className='flex flex-col bg-[#060606]'>
      <Icon
        name='logo'
        className='m-[0_auto] mt-[24px] w-[186px] cursor-pointer '
      />
      <nav className='mb-[562px] mt-[363px] flex h-full flex-col justify-center gap-[32px]'>
        {navItems.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn('flex h-[76px] w-[378px] items-center transition-all', {
                'bg-gradient-to-t from-[#05A67B] via-[#093423] to-[#093423] text-white':
                  isActive,
                'text-gray-400': !isActive,
              })
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <Button
        title='Log out'
        className='m-[0_auto] mb-[168px] h-[42px] w-[152px] text-white'
      />
    </aside>
  );
};
