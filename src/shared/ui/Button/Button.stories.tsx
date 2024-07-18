import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';
import { withRouter } from 'storybook-addon-remix-react-router';
import { action } from '@storybook/addon-actions';
import { Icon } from '@shared/icons/Icon';

const meta: Meta<typeof Button> = {
  title: 'ui/Button',
  component: Button,
  parameters: { layout: 'centered' },
  decorators: [withRouter],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['gradient', 'outline', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 's', 'm', 'l', 'xl'],
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['start', 'end'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Gradient: Story = {
  args: {
    title: 'Gradient',
    onClick: action('clicked'),
    variant: 'gradient',
    size: 'l',
    className: '',
  },
};

export const Outline: Story = {
  args: {
    title: 'Outline',
    onClick: action('clicked'),
    variant: 'outline',
    size: 'l',
    className: '',
  },
};

export const Ghost: Story = {
  args: {
    title: 'Ghost',
    onClick: action('clicked'),
    variant: 'ghost',
    className: '',
  },
};

export const Google: Story = {
  args: {
    title: 'Continue with Google',
    onClick: action('clicked'),
    variant: 'outline',
    size: 'm',
    className:
      'flex h-[56px] w-[318px] items-center justify-center gap-[16px] text-[16px] tablet:h-[64px] tablet:w-[372px] tablet:text-[20px]',
    iconPosition: 'start',
    icon: <Icon name='google' className='size-[20px] tablet:size-[24px]' />,
  },
};

export const Apple: Story = {
  args: {
    title: 'Continue with Apple',
    onClick: action('clicked'),
    variant: 'outline',
    size: 'm',
    className:
      'flex h-[56px] w-[318px] items-center justify-center gap-[16px] text-[16px] tablet:h-[64px] tablet:w-[372px] tablet:text-[20px]',
    iconPosition: 'start',
    icon: <Icon name='apple' className='size-[20px] tablet:size-[24px]' />,
  },
};
