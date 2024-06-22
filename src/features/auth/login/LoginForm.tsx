import { useState, type FC } from 'react';
import { Form, Formik } from 'formik';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router';
import { cookieManager } from '@shared/lib/cookieManager';
import { Input } from '@shared/ui/Input';
import { Button } from '@shared/ui/Button';
import { Icon } from '@shared/icons/Icon';
import { useStore } from '@shared/lib/useStore';
import type { LoginDTO } from './interfaces/LoginDTO';
import { login } from './api/loginApi';

export const LoginForm: FC = observer(() => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const { UserStore } = useStore();
  const navigate = useNavigate();

  const initialValues: LoginDTO = {
    email: '',
    password: '',
  };

  const handleSubmit = async (values: LoginDTO): Promise<void> => {
    if (!values.email || !values.password) {
      return;
    }
    const response = await login(values.email, values.password);

    UserStore.setUserData(response.user);
    cookieManager.setCookie('accessToken', response.accessToken);
    cookieManager.setCookie('refreshToken', response.refreshToken);
    navigate('/');
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className='m-[0_auto]'>
        <h2 className='text-center text-[36px] leading-[54px]'>Log in</h2>
        <div className='mt-[48px] flex w-[378px] flex-wrap'>
          <div className='flex flex-wrap gap-[32px]'>
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
          </div>
          <Button
            variant='gradient'
            size='m'
            title='Log in'
            className='mt-[40px] h-[64px] w-[378px] text-[32px] font-bold'
            isSubmit
          />
        </div>
      </Form>
    </Formik>
  );
});
