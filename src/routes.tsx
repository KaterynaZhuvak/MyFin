import { BrowserRouter, Route, Routes } from 'react-router-dom';
import type { FC } from 'react';
import { App } from './App';
import { HomePage } from './pages/homePage';
import { SpendingJournalPage } from './pages/spendingJournalPage';
import { StatisticsPage } from './pages/statisticsPage';
import { BudgetingPage } from './pages/budgetingPage';
import { SettingsPage } from './pages/settingsPage';
import { ChangeAvatarPage } from './pages/changeAvatarPage';
import { SignInPage } from './pages/signInPage';
import { SignUpPage } from './pages/signUpPage';
import { NotFoundPage } from './pages/notFoundPage';

export const Router: FC = () => {
  return (
    <BrowserRouter basename='/MyFin'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='spending-journal' element={<SpendingJournalPage />} />
          <Route path='statistics' element={<StatisticsPage />} />
          <Route path='budgeting' element={<BudgetingPage />} />
          <Route path='settings' element={<SettingsPage />} />
          <Route path='settings/change-avatar' element={<ChangeAvatarPage />} />

          <Route path='signin' element={<SignInPage />} />
          <Route path='signup' element={<SignUpPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
