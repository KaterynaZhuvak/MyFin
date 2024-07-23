import { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from '..';
import { withRouter } from 'storybook-addon-remix-react-router';

const meta: Meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  decorators: [withRouter],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
