import { useState, type FC } from 'react';
import { Form, Formik, type FormikHelpers } from 'formik';
import { observer } from 'mobx-react';
import type { AxiosError } from 'axios';
import * as Yup from 'yup';
import { Input } from '@shared/ui/Input';
import { Button } from '@shared/ui/Button';
import { Icon } from '@shared/icons/Icon';
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

interface ErrorGeneric {
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
      const errorObj = error as AxiosError<ErrorGeneric>;
      if (errorObj.response?.data.errorCode === 1000) {
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
      <Form className='m-[0_auto] flex w-[378px] flex-wrap gap-[32px]'>
        <Input
          type='firstName'
          name='firstName'
          placeholder='Enter your first name'
          label='First Name'
          className='h-[64px] w-[378px]'
        />

        <Input
          type='lastName'
          name='lastName'
          placeholder='Enter your last name'
          label='Last Name'
          className='h-[64px] w-[378px]'
        />

        <Input
          type='email'
          name='email'
          placeholder='Enter your email'
          label='Your email'
          className='h-[64px] w-[378px]'
        />

        <Input
          type={isVisiblePassword ? 'text' : 'password'}
          name='password'
          placeholder='Enter your password'
          iconPosition='end'
          icon={
            <Icon
              name={isVisiblePassword ? 'eye' : 'eye-off'}
              className='size-[24px]'
              onClick={() => {
                setIsVisiblePassword(!isVisiblePassword);
              }}
            />
          }
          label='Password'
          className='h-[64px] w-[378px]'
        />

        <Input
          type={isVisiblePassword ? 'text' : 'password'}
          name='repeatPassword'
          placeholder='Repeat your password'
          iconPosition='end'
          icon={
            <Icon
              name={isVisiblePassword ? 'eye' : 'eye-off'}
              className='size-[24px]'
              onClick={() => {
                setIsVisiblePassword(!isVisiblePassword);
              }}
            />
          }
          label='Repeat Password'
          className='h-[64px] w-[378px]'
        />

        <Button
          variant='gradient'
          size='m'
          title='Register'
          className='mt-[12px] h-[64px] w-[378px] text-[32px] font-bold'
          isSubmit
        />
      </Form>
    </Formik>
  );
});
