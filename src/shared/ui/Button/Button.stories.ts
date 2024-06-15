import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';
import { withRouter } from 'storybook-addon-remix-react-router';
import { action } from '@storybook/addon-actions';

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
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Gradient: Story = {
  args: {
    title: 'Gradient',
    onClick: action('clicked'),
    variant: 'gradient',
    size: 'xl',
    className: '',
  },
};

export const Outline: Story = {
  args: {
    title: 'Outline',
    onClick: action('clicked'),
    variant: 'outline',
    size: 'xl',
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
