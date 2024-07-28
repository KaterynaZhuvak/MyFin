import type { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BudgetsPage } from '@pages/BudgetsPage';
import { ChangeAvatarPage } from '@pages/ChangeAvatarPage';
import { HomePage } from '@pages/HomePage';
import { NotFoundPage } from '@pages/NotFoundPage';
import { SettingsPage } from '@pages/SettingsPage';
import { LoginPage } from '@pages/LoginPage';
import { RegistrationPage } from '@pages/RegistrationPage';
import { ExpensesPage } from '@pages/ExpensesPage';
import { StatisticsPage } from '@pages/StatisticsPage';
import { PrivacyPolicyPage } from '@pages/PrivacyPolicyPage';
import { RootLayout, PrivateLayout } from './layouts';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='registration' element={<RegistrationPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
        <Route element={<PrivateLayout />}>
          <Route path='expenses' element={<ExpensesPage />} />
          <Route path='statistics' element={<StatisticsPage />} />
          <Route path='budgets' element={<BudgetsPage />} />
          <Route path='settings' element={<SettingsPage />}>
            <Route path='change-avatar' element={<ChangeAvatarPage />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFoundPage />} />
        <Route path='privacy-policy' element={<PrivacyPolicyPage />} />
      </Routes>
    </BrowserRouter>
  );
};
