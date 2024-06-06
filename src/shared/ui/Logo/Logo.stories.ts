import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'ui/Logo',
  component: Logo,
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Primary: Story = {
  args: {
    styles: 'mobile:w-[151px] mobile:h-[34px]',
  },
};
