import type { Meta, StoryObj } from '@storybook/react';
import { NavigationButton } from './NavigationButton';
import { withRouter } from 'storybook-addon-remix-react-router';

const meta: Meta<typeof NavigationButton> = {
  title: 'ui/NavigationButton',
  component: NavigationButton,
  decorators: [withRouter],
};

export default meta;

type Story = StoryObj<typeof NavigationButton>;

export const GetStarted: Story = {
  args: {
    title: 'Get Started',
    className:
      'gradient rounded-[15px] py-[23px] px-[92px] text-[40px] font-bold',
    path: '/signup',
  },
};

export const LogIn: Story = {
  args: {
    title: 'Log In',
    className:
      'gradient rounded-[15px] desktop:blok tablet:block mobile:hidden py-[6px] px-[31px] text-[20px] font-semibold',
    path: '/signin',
  },
};

export const LogInMobile: Story = {
  args: {
    title: 'Log In',
    className: '',
    path: '/signin',
  },
};
