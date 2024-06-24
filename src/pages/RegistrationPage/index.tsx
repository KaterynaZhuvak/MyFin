import { type FC } from 'react';
import { NavLink } from 'react-router-dom';
import { AlternativeAuthContainer } from '@entities/auth/AlternativeAuthContainer';
import { AuthBackgroundElement } from '@entities/auth/AuthBackgorundElement/AuthBackgoundElement';
import { AuthFormContainer } from '@entities/auth/AuthFormContainer';
import { Divider } from '@entities/auth/Divider/Divider';
import { AppleAuth } from '@features/auth/by-apple';
import { GoogleAuth } from '@features/auth/by-google';
import { RegistrationForm } from '@features/auth/registaion/RegistraionForm';

export const RegistrationPage: FC = () => {
  return (
    <AuthBackgroundElement>
      <AuthFormContainer>
        <RegistrationForm />
        <Divider />
        <AlternativeAuthContainer>
          <GoogleAuth />
          <AppleAuth />
        </AlternativeAuthContainer>
        <span className='mt-[24px] w-full text-center'>
          Already a member?{' '}
          <NavLink to='/login' className='text-[#27DAB1] underline'>
            Log In
          </NavLink>
        </span>
        <span className='mt-[24px] w-full text-center'>
          By registering you agree to the{' '}
          <NavLink to='/terms-of-service' className='text-[#27DAB1] underline'>
            Terms of Service
          </NavLink>
        </span>
      </AuthFormContainer>
    </AuthBackgroundElement>
  );
};
