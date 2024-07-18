import { Meta, StoryObj } from '@storybook/react';
import { Input } from './index';
import { withRouter } from 'storybook-addon-remix-react-router';
import { Formik, Form } from 'formik';

const meta: Meta<typeof Input> = {
  title: 'ui/Input',
  component: Input,
  decorators: [withRouter],
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const InputStory: Story = {
  args: {
    label: 'Label',
    className:
      'h-[44px] w-[318px] rounded-[10px] pl-5 text-base tablet:h-[64px] tablet:w-[378px] tablet:rounded-[15px]',
    placeholder: 'Placeholder',
    name: 'name',
  },

  render: (args) => {
    return (
      <Formik>
        <Form>
          <Input
            name={args.name}
            className={args.className}
            label={args.label}
            placeholder={args.placeholder}
          />
        </Form>
      </Formik>
    );
  },
};
