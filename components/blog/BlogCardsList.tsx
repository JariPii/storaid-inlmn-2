'use client';
import { Blog } from '@/utils/types';
import { useState } from 'react';
import BlogCard from './BlogCard';

type Props = { blogs: Blog[] };

const BlogCardsList = ({ blogs }: Props) => {
  const [isExpanded, setIsExpanded] = useState<string | null>(null);

  const handleToggleCard = (id?: string) => {
    if (id === undefined) return;
    console.log(id);

    setIsExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          {...blog}
          isExpanded={isExpanded === blog.id}
          onToggle={handleToggleCard}
        />
      ))}
    </>
  );
};
export default BlogCardsList;
