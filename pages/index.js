import React from 'react';
import Link from 'next/link';
import { getPostsMetaData } from '../lib/getPostsData.js';

const Home = ({ postsData }) => (
  <>
    <section className="info-container">
      <p className="info-description">
        Hi I&apos;m Batman, the saviour of Gotham City and I like to roam in
        nights to bash the bad guys.
      </p>
      <p className="info-description">
        But please don&apos;t call me as a source for <b>Corona Virus</b> and it
        could be the <b>Joker</b> who might have started this mess.
      </p>
      <hr />
    </section>
    {postsData.map((metadata) => {
      return (
        <article key={metadata.id}>
          <Link href={`/blog/${metadata.id}`} key={metadata.title}>
            <a className="post-title">{metadata.title}</a>
          </Link>
          <p className="post-description">{metadata.description}</p>
        </article>
      );
    })}
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
