import React from 'react';
import Link from 'next/link';
import { getPostsMetaData } from '../lib/getPostsData.js';

const Home = ({ postsData }) => (
  <>
    <section>
      <h1>jpboom</h1>
      <p>
        This is my personal project site. It's not for or about anything
        specific. It will keep changing as long as I don't get bored of it.
      </p>
    </section>
    <section>
      <h2>Blog</h2>
      {postsData.map((metadata, index) => (
        <React.Fragment key={metadata.id}>
          <hr />
          <article>
            <p>
              <Link href={`/blog/${metadata.id}`} key={metadata.title}>
                <a>{metadata.title}</a>
              </Link>
            </p>
            <p>{metadata.description}</p>
          </article>
        </React.Fragment>
      ))}
    </section>
  </>
);

export default Home;

export async function getStaticProps() {
  const postsData = getPostsMetaData();
  return {
    props: {
      postsData: postsData,
    },
  };
}
