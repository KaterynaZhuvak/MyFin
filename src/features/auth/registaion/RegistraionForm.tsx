import { useState, type FC } from 'react';
import { Form, Formik } from 'formik';
import { observer } from 'mobx-react';
import * as Yup from 'yup';
import { Input } from '@shared/ui/Input';
import { Button } from '@shared/ui/Button';
import { Icon } from '@shared/icons/Icon';
import { useAuth } from '../module/useAuth';
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

export const RegistrationForm: FC = observer(() => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const { handleSubmitRegistration } = useAuth();

  const handleSubmit = async (values: RegistrationOptions): Promise<void> => {
    await handleSubmitRegistration(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegistrationSchema}
      onSubmit={handleSubmit}
    >
      <Form className='m-[0_auto]'>
        <h2 className='text-center text-[36px] leading-[54px]'>
          Get started now
        </h2>

        <div className='mt-[48px] flex w-[378px] flex-wrap'>
          <div className='flex flex-wrap gap-[32px]'>
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
          </div>

          <Button
            variant='gradient'
            size='m'
            title='Register'
            className='mt-[40px] h-[64px] w-[378px] text-[32px] font-bold'
            isSubmit
          />
        </div>
      </Form>
    </Formik>
  );
});
