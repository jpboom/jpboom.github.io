import React from 'react';
import Link from 'next/link';
import { getPostsMetaData } from '../lib/getPostsData.js';

const Home = ({ postsData }) => (
  <div className="info-container">
    <p className="info-description">
      Hi I&apos;m Batman, the saviour of Gotham City and I like to roam in
      nights to bash the bad guys.
    </p>
    <p className="info-description">
      But please don&apos;t call me as a source for <b>Corona Virus</b> and it
      could be the <b>Joker</b> who might have started this mess.
    </p>
    <hr />
    {postsData.map((metadata) => {
      return (
        <div key={metadata.id}>
          <Link href={`/blog/${metadata.id}`} key={metadata.title}>
            <a className="post-title">{metadata.title}</a>
          </Link>
          <p className="post-description">{metadata.description}</p>
        </div>
      );
    })}
  </div>
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
