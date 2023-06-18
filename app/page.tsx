import Header from '@/components/Header'
import Head  from 'next/head'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Chris's Portfolio</title>
      </Head>
      <Header/>
    </div>
  )
}

export default Home