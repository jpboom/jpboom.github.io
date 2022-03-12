import React from 'react';
import Link from 'next/link';
import { getPostsMetaData } from '../lib/getPostsData.js';

const Home = ({ postsData }) => (
  <>
    <section>
      <p>
        Hi I&apos;m Batman, the saviour of Gotham City and I like to roam in
        nights to bash the bad guys.
      </p>
      <p>
        But please don&apos;t call me as a source for{' '}
        <strong>Corona Virus</strong> and it could be the <strong>Joker</strong>{' '}
        who might have started this mess.
      </p>
    </section>
    <section>
      {postsData.map((metadata, index) => (
        <React.Fragment key={metadata.id}>
          {index !== 0 && <hr />}
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
