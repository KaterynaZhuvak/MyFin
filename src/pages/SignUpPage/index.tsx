import type { FC } from 'react';
import { Form, Formik } from 'formik';
import { Input } from '../../shared/UI/Input/Input';

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
    console.log(values);
  };

  return (
    <div className='bg-black'>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Input
            name='username'
            placeholder='Enter your email'
            type='email'
            icon='check'
          />
          {/* <p>x</p>
          </Input> */}
        </Form>
      </Formik>
    </div>
  );
};
