import type { Meta, StoryObj } from '@storybook/react';
import { ButtonForNavigation } from './ButtonForNavigation';
import { withRouter } from 'storybook-addon-remix-react-router';

const meta: Meta<typeof ButtonForNavigation> = {
  title: 'ui/ButtonForNavigation',
  component: ButtonForNavigation,
  decorators: [withRouter],
};

export default meta;

type Story = StoryObj<typeof ButtonForNavigation>;

export const GetStarted: Story = {
  args: {
    title: 'Get Started',
    styles: 'gradient rounded-[15px] py-[23px] px-[92px] text-[40px] font-bold',
    path: '/signup',
  },
};

export const LogIn: Story = {
  args: {
    title: 'Log In',
    styles:
      'gradient rounded-[15px] py-[6px] px-[31px] text-[20px] font-semibold',
    path: '/signin',
  },
};

export const LogInMobile: Story = {
  args: {
    title: 'Log In',
    styles: '',
    path: '/signin',
  },
};
