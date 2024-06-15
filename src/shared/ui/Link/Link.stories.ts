import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '.';

const meta: Meta<typeof Link> = {
  title: 'ui/Link',
  component: Link,
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LinkStory: Story = {
  args: {
    href: '#about',
    title: 'About',
  },
};
