import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.tsx';
import TopLayout from './components/Layout/TopLayout.tsx';
import SignInPage from './pages/SignInPage/SignInPage.tsx';
import SignUpPage from './pages/SignUpPage/SignUpPage.tsx';
import AboutPage from './pages/AboutPage/AboutPage.tsx';
import SideLayout from './components/Layout/SideLayout.tsx';
import SpendingJournalPage from './pages/SpendingJournalPage/SpendingJournalPage.tsx';
import StatisticsPage from './pages/StatisticsPage/StatisticsPage.tsx';
import BudgetingPage from './pages/BudgetingPage/BudgetingPage.tsx';
import SettingsPage from './pages/SettingsPage/SettingsPage.tsx';
import ChangeAvatarPage from './pages/ChangeAvatarPage/ChangeAvatarPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename='/MyFin'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route element={<TopLayout />}>
            <Route index element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='signin' element={<SignInPage />} />
            <Route path='signup' element={<SignUpPage />} />
            <Route path='*' element={<HomePage />} />
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
            <Route path='*' element={<SpendingJournalPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
