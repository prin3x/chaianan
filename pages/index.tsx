import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ActivSection from '../components/ActivSection'
import { GetStaticProps } from 'next';
import React from 'react';
import Layout from '../components/Layout';

export default function Home({posts}) {
  return (
    <Layout>
      <HeroSection/>
      <ActivSection posts={posts}/>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  // const res = await fetch('https://.../posts')
  const posts = [
    { id: 1, title: 'มอบอุปกรณ์การแพทย์', image: '/assets/activ01.png' },
    { id: 2, title: 'มอบอุปกรณ์การแพทย์', image: '/assets/activ01.png' },
    { id: 3, title: 'มอบอุปกรณ์การแพทย์', image: '/assets/activ01.png' },
  ];

  return {
    props: {
      posts,
    },
  };
};
