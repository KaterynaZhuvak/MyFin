import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthBackgroundElement } from '@entities/auth/AuthBackgorundElement/AuthBackgoundElement';
import { AuthFormContainer } from '@entities/auth/AuthFormContainer';
import { LoginForm } from '@features/auth/login';
import { Divider } from '@entities/auth/Divider/Divider';
import { GoogleAuth } from '@features/auth/by-google';
import { AppleAuth } from '@features/auth/by-apple';
import { AlternativeAuthContainer } from '@entities/auth/AlternativeAuthContainer';

export const LoginPage: FC = () => {
  return (
    <AuthBackgroundElement>
      <AuthFormContainer>
        <LoginForm />
        <Divider />
        <AlternativeAuthContainer>
          <GoogleAuth />
          <AppleAuth />
        </AlternativeAuthContainer>
        <span className='mt-[24px] w-full text-center'>
          Not a member?{' '}
          <NavLink to='/registration' className='text-[#27DAB1] underline'>
            Registration
          </NavLink>
        </span>
      </AuthFormContainer>
    </AuthBackgroundElement>
  );
};
