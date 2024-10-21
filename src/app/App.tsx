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
import { AppSettings } from '@entities/settings/app';
import { UserSettings } from '@entities/settings/user';
import { PrivacyPolicyPage } from '@pages/PrivacyPolicyPage';
import { StatisticsForThisMonth } from '@pages/StatisticsForThisMonth';
import { ComparativeAnalysis } from '@pages/ComparativeAnalysis';
import { RootLayout, PrivateLayout } from './layouts';

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
          <Route path='expenses'>
            <Route index element={<ExpensesPage />} />
          </Route>
          <Route path='statistics/*' element={<StatisticsPage />}>
            <Route
              path='statistics-for-this-month'
              element={<StatisticsForThisMonth />}
            />
            <Route
              path='comparative-analysis'
              element={<ComparativeAnalysis />}
            />
          </Route>
          <Route path='budgets' element={<BudgetsPage />} />
          <Route path='settings' element={<SettingsPage />}>
            <Route path='app' element={<AppSettings />} />
            <Route path='user' element={<UserSettings />} />
            <Route path='change-avatar' element={<ChangeAvatarPage />} />
          </Route>
        </Route>
        <Route path='privacy-policy' element={<PrivacyPolicyPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
