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
import { RootLayout } from '@shared/ui/layouts/RootLayout';
import { PrivateRoute } from '@features/PrivateRoute';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path='expenses'
            element={<PrivateRoute component={ExpensesPage} />}
          />
          <Route
            path='statistics'
            element={<PrivateRoute component={StatisticsPage} />}
          />
          <Route
            path='budgets'
            element={<PrivateRoute component={BudgetsPage} />}
          />
          <Route
            path='settings'
            element={<PrivateRoute component={SettingsPage} />}
          >
            <Route path='change-avatar' element={<ChangeAvatarPage />} />
          </Route>

          <Route path='login' element={<LoginPage />} />
          <Route path='registration' element={<RegistrationPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
