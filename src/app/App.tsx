import type { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BudgetsPage } from '@pages/BudgetsPage';
import { ChangeAvatarPage } from '@pages/ChangeAvatarPage';
import { HomePage } from '@pages/HomePage';
import { NotFoundPage } from '@pages/NotFoundPage';
import { LoginPage } from '@pages/LoginPage';
import { RegistrationPage } from '@pages/RegistrationPage';
import { ExpensesPage } from '@pages/ExpensesPage';
import { StatisticsPage } from '@pages/StatisticsPage';
import { SettingsAppPage } from '@pages/SettingsAppPage';
import { SettingsUserPage } from '@pages/SettingsUserPage';
import { RootLayout, PrivateLayout, SettingsLayout } from './layouts';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='registration' element={<RegistrationPage />} />
        </Route>
        <Route element={<PrivateLayout />}>
          <Route path='expenses' element={<ExpensesPage />} />
          <Route path='statistics' element={<StatisticsPage />} />
          <Route path='budgets' element={<BudgetsPage />} />
          <Route path='settings' element={<SettingsLayout />}>
            <Route path='app' element={<SettingsAppPage />} />
            <Route path='user' element={<SettingsUserPage />} />
            <Route path='change-avatar' element={<ChangeAvatarPage />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
