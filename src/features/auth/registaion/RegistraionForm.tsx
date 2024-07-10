import { useState, type FC } from 'react';
import { Form, Formik, type FormikHelpers } from 'formik';
import { observer } from 'mobx-react';
import type { AxiosError } from 'axios';
import * as Yup from 'yup';
import { AuthInput } from '@entities/auth/AuthInput';
import { Button } from '@shared/ui/Button';
import { Icon } from '@shared/icons/Icon';
import { ErrorCodes } from '../lib/errorCodes.enum';
import { useAuth } from '../model/useAuth';
import type { RegistrationOptions } from './interfaces/registaion-options.interface';

const initialValues: RegistrationOptions = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
};

const RegistrationSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password must be at most 20 characters')
    .required('Required'),
  repeatPassword: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password must be at most 20 characters')
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required'),
});

interface ErrorResponse {
  errorCode: number;
}

export const RegistrationForm: FC = observer(() => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const { handleSubmitRegistration } = useAuth();

  const handleSubmit = async (
    values: RegistrationOptions,
    { setFieldError }: FormikHelpers<RegistrationOptions>
  ): Promise<void> => {
    try {
      await handleSubmitRegistration(values);
    } catch (error) {
      const errorResponse = error as AxiosError<ErrorResponse>;
      if (errorResponse.response?.data.errorCode === ErrorCodes.ExistingUser) {
        setFieldError('email', 'User already exists');
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegistrationSchema}
      onSubmit={handleSubmit}
    >
      <Form className='m-[0_auto] flex w-[318px] flex-col flex-wrap gap-[32px] tablet:w-[378px]'>
        <AuthInput
          type='firstName'
          name='firstName'
          placeholder='Enter your first name'
          label='First Name'
        />

        <AuthInput
          type='lastName'
          name='lastName'
          placeholder='Enter your last name'
          label='Last Name'
        />

        <AuthInput
          type='email'
          name='email'
          placeholder='Enter your email'
          label='Your email'
        />

        <AuthInput
          type={isVisiblePassword ? 'text' : 'password'}
          name='password'
          placeholder='Enter your password'
          icon={
            <Icon
              name={isVisiblePassword ? 'eye' : 'eye-off'}
              className='absolute right-[16px] top-[12px] size-[20px] tablet:top-[22px] tablet:size-[24px]'
              onClick={() => {
                setIsVisiblePassword(!isVisiblePassword);
              }}
            />
          }
          label='Password'
        />

        <AuthInput
          type={isVisiblePassword ? 'text' : 'password'}
          name='repeatPassword'
          placeholder='Repeat your password'
          icon={
            <Icon
              name={isVisiblePassword ? 'eye' : 'eye-off'}
              className='absolute right-[16px] top-[12px] size-[20px] tablet:top-[22px] tablet:size-[24px]'
              onClick={() => {
                setIsVisiblePassword(!isVisiblePassword);
              }}
            />
          }
          label='Repeat Password'
        />

        <Button
          variant='gradient'
          size='m'
          title='Register'
          className='mt-[12px] h-[56px] w-[318px] py-[auto] text-[32px] font-bold tablet:h-[64px] tablet:w-[378px]'
          isSubmit
        />
      </Form>
    </Formik>
  );
});
