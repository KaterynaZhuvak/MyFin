import type { FC } from 'react';
import { Form, Formik } from 'formik';
import { Input } from '../../shared/ui/Input';
import { EyeOffIcon } from '../../shared/icons';

interface FormValues {
  username: string;
}

export const SignUpPage: FC = () => {
  const initialValues: FormValues = {
    username: '',
  };

  const handleSubmit = (values: FormValues): void => {
    values;
  };

  return (
    <div className='bg-black'>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Input
            type='password'
            name='username'
            placeholder='Enter your email'
            iconPosition='end'
            icon={<EyeOffIcon />}
          />
        </Form>
      </Formik>
    </div>
  );
};
