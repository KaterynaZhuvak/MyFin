import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthBackgroundElement } from '@entities/auth/AuthBackgorundElement';
import { AuthFormContainer } from '@entities/auth/AuthFormContainer';
import { LoginForm } from '@features/auth/login';
import { Divider } from '@entities/auth/Divider';
import { GoogleAuth } from '@features/auth/by-google';
import { AppleAuth } from '@features/auth/by-apple';
import { AlternativeAuthContainer } from '@entities/auth/AlternativeAuthContainer';

export const LoginPage: FC = () => {
  return (
    <>
      <AuthBackgroundElement />
      <div className='mt-[100px]'>
        <AuthFormContainer>
          <h2 className='text-center text-[36px] leading-[54px]'>Log in</h2>
          <LoginForm />
          <Divider />
          <AlternativeAuthContainer>
            <GoogleAuth />
            <AppleAuth />
          </AlternativeAuthContainer>
          <span className='w-full text-center'>
            Not a member?{' '}
            <NavLink to='/registration' className='text-[#27DAB1] underline'>
              Registration
            </NavLink>
          </span>
        </AuthFormContainer>
      </div>
    </>
  );
};
