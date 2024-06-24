import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'ui/Icon',
  component: Icon,
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Logo: Story = {
  args: {
    name: 'logo',
    className: 'w-[151px] h-[34px] tablet:w-[183px] tablet:h-[41px]',
  },
};

export const Close: Story = {
  args: {
    name: 'close',
    className: 'h-[16px] w-[16px]',
  },
};

export const BurgerMenu: Story = {
  args: {
    name: 'menu',
    className: 'h-[22px] w-[30px]',
  },
};
export const Clock: Story = {
  args: {
    name: 'clock',
    className: '',
  },
};

export const Coins: Story = {
  args: {
    name: 'coins',
    className: '',
  },
};

export const Graph: Story = {
  args: {
    name: 'graph',
    className: '',
  },
};

export const Notes: Story = {
  args: {
    name: 'notes',
    className: '',
  },
};

export const Statistic: Story = {
  args: {
    name: 'statistic',
    className: '',
  },
};

export const Budget: Story = {
  args: {
    name: 'budget',
    className: '',
  },
};

export const Pazzles: Story = {
  args: {
    name: 'pazzles',
    className: '',
  },
};
