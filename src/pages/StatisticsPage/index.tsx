import { type FC } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

const isActiveStyles = ({ isActive }: { isActive: boolean }): string =>
  isActive
    ? 'text-[34px] font-bold text-bright-green'
    : 'text-[29px] font-normal underline';

export const StatisticsPage: FC = () => {
  const location = useLocation();

  if (location.pathname === '/statistics') {
    return <Navigate to='statistics-for-this-month' replace />;
  }

  return (
    <section className='size-full'>
      <div className='mb-[32px] flex gap-[40px]'>
        <NavLink to='statistics-for-this-month' className={isActiveStyles}>
          Statistics for this month
        </NavLink>
        <NavLink to='comparative-analysis' className={isActiveStyles}>
          Comparative analysis
        </NavLink>
      </div>
      <Outlet />
    </section>
  );
};
