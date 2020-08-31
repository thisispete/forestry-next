import Head from 'next/head'
import { getNavPaths, getDataForPath } from '../lib/posts'

export default function Post({ jsonData }) {
  return (
    <article>
      <h1>{jsonData.display_title}</h1>
      <h2>{jsonData.template}</h2>
    </article>
  )
}

export async function getStaticPaths() {
  const paths = getNavPaths()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const jsonData = getDataForPath(params.slug.join('/'))
  return {
    props: {
      jsonData
    }
  }
}
