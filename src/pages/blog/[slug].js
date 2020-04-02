import React from 'react';
import Head from 'next/head';
import parse from 'html-react-parser';

import { getBlogPosts, getBlogPost } from '../../services/blog-post-service';

import styles from '../../page-styles/[slug].css';

const BlogPostPage = ({ title, description, html }) => {
  return (
    <>
      <Head>
        <title>{title || 'Blog post'} | My Blog</title>
        {description && <meta name="description" content={description} />}
      </Head>

      <div className="blog-post-body">
        {title && (
          <h1 className="mb-4 pb-1 text-3xl font-semibold leading-tight">
            {title}
          </h1>
        )}

        {html && parse(html)}
      </div>

      <style jsx>{styles}</style>
    </>
  );
};

export default BlogPostPage;

export const getStaticPaths = async () => {
  const blogPosts = getBlogPosts();
  const paths = blogPosts.map((blogPost) => {
    return {
      params: {
        slug: blogPost.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const blogPost = getBlogPost(slug);

  return {
    props: blogPost,
  };
};
