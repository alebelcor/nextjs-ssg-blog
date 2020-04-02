import { readFileSync, readdirSync } from 'fs';
import { join, parse } from 'path';

import matter from 'gray-matter';
import marked from 'marked';

import { BLOG_POSTS_SOURCE } from '../utils/constants';

export const getBlogPost = (slug) => {
  const fileContents = readFileSync(
    join(process.cwd(), BLOG_POSTS_SOURCE, `${slug}.md`),
  ).toString();

  const {
    data: { title, description },
    content,
  } = matter(fileContents);
  const html = marked(content);

  return {
    slug,
    title,
    description,
    html,
  };
};

export const getBlogPosts = () => {
  const slugs = readdirSync(join(process.cwd(), BLOG_POSTS_SOURCE))
    .filter((dirEntry) => /\.md$/i.test(dirEntry))
    .map((dirEntry) => parse(dirEntry).name);

  return slugs.map(getBlogPost).filter((blogPost) => Boolean(blogPost.title));
};
