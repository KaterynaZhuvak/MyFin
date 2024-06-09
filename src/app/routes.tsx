import { BrowserRouter, Route, Routes } from 'react-router-dom';
import type { FC } from 'react';
import { NotFoundPage } from '../pages/NotFoundPage';
import { HomePage } from '../pages/HomePage';
import { SpendingJournalPage } from '../pages/SpendingJournalPage';
import { StatisticsPage } from '../pages/StatisticsPage';
import { BudgetingPage } from '../pages/BudgetingPage';
import { SettingsPage } from '../pages/SettingsPage';
import { ChangeAvatarPage } from '../pages/ChangeAvatarPage';
import { LoginPage } from '../pages/LoginPage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { App } from './App';

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='spending-journal' element={<SpendingJournalPage />} />
          <Route path='statistics' element={<StatisticsPage />} />
          <Route path='budgeting' element={<BudgetingPage />} />
          <Route path='settings' element={<SettingsPage />} />
          <Route path='settings/change-avatar' element={<ChangeAvatarPage />} />

          <Route path='login' element={<LoginPage />} />
          <Route path='registration' element={<RegistrationPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
