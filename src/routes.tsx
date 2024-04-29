import { BrowserRouter, Route, Routes } from 'react-router-dom';
import type { FC } from 'react';
import { App } from './App.tsx';
import { HomePage } from './pages/HomePage/index.tsx';
import { SignInPage } from './pages/SignInPage/index.tsx';
import { SignUpPage } from './pages/SignUpPage/index.tsx';
import { SpendingJournalPage } from './pages/SpendingJournalPage/index.tsx';
import { StatisticsPage } from './pages/StatisticsPage/index.tsx';
import { BudgetingPage } from './pages/BudgetingPage/index.tsx';
import { SettingsPage } from './pages/SettingsPage/index.tsx';
import { ChangeAvatarPage } from './pages/ChangeAvatarPage/index.tsx';
import { NotFoundPage } from './pages/NotFoundPage/index.tsx';

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
