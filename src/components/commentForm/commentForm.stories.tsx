import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import CommentForm from './index';

const meta: Meta<typeof CommentForm> = {
  title: 'Components/CommentForm',
  component: CommentForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommentForm>;

export const Basic: Story = {
  render: () => <CommentForm />,
};

export const WithInitialComment: Story = {
  render: () => {
    return <CommentForm />;
  },
};
