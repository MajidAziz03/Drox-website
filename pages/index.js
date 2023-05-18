import Head from 'next/head'
import Navbar from '@/Components/navbar/Navbar'
import Hero from '@/Components/hero/Hero'
import About from '@/Components/about/About'
import Service from '@/Components/services/Service'
import Contact from '@/Components/contact/Contact'
import Footer from '@/Components/footer/Footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </>
  )
}
