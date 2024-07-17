import { useState, type FC } from 'react';
import { Form, Formik, type FormikHelpers } from 'formik';
import { observer } from 'mobx-react';
import type { AxiosError } from 'axios';
import * as Yup from 'yup';
import { Icon } from '@shared/icons/Icon';
import { AuthInput, AuthButton } from '@entities/auth';
import { ErrorCodes } from '@shared/enums/error-codes.enum';
import { useAuth } from '@features/auth/model/useAuth';
import type { RegistrationOptions } from '@features/auth/interfaces/registaion-options.interface';

const initialValues: RegistrationOptions = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
};

const MIN_CHARS = 8;
const MAX_CHARS = 20;

const RegistrationSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(MIN_CHARS, 'Password must be at least 8 characters')
    .max(MAX_CHARS, 'Password must be at most 20 characters')
    .required('Required'),
  repeatPassword: Yup.string()
    .min(MIN_CHARS, 'Password must be at least 8 characters')
    .max(MAX_CHARS, 'Password must be at most 20 characters')
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

        <AuthButton />
      </Form>
    </Formik>
  );
});
