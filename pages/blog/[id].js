import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { getAllPostsPath, getPostData } from '../../lib/getPostsData.js';

const components = {
  h1: (props) => (
    <h1
      style={{
        fontSize: 'calc(1rem + 1.5vw)',
        color: 'black',
        margin: '1vh 0 1vh 0',
      }}
      {...props}
    />
  ),

  p: (props) => (
    <p
      style={{
        fontSize: 'calc(1rem + 0.1vw)',
        color: '#000000e6',
        margin: '0vh 0 1vh 0',
      }}
      {...props}
    />
  ),
};

export default function Blog({ postMetadata, postContent }) {
  return (
    <div className="blog-content">
      <MDXRemote
        key={postMetadata.title}
        {...postContent}
        components={components}
      />
    </div>
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
