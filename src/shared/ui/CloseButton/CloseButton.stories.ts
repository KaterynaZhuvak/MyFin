import type { Meta, StoryObj } from '@storybook/react';
import { CloseButton } from './CloseButton';

const meta: Meta<typeof CloseButton> = {
  title: 'ui/CloseButton',
  component: CloseButton,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CloseButtonStory: Story = {
  args: {
    onClick: () => {},
  },
};
