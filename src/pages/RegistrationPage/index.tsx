import type { FC } from 'react';
import { Form, Formik } from 'formik';
import { Input } from '../../shared/ui/Input';
import { EyeOffIcon } from '../../shared/icons';

interface FormValues {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export const RegistrationPage: FC = () => {
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
      h-[1320px]
      w-[full]
      justify-end
      bg-[url(../../shared/assets/backgrounds/bg-auth.svg),_url(../../shared/assets/backgrounds/bg-auth-lines.svg)]
      bg-[length:1680px_1520px,_1400px_1080px]
      bg-[position:55%_25%,_50%_0]
      bg-no-repeat 
      p-[73px_182px_0_0]'
    >
      <div
        className='
        flex
        h-[1184px]
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

            <div className='mt-[48px] flex w-[378px] flex-wrap gap-[32px]'>
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
                type='password'
                name='password'
                placeholder='Enter your password'
                iconPosition='end'
                icon={<EyeOffIcon />}
                label='Password'
                className='h-[64px] w-[378px]'
              />

              <Input
                type='password'
                name='repeatPassword'
                placeholder='Repeat your password'
                iconPosition='end'
                icon={<EyeOffIcon />}
                label='Repeat Password'
                className='h-[64px] w-[378px]'
              />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
