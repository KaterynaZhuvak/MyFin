import { useState, type FC } from 'react';
import { Form, Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import { Input } from '../../shared/ui/Input';
import { Button } from '../../shared/ui/Button';
import { Icon } from '../../shared/icons/Icon';

interface FormValues {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export const RegistrationPage: FC = () => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const initialValues: FormValues = {
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  };

  const handleSubmit = (values: FormValues): void => {
    values;
  };

  return (
    <div
      className='
      flex
      size-full
      justify-end
      bg-[url(../../shared/assets/backgrounds/bg-auth.svg),_url(../../shared/assets/backgrounds/bg-auth-lines.svg)]
      bg-[length:1680px_1520px,_1400px_1080px]
      bg-[position:50%_10%,_50%_0]
      bg-repeat
      p-[73px_182px_64px_0]'
    >
      <div
        className='
        flex
        h-auto
        w-[526px] 
        justify-center 
        rounded-[20px] 
        border
        bg-black
        p-[32px_0_72px_0]'
      >
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <h2 className='text-center text-[36px] leading-[54px]'>
              Get started now
            </h2>

            <div className='mt-[48px] flex w-[378px] flex-wrap'>
              <div className='flex flex-wrap gap-[32px]'>
                <Input
                  type='username'
                  name='username'
                  placeholder='Enter your username'
                  label='Username'
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
                      width='24'
                      height='24'
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
                      width='24'
                      height='24'
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
                className='mt-[40px] text-[32px] font-bold'
              />

              <div className='mt-[40px] flex h-[41px] w-[378px] items-center justify-center gap-[12px]'>
                <div className='w-[165px] border-t border-white' />
                <span className='text-[20px]'>or</span>
                <div className='w-[165px] border-t border-white' />
              </div>

              <div className='mt-[40px] flex flex-wrap gap-[32px]'>
                <Button
                  disabled
                  variant='outline'
                  size='m'
                  title='Continue with Google'
                  className='flex items-center justify-center gap-[16px] text-[20px]'
                  iconPosition='start'
                  icon={<Icon name='google' width='24' height='24' />}
                />

                <Button
                  disabled
                  variant='outline'
                  size='m'
                  title='Continue with Apple'
                  className='flex items-center justify-center gap-[16px] text-[20px]'
                  iconPosition='start'
                  icon={<Icon name='apple' width='24' height='28' />}
                />

                <span className='w-full text-center'>
                  Already a member?{' '}
                  <NavLink to='#' className='text-[#27DAB1] underline'>
                    Log In
                  </NavLink>
                </span>

                <span className='w-full text-center'>
                  By registering you agree to the{' '}
                  <NavLink to='#' className='text-[#27DAB1] underline'>
                    terms of service
                  </NavLink>
                  .
                </span>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
