import type { JSX } from 'react';
import { AuthBackgroundElement } from '@shared/ui/AuthBackgorundElement/AuthBackgoundElement';
import { AuthFormContainer } from '@shared/ui/AuthFormContainer';
import { LoginForm } from '@features/LoginForm/LoginForm';
import { OrElement } from '@shared/ui/OrElemnt/OrElement';
import { GoogleAuth } from '@features/GoogleAuth';
import { AppleAuth } from '@features/AppleAuth';
import { AlternativeAuthContainer } from '@shared/ui/AlternativeAuthContainer';

export const LoginWidget = (): JSX.Element => {
  return (
    <AuthBackgroundElement>
      <AuthFormContainer>
        <LoginForm />
        <OrElement />
        <AlternativeAuthContainer>
          <GoogleAuth />
          <AppleAuth />
        </AlternativeAuthContainer>
      </AuthFormContainer>
    </AuthBackgroundElement>
  );
};
