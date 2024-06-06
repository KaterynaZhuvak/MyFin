import type { Meta, StoryObj } from '@storybook/react';
import { BurgerMenu } from './BurgerMenu';

const meta: Meta<typeof BurgerMenu> = {
  title: 'ui/BurgerMenu',
  component: BurgerMenu,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BurgerMenuStory: Story = {
  args: {
    onClick: () => {},
  },
};
