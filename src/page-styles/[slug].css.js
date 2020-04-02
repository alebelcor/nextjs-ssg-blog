import css from 'styled-jsx/css';

export default css.global`
  .blog-post-body {
    padding: 0 2.5rem; // p-10
  }

  .blog-post-body blockquote,
  .blog-post-body details,
  .blog-post-body ol,
  .blog-post-body p,
  .blog-post-body pre,
  .blog-post-body table,
  .blog-post-body ul {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .blog-post-body h1,
  .blog-post-body h2,
  .blog-post-body h3,
  .blog-post-body h4,
  .blog-post-body h5,
  .blog-post-body h6 {
    margin-top: 1.5rem; // mt-5
    margin-bottom: 1rem; // mb-4
    font-weight: 600; // font-semibold
    line-height: 1.25; // leading-tight
  }

  .blog-post-body h1,
  .blog-post-body h2 {
    padding-bottom: 0.25em; // pb-1
  }

  .blog-post-body h1 {
    font-size: 1.875rem; // text-3xl
    text-align: center; // text-center
  }

  .blog-post-body h2 {
    border-bottom-width: 1px; // border-b
    border-color: #e2e8f0; // border-gray-300
    font-size: 1.5rem; // text-2xl
  }

  .blog-post-body h3 {
    font-size: 1.25rem; // text-xl
  }

  .blog-post-body h4 {
    font-size: 1rem; // text-base
  }

  .blog-post-body h5 {
    font-size: 0.875rem; // text-sm
  }

  .blog-post-body h6 {
    font-size: 0.75rem; // text-xs
    color: #6a737d;
  }

  .blog-post-body p {
    margin-bottom: 1rem; // mb-4
  }

  .blog-post-body ol,
  .blog-post-body ul {
    margin-bottom: 1rem; // mb-4
    padding-left: 2rem; // pl-8
  }

  .blog-post-body ul {
    list-style-type: disc; // list-disc
  }

  .blog-post-body ol {
    list-style-type: decimal; // list-decimal
  }

  .blog-post-body a:hover,
  .blog-post-body a:focus {
    text-decoration: underline; // underline
  }

  .blog-post-body img {
    display: inline; // inline
    border-style: none; // border-none
    background-color: #fff; // bg-white
  }

  .blog-post-body code {
    padding: 0.2em 0.4em;
    font-size: 0.875rem; // text-sm
    background-color: #f7fafc; // bg-gray-100
    border-radius: 3px;
  }

  .blog-post-body pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f7fafc; // bg-gray-100
    border-radius: 3px;
    word-wrap: normal;
  }

  .blog-post-body table {
    display: block; // block
    width: 100%; // w-full
    overflow: auto; // overflow-auto
    border-spacing: 0;
  }

  .blog-post-body table tr {
    border-top-width: 1px; // border-t
    border-color: #cbd5e0; // border-gray-400
    background-color: #fff;
  }

  .blog-post-body table tr:nth-child(2n) {
    background-color: #f7fafc; // bg-gray-100
  }

  .blog-post-body table td,
  .blog-post-body table th {
    border-width: 1px; // border
    border-color: #cbd5e0; // border-gray-400
    padding: 6px 13px;
  }

  .blog-post-body blockquote {
    padding: 0 1rem; // py-0 px-4
    color: #718096; // text-gray-600
    border-left-width: 0.25rem; // border-l-4
    border-style: solid; // border-solid
    border-color: #e2e8f0; // border-gray-300
  }

  .blog-post-body blockquote > :last-child {
    margin-bottom: 0; // mb-0
  }

  .blog-post-body hr {
    margin: 1.5rem 0; // my-6 mx-0
    border-width: 0; // border-0
    padding: 0; // p-0
    height: 0.25em;
    background-color: #e2e8f0; // bg-gray-300
  }

  .blog-post-body > :first-child {
    margin-top: 0;
  }
`;
