import { useState, type ReactNode } from 'react';
import type { Meta } from '@storybook/react';
import { withRouter } from 'storybook-addon-remix-react-router';
import * as Yup from 'yup';
import { Formik, Form, useField, ErrorMessage } from 'formik';
import { cn } from '@shared/lib/cn';
import type { LoginOptions } from '@features/auth/login/interfaces/login-options.interface';
import { Input } from '@shared/ui/Input';
import { Icon } from '@shared/icons/Icon';
import { useAuth } from '@features/auth/model/useAuth';

const meta: Meta<typeof Input> = {
  title: 'ui/AuthInput',
  component: Input,
  decorators: [withRouter],
  parameters: { layout: 'centered' },
};

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

interface Args {
  label: string;
  type: string;
  name: string;
  className: string;
  placeholder: string;
  icon?: ReactNode;
}

const InputComponent = ({
  isVisiblePassword,
  togglePasswordVisibility,
  ...args
}: Args & {
  isVisiblePassword: boolean;
  togglePasswordVisibility: () => void;
}) => {
  const [field, fieldMeta] = useField(args.name);

  const icon = (
    <Icon
      name={isVisiblePassword ? 'eye' : 'eye-off'}
      className='absolute right-[16px] top-[12px] size-[20px] tablet:top-[22px] tablet:size-[24px]'
      onClick={togglePasswordVisibility}
    />
  );

  return (
    <>
      <Input
        {...field}
        className={cn(
          args.className,
          fieldMeta.touched && fieldMeta.error ? 'border-red-500' : ''
        )}
        label={args.label}
        type={isVisiblePassword ? 'text' : args.type}
        icon={icon}
        placeholder={args.placeholder}
      />
      {fieldMeta.touched && !fieldMeta.error && (
        <Icon
          name='form-ok'
          className={`absolute ${args.icon ? 'right-[-40px]' : 'right-[16px]'} top-[62px] size-[20px] -translate-y-1/2 rounded-full bg-gradient-to-br from-[#05A67B] via-[#093423] to-[#093423] tablet:right-[-40px] tablet:top-[72px] tablet:size-[24px]`}
        />
      )}
      {fieldMeta.touched && fieldMeta.error && (
        <Icon
          name='form-error'
          className={`absolute ${args.icon ? 'right-[-40px]' : 'right-[16px]'} top-[62px] size-[20px] -translate-y-1/2 rounded-full bg-gradient-to-t from-[#FF4444] to-[#FF7363] tablet:right-[-40px] tablet:top-[72px] tablet:size-[24px]`}
        />
      )}
      <ErrorMessage name={args.name}>
        {(msg) => <div className='text-red-500'>{msg}</div>}
      </ErrorMessage>
    </>
  );
};

const FormComponent = ({ args }: { args: Args }) => {
  const { handleSubmitLogin } = useAuth();
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const togglePasswordVisibility = () => {
    setIsVisiblePassword(!isVisiblePassword);
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
      <Form className='relative'>
        <InputComponent
          isVisiblePassword={isVisiblePassword}
          togglePasswordVisibility={togglePasswordVisibility}
          {...args}
        />
      </Form>
    </Formik>
  );
};

const Template = (args: Args): ReactNode => <FormComponent args={args} />;

export default meta;

export const PasswordStory = Template.bind({});
PasswordStory.args = {
  label: 'Password',
  type: 'password',
  name: 'password',
  className:
    'h-[44px] w-[318px] rounded-[10px] pl-5 text-base tablet:h-[64px] tablet:w-[378px] tablet:rounded-[15px]',
  placeholder: 'Enter your password',
  icon: (
    <Icon
      name={'eye'}
      className='absolute right-[16px] top-[12px] size-[20px] tablet:top-[22px] tablet:size-[24px]'
    />
  ),
};

export const EmailStory = Template.bind({});
EmailStory.args = {
  label: 'Email',
  type: 'email',
  name: 'email',
  className:
    'h-[44px] w-[318px] rounded-[10px] pl-5 text-base tablet:h-[64px] tablet:w-[378px] tablet:rounded-[15px]',
  placeholder: 'Enter your email',
};
