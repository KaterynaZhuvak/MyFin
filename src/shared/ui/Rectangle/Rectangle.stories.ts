import type { Meta, StoryObj } from '@storybook/react';
import { Rectangle } from '.';

const meta: Meta<typeof Rectangle> = {
  title: 'ui/Rectangle',
  component: Rectangle,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['purple', 'green'],
    },
    size: {
      control: { type: 'select' },
      options: ['s', 'm'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const GradientRectangle: Story = {
  args: {
    name: 'clock',
    variant: 'purple',
    size: 's',
    className: 'w-[60px] h-[60px]',
  },
};
