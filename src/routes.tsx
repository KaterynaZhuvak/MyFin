import { BrowserRouter, Route, Routes } from 'react-router-dom';
import type { FC } from 'react';
import { App } from './App.tsx';
import { HomePage } from './pages/homePage/index.tsx';
import { SignInPage } from './pages/signInPage/index.tsx';
import { SignUpPage } from './pages/signUpPage/index.tsx';
import { SpendingJournalPage } from './pages/spendingJournalPage/index.tsx';
import { StatisticsPage } from './pages/statisticsPage/index.tsx';
import { BudgetingPage } from './pages/budgetingPage/index.tsx';
import { SettingsPage } from './pages/settingsPage/index.tsx';
import { ChangeAvatarPage } from './pages/changeAvatarPage/index.tsx';
import { NotFoundPage } from './pages/notFoundPage/index.tsx';

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
