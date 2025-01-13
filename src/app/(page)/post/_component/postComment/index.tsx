'use client';

import React, { useState, useEffect } from 'react';

import { CommentInput } from '@/components/commentForm';
import CommonItem from '@/components/commentItem';

interface PostCommentProps {
  postId: string;
  showHeader?: boolean;
}

export type CommentReply = {
  id: string;
  content: string;
  created_at: string;
  user_id: string;
  parent_id: string;
  like_count: number;
  is_liked: boolean;
};

export type Comment = {
  id: string;
  content: string;
  created_at: string;
  user_id: string;
  image_urls: string[];
  is_pinned: boolean;
  replies: CommentReply[];
  total_replies: number;
  remaining_replies: number;
  has_more_replies: boolean;
  like_count: number;
  popularity: number;
  is_liked: boolean;
};

//showHeader 是否显示评论头部,可以用于区分是弹窗评论还是页面评论
export default function PostComment({ postId, showHeader = true }: PostCommentProps) {
  const [sortField, setSortField] = useState('latest');
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);

      try {
        // 模拟接口延迟
        setTimeout(() => {
          const mockData: Comment[] = [
            // 模拟的评论数据
            {
              id: '1',
              content: '评论内容1',
              created_at: '2023-10-01',
              user_id: 'user1',
              image_urls: [],
              is_pinned: false,
              replies: [],
              total_replies: 0,
              remaining_replies: 0,
              has_more_replies: false,
              like_count: 10,
              popularity: 5,
              is_liked: false,
            },
            {
              id: '2',
              content: '评论内容2',
              created_at: '2023-10-02',
              user_id: 'user2',
              image_urls: [],
              is_pinned: false,
              replies: [],
              total_replies: 0,
              remaining_replies: 0,
              has_more_replies: false,
              like_count: 5,
              popularity: 3,
              is_liked: false,
            },
          ];
          setComments(mockData);
          setLoading(false);
        }, 1000); // 模拟1秒的延迟
      } catch (error) {
        console.error('Error fetching comments:', error);
        setLoading(false);
      }
    };

    fetchComments();
  }, [sortField, postId]);

  const handleSortChange = (type: string) => {
    setSortField(type);
  };

  const SortButton = ({ type, label }: { type: string; label: string }) => (
    <div
      onClick={() => handleSortChange(type)}
      className={`inline-block text-[15px] px-1 py-1 cursor-pointer font-normal
        ${sortField === type ? 'text-primary' : 'text-post-text_2'}
        hover:text-primary transition-colors`}
    >
      {label}
    </div>
  );

  return (
    <section>
      {showHeader && <h4 className="mb-5 font-bold text-xl">评论</h4>}
      <div className="flex rounded">
        <CommentInput />
      </div>
      <div className="mt-2">
        <div className="sort">
          <SortButton type="popular" label="最热" />
          <div className="inline-block text-[#e4e6eb] mx-1">｜</div>
          <SortButton type="latest" label="最新" />
        </div>
      </div>
      {loading ? (
        <div>加载中...</div>
      ) : (
        comments.map((item) => <CommonItem data={item} key={item.id} postId={postId} />)
      )}
    </section>
  );
}
