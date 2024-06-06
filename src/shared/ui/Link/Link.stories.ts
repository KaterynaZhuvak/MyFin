import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';

const meta: Meta<typeof Link> = {
  title: 'ui/Link',
  component: Link,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LinkStory: Story = {
  args: {
    href: '#about',
    title: 'About',
  },
};
