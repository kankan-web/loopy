import type { Meta, StoryObj } from '@storybook/react';

import CommentItem from './index';

const meta: Meta<typeof CommentItem> = {
  title: 'Components/CommentItem',
  component: CommentItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component to display a comment with user information and actions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'The comment data to display',
    },
    postId: {
      control: 'text',
      description: 'The ID of the post the comment belongs to',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CommentItem>;

export const Default: Story = {
  args: {
    data: {
      id: '1',
      content: '这是一个评论内容',
      created_at: '2024-01-01',
      user_id: '1',
      like_count: 5,
      is_liked: false,
      total_replies: 2,
      image_urls: [],
      is_pinned: false,
      replies: [],
      remaining_replies: 0,
      has_more_replies: false,
      popularity: 0,
    },
    postId: '123',
  },
};

export const WithReplies: Story = {
  args: {
    data: {
      id: '2',
      content: '这是另一个评论，带有回复',
      created_at: '2024-01-02',
      user_id: '2',
      like_count: 10,
      is_liked: true,
      total_replies: 5,
      image_urls: [],
      is_pinned: false,
      replies: [],
      remaining_replies: 0,
      has_more_replies: false,
      popularity: 0,
    },
    postId: '456',
  },
};
