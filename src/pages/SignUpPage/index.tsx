import type { FC } from 'react';
import { Form, Formik } from 'formik';
import { Input } from '../../shared/ui/Input';
import { CheckIcon } from '../../shared/icons';

interface FormValues {
  username: string;
  // email: string;
  // password:string;
  // repeatPassword:string;
}

export const SignUpPage: FC = () => {
  const initialValues: FormValues = {
    username: '',
  };

  const handleSubmit = (values: FormValues): void => {
    // console.log(values);
    values;
  };

  return (
    <div className='bg-black'>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Input
            name='username'
            placeholder='Enter your email'
            type='password'
            inputProps={{
              endPosition: <CheckIcon />,
            }}
          />
        </Form>
      </Formik>
    </div>
  );
};
