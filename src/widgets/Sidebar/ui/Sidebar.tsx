import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@shared/lib/cn';
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
      <nav className='mb-[562px] mt-[363px] flex h-full flex-col justify-center gap-[32px]'>
        {navItems.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                'flex h-[76px] w-[378px] items-center text-[20px] transition-all',
                {
                  'bg-gradient-to-b from-[#0D301F] to-[#074A35]  text-white':
                    isActive,
                  'text-gray-400': !isActive,
                }
              )
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <Button
        title='Log out'
        className='m-[0_auto] mb-[168px] h-[42px] w-[152px] bg-gradient-to-r from-[#2ED1A0] to-[#183228] bg-clip-text text-[20px] text-transparent'
      />
    </aside>
  );
};
