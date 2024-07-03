import { useState, type FC } from 'react';
import { Form, Formik } from 'formik';
import { observer } from 'mobx-react';
import * as Yup from 'yup';
import { Input } from '@shared/ui/Input';
import { Button } from '@shared/ui/Button';
import { Icon } from '@shared/icons/Icon';
import { useAuth } from '../model/useAuth';
import type { LoginOptions } from './interfaces/login-options.interface';

export const LoginForm: FC = observer(() => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const { handleSubmitLogin } = useAuth();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(20, 'Password must be at most 20 characters')
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
      <Form className='m-[0_auto] flex w-[318px] flex-col flex-wrap  gap-[32px] tablet:w-[378px] '>
        <Input
          type='email'
          name='email'
          placeholder='Enter your email'
          label='Your email'
          className='h-[44px] w-[318px] tablet:h-[64px] tablet:w-[378px]'
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
          className='h-[44px] w-[318px] tablet:h-[64px] tablet:w-[378px]'
        />
        <Button
          variant='gradient'
          size='m'
          title='Log in'
          className='mt-[10px] h-[64px] w-[378px] text-[32px] font-bold'
          isSubmit
        />
      </Form>
    </Formik>
  );
});
