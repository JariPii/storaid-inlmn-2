'use cache';
import { fetchAllBlogs } from '@/utils/actions';
import BlogCardsList from './BlogCardsList';
import { cacheLife } from 'next/cache';

const BlogsContainer = async () => {
  cacheLife('weeks');
  const blogs = await fetchAllBlogs();
  return <BlogCardsList blogs={blogs} />;
};
export default BlogsContainer;
