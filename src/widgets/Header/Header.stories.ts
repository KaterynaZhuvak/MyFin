import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { withRouter } from 'storybook-addon-remix-react-router';

const meta: Meta<typeof Header> = {
  title: 'widgets/Header',
  component: Header,
  decorators: [withRouter],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const HeaderStory: Story = {};
