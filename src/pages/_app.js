import React from 'react';
import Head from 'next/head';

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

import '../page-styles/_app.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Default title</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.svg" />

        <link rel="author" href="/humans.txt" />
      </Head>

      <Header />

      <main className="my-4">
        <div className="container mx-auto">
          <Component {...pageProps} />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default App;
