import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { getAllPostsPath, getPostData } from '../../lib/getPostsData.js';

const components = {
  h1: (props) => <h1 {...props} />,
  p: (props) => <p {...props} />,
};

export default function Blog({ postMetadata, postContent }) {
  return (
    <section>
      <article>
        <MDXRemote
          key={postMetadata.title}
          {...postContent}
          components={components}
        />
      </article>
    </section>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostsPath();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const mdxSource = await serialize(postData.content);
  return {
    props: {
      postMetadata: postData.metadata,
      postContent: mdxSource,
      id: params.id,
    },
  };
}
