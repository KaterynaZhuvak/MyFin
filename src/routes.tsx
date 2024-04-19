import App from './App.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage/index.tsx';
import TopLayout from './Layout/TopLayout.tsx';
import SignInPage from './pages/SignInPage/index.tsx';
import SignUpPage from './pages/SignUpPage/index.tsx';
import AboutPage from './pages/AboutPage/index.tsx';
import SideLayout from './Layout/SideLayout.tsx';
import SpendingJournalPage from './pages/SpendingJournalPage/index.tsx';
import StatisticsPage from './pages/StatisticsPage/index.tsx';
import BudgetingPage from './pages/BudgetingPage/index.tsx';
import SettingsPage from './pages/SettingsPage/index.tsx';
import ChangeAvatarPage from './pages/ChangeAvatarPage/index.tsx';
import NotFoundPage from './pages/NotFoundPage/index.tsx';

const Router = () => {
  return (
    <BrowserRouter basename='/MyFin'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route element={<TopLayout />}>
            <Route index element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='signin' element={<SignInPage />} />
            <Route path='signup' element={<SignUpPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
          <Route path='features' element={<SideLayout />}>
            <Route index element={<SpendingJournalPage />} />
            <Route path='statistics' element={<StatisticsPage />} />
            <Route path='budgeting' element={<BudgetingPage />} />
            <Route path='settings' element={<SettingsPage />} />
            <Route
              path='settings/change-avatar'
              element={<ChangeAvatarPage />}
            />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
