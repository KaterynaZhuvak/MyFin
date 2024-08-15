import { Suspense, type FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const SettingsPage: FC = () => {
  return (
    <div className='w-full flex-col'>
      <div className='flex gap-[32px] pl-[24px] pt-[40px]'>
        <NavLink
          to='/settings/app'
          className={({ isActive }) =>
            `text-[34px] font-bold tracking-[0.01rem] ${
              isActive ? 'text-hover-green' : 'text-white underline'
            }`
          }
        >
          AppSettings
        </NavLink>
        <NavLink
          to='/settings/user'
          className={({ isActive }) =>
            `text-[34px] font-bold tracking-[0.01rem] ${
              isActive ? 'text-hover-green' : 'text-white underline'
            }`
          }
        >
          UserSettings
        </NavLink>
      </div>
      <div className='mt-[72px] flex flex-col items-center'>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
