import type { FC } from 'react';
import { Form, Formik } from 'formik';
import { Input } from '../../shared/ui/Input';
import { EyeOffIcon } from '../../shared/icons';

interface FormValues {
  username: string;
}

export const RegistrationPage: FC = () => {
  const initialValues: FormValues = {
    username: '',
  };

  const handleSubmit = (values: FormValues): void => {
    values;
  };

  return (
    <div
      className='
      h-[1320px]
      w-[full]
      bg-[url(../../shared/assets/backgrounds/bg-auth.svg),_url(../../shared/assets/backgrounds/bg-auth-lines.svg)]
      bg-[length:1680px_1520px,_1400px_1080px]
      bg-[position:55%_25%,_50%_0]
      bg-no-repeat'
    >
      <div
        className='
      h-[1184px] 
      w-[526px] 
      rounded-[20px] 
      border
      bg-black'
      >
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            Get started now
            <Input
              type='password'
              name='username'
              placeholder='Enter your username'
              label='Username'
              className='h-[64px] w-[378px]'
            />
            <Input
              type='password'
              name='username'
              placeholder='Enter your email'
              label='Your email'
              className='h-[64px] w-[378px]'
            />
            <Input
              type='password'
              name='username'
              placeholder='Enter your password'
              iconPosition='end'
              icon={<EyeOffIcon />}
              label='Password'
              className='relative h-[64px] w-[378px]'
            />
            <Input
              type='password'
              name='username'
              placeholder='Repeat your password'
              iconPosition='end'
              icon={<EyeOffIcon />}
              label='Repeat Password'
              className='relative h-[64px] w-[378px]'
            />
          </Form>
        </Formik>
      </div>
    </div>
  );
};
