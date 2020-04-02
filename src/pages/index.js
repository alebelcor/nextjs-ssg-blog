import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { getBlogPosts } from '../services/blog-post-service';

const Home = ({ blogPosts }) => {
  return (
    <>
      <Head>
        <title>My home page</title>
      </Head>

      {blogPosts.length > 0 ? (
        <>
          <h1 className="mb-4 pb-1 font-semibold leading-tight text-3xl text-center">
            Blog posts
          </h1>

          <ul className="mx-auto max-w-2xl text-center">
            {blogPosts.map((blogPost) => {
              return (
                <li key={blogPost.slug} className="mb-2">
                  <Link href="/blog/[slug]" as={`/blog/${blogPost.slug}`}>
                    <a className="inline-block py-2 px-4 hover:underline focus:underline">
                      {blogPost.title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <>
          <h1 className="text-center text-xl mb-6">
            We don't have any blog posts right now.
          </h1>

          <p className="text-center">Please check again soon.</p>
        </>
      )}
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const blogPosts = getBlogPosts();

  return {
    props: {
      blogPosts,
    },
  };
};
