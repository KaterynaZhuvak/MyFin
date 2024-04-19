import {Outlet} from 'react-router';

const SideLayout = () => {
  return (
    <div>
      <header>SideLayout</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default SideLayout;
