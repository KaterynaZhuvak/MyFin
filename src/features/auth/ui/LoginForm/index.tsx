import { useState, type FC } from 'react';
import { Form, Formik } from 'formik';
import { observer } from 'mobx-react';
import * as Yup from 'yup';
import { AuthButton, AuthInput } from '@entities/auth';
import { Icon } from '@shared/icons/Icon';
import { useAuth } from '@features/auth/model/useAuth';
import type { LoginOptions } from '@features/auth/interfaces/login-options.interface';

const MIN_CHARS = 8;
const MAX_CHARS = 20;

export const LoginForm: FC = observer(() => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const { handleSubmitLogin } = useAuth();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(MIN_CHARS, 'Password must be at least 8 characters')
      .max(MAX_CHARS, 'Password must be at most 20 characters')
      .required('Required'),
  });
  const initialValues: LoginOptions = {
    email: '',
    password: '',
  };
  const handleSubmit = async (values: LoginOptions): Promise<void> => {
    await handleSubmitLogin(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      <Form className='m-[0_auto] flex w-[318px] flex-col flex-wrap gap-[32px] tablet:w-[378px]'>
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
        <AuthButton />
      </Form>
    </Formik>
  );
});
