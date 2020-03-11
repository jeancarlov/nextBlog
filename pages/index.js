import React from 'react';
import Link from 'next/link';
// import Header from "../components/Header";
import Layout from '../components/MyLayout';
import Post from '../pages/p/[id].js';

// function index() {
//     return (
//         <Layout>
//         <p>Hello Next.js</p>
//       </Layout>
//     );
// }

// export default index


const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
    <a>{props.id}</a>
    </Link>
  </li>
);
export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  );
}