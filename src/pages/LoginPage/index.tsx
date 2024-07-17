import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import {
  IntegrationAuthContainer,
  AuthBackgroundElement,
  Divider,
  AuthFormContainer,
} from '@entities/auth';
import { GoogleButton, LoginForm, AppleButton } from '@features/auth';

export const LoginPage: FC = () => {
  return (
    <AuthBackgroundElement>
      <AuthFormContainer>
        <h2 className='text-center text-[25px] leading-[54px] tablet:text-[36px]'>
          Log in
        </h2>
        <LoginForm />
        <Divider />
        <IntegrationAuthContainer>
          <GoogleButton />
          <AppleButton />
        </IntegrationAuthContainer>
        <span className='w-full text-center text-[16px] tablet:text-[20px]'>
          Not a member?{' '}
          <NavLink to='/registration' className='text-[#27DAB1] underline'>
            Registration
          </NavLink>
        </span>
      </AuthFormContainer>
    </AuthBackgroundElement>
  );
};
