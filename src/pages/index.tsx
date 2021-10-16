import IdeaList from '@components/IdeaList'
import Head from 'next/head'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home | Scripbox</title>
        <meta property="og:title" content="Home | Scripbox" key="title" />
      </Head>
      <IdeaList />
    </div>
  )
}

export default Home
