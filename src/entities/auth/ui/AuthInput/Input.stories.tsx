import { type ReactElement, useState } from 'react';
import { Form } from 'react-router-dom';
import { type Meta, type StoryFn } from '@storybook/react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { withRouter } from 'storybook-addon-remix-react-router';
import { Icon } from '@shared/icons/Icon';
import { AuthInput, type InputProps } from '.';

const meta: Meta<typeof AuthInput> = {
  title: 'ui/AuthInput',
  component: AuthInput,
  decorators: [withRouter],
  parameters: { layout: 'centered' },
};

export default meta;

const Template: StoryFn<InputProps> = (args: InputProps) => (
  <FormComponent {...args} />
);

const FormComponent = (args: InputProps): ReactElement => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const icon = (
    <Icon
      name={isVisiblePassword ? 'eye' : 'eye-off'}
      className='absolute right-[16px] top-[12px] size-[20px] tablet:top-[22px] tablet:size-[24px]'
      onClick={() => {
        setIsVisiblePassword(!isVisiblePassword);
      }}
    />
  );

  return (
    <Formik
      initialValues={{ [args.name]: '' }}
      validationSchema={Yup.object({
        [args.name]: Yup.string()
          .required('This field is required')
          .min(8, 'Must be at least 8 characters')
          .max(20, 'Must be at most 20 characters'),
      })}
      onSubmit={() => {}}
    >
      <Form>
        <AuthInput
          label={args.label}
          type={
            args.type === 'password'
              ? isVisiblePassword
                ? 'text'
                : 'password'
              : args.type
          }
          name={args.name}
          placeholder={args.placeholder}
          icon={args.type === 'password' ? icon : undefined}
        />
      </Form>
    </Formik>
  );
};

export const PasswordStory = Template.bind({});
PasswordStory.args = {
  label: 'Password',
  type: 'password',
  name: 'password',
  placeholder: 'Enter your password',
};

export const EmailStory = Template.bind({});
EmailStory.args = {
  label: 'Email',
  type: 'email',
  name: 'email',
  placeholder: 'Enter your email',
};
