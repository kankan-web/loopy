import type { Meta, StoryObj } from '@storybook/react';

import { ReplyItem } from './index';
import { CommentReply } from '../commentItem';

const meta = {
  title: 'Components/ReplyItem',
  component: ReplyItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component to display a reply with user information and actions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    reply: {
      control: 'object',
      description: 'The reply object containing content and user information',
    },
    postId: {
      control: 'text',
      description: 'The ID of the post to which the reply belongs',
    },
  },
} satisfies Meta<typeof ReplyItem>;

export default meta;
type Story = StoryObj<typeof ReplyItem>;

const sampleReply: CommentReply = {
  content: '这是一个示例回复内容。',
  id: '123456',
  created_at: '2024-01-01',
  user_id: '123456',
  parent_id: '123456',
  like_count: 10,
  is_liked: false,
  // 其他 CommentReply 的属性
};

export const Default: Story = {
  args: {
    reply: sampleReply,
    postId: '123456',
  },
};

export const WithLongContent: Story = {
  args: {
    reply: {
      ...sampleReply,
      content: '这是一个很长的回复内容，可能会换行显示。',
    },
    postId: '123456',
  },
};

export const AnotherExample: Story = {
  args: {
    reply: {
      ...sampleReply,
      content: '这是另一个示例回复。',
    },
    postId: '654321',
  },
};
