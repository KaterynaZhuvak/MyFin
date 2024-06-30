import { type FC } from 'react';
import { NavLink } from 'react-router-dom';
import { AlternativeAuthContainer } from '@entities/auth/AlternativeAuthContainer';
import { AuthBackgroundElement } from '@entities/auth/AuthBackgorundElement';
import { AuthFormContainer } from '@entities/auth/AuthFormContainer';
import { Divider } from '@entities/auth/Divider';
import { AppleAuth } from '@features/auth/by-apple';
import { GoogleAuth } from '@features/auth/by-google';
import { RegistrationForm } from '@features/auth/registaion';

export const RegistrationPage: FC = () => {
  return (
    <AuthBackgroundElement>
      <AuthFormContainer>
        <h2 className='text-center text-[36px] leading-[54px]'>
          Get started now
        </h2>
        <RegistrationForm />
        <Divider />
        <AlternativeAuthContainer>
          <GoogleAuth />
          <AppleAuth />
        </AlternativeAuthContainer>
        <div className='flex flex-col gap-[24px]'>
          <span className='w-full text-center'>
            Already a member?{' '}
            <NavLink to='/login' className='text-[#27DAB1] underline'>
              Log In
            </NavLink>
          </span>
          <span className='w-full text-center'>
            By registering you agree to the{' '}
            <NavLink
              to='/terms-of-service'
              className='text-[#27DAB1] underline'
            >
              Terms of Service
            </NavLink>
          </span>
        </div>
      </AuthFormContainer>
    </AuthBackgroundElement>
  );
};
