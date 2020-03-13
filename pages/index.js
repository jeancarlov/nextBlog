import React from 'react';
import Link from 'next/link';
import Layout from '../components/MyLayout';
// import fetch from 'isomorphic-unfetch';

// import useSWR from 'swr';
// import Header from "../components/Header";

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

// const Index = props => (
//   <Layout>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {props.shows.map(show => (
//         <li key={show.id}>
//           <Link href="/p/[id]" as={`/p/${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// );

// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.length}`);

//   return {
//     shows: data.map(entry => entry.show)
//   };
// };

// export default Index;

// function getPosts() {
//   return [
//     { id: 'hello-nextjs', title: 'Hello Next.js' },
//     { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
//     { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
//   ];
// }

// export default function Blog() {
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         {getPosts().map(post => (
//           <li key={post.id}>
//             <Link href="/p/[id]" as={`/p/${post.id}`}>
//               <a>{post.title}</a>
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <style jsx>{`
//         h1,
//         a {
//           font-family: 'Arial';
//         }

//         ul {
//           padding: 0;
//         }

//         li {
//           list-style: none;
//           margin: 5px 0;
//         }

//         a {
//           text-decoration: none;
//           color: blue;
//         }

//         a:hover {
//           opacity: 0.6;
//         }
//       `}</style>
//     </Layout>
//   );
// }


// function fetcher(url) {
//   return fetch(url).then(r => r.json());
// }

// export default function Index() {
//   const { data, error } = useSWR('/api/randomQuote', fetcher);
//   // The following line has optional chaining, added in Next.js v9.1.5,
//   // is the same as `data && data.author`
//   const author = data?.author;
//   let quote = data?.quote;

//   if (!data) quote = 'Loading...';
//   if (error) quote = 'Failed to fetch the quote.';

//   return (
//     <main className="center">
//       <div className="quote">{quote}</div>
//       {author && <span className="author">- {author}</span>}

//       <style jsx>{`
//         main {
//           width: 90%;
//           max-width: 900px;
//           margin: 300px auto;
//           text-align: center;
//         }
//         .quote {
//           font-family: cursive;
//           color: #e243de;
//           font-size: 24px;
//           padding-bottom: 10px;
//         }
//         .author {
//           font-family: sans-serif;
//           color: #559834;
//           font-size: 20px;
//         }
//       `}</style>
//     </main>
//   );
// }