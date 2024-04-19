import {Outlet} from 'react-router';
import {Link} from 'react-router-dom';

const TopLayout = () => {
  return (
    <div>
      <header>
        Header{' '}
        <Link className='text-blue-700' to='features'>
          SpendingJournal
        </Link>
      </header>
      <main>{<Outlet />}</main>
    </div>
  );
};

export default TopLayout;
