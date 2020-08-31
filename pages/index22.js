import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'
import { getNavPaths } from 'lib/posts'

export default function Home({ nav }) { 
  return (
    <div>works</div>
  )
}

export async function getStaticProps() {
  const nav = getNavPaths();
  return {
    props: {
      nav
    }
  }
}