import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-remix-react-router';
import { Hero } from '.';

const meta: Meta<typeof Hero> = {
  title: 'widgets/Hero',
  component: Hero,
  decorators: [withRouter],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const HeroStory: Story = {};
