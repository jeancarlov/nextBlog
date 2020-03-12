import React from 'react';
import Link from 'next/link';
import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';
// import Header from "../components/Header";

// import Post from '../pages/p/[id].js';

// function index() {
//     return (
//         <Layout>
//         <p>Hello Next.js</p>
//       </Layout>
//     );
// }

// export default index


// const PostLink = props => (
//   <li>
//     <Link href="/p/[id]" as={`/p/${props.id}`}>
//     <a>{props.id}</a>
//     </Link>
//   </li>
// );
// export default function Blog() {
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         <PostLink title="Hello Next.js" />
//         <PostLink title="Learn Next.js is awesome" />
//         <PostLink title="Deploy apps with Zeit" />
//       </ul>
//     </Layout>
//   );
// }

const Index = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;

