import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import style from '../styles/Home.module.css'
import Footer from '../components/footer'
import Poem from '@/components/poem'
import LinkList from '@/components/link-list'

const songs = [
  { avid: 333069, name: '唱給雅音宮羽' },
  { avid: 1773542, name: '天唱給雅音宮羽 · Ⅱ' },
  { avid: 5461608, name: '天唱給雅音宮羽 · Ⅲ' },
  { avid: 12104333, name: '天唱給雅音宮羽 · 终' },
  { avid: 60660066, name: 'Haru' },
]

export default function Home() {
  const [cdn, setCDN] = useState('/static')
  const [songLinks, setSongLinks] = useState<{avid: Number, name: string}[]>([])

  // Global initialization effect
  useEffect(() => {
    setCDN(process.env.NEXT_PUBLIC_CDN_LOCATION || '/static')
    setSongLinks(songs)
    document.querySelector('audio')?.play().catch(() => { console.log('浏览器不支持自动播放') })
  }, [])

  return (
    <>
      <Head>
        <title>「雅音宫羽」</title>
        <meta name="description" content="你是全世界的洛天依 却只是我一人的雅音宫羽" />
      </Head>
      <main className={style.background} onClick={() => { document.querySelector('audio')?.play() }}>
        <article className={style.container}>
          <div className={style.content}>
            <Image className={style.banner} src={`${cdn}/${encodeURIComponent('唱給雅音宮羽')}.png`} alt="雅音宮羽" width={600} height={330} />
            <audio className={style.hidden} src={`${cdn}/${encodeURIComponent('唱給雅音宮羽')}.mp3`} loop />
            <Poem content={"「你是全世界的洛天依\n　却只是我一人的雅音宫羽」"} end={5} />
            <LinkList links={songLinks.map((link) => { return { url: `https://b23.tv/av${link.avid}`, text: link.name } })} />
          </div>
          <Footer />
        </article>
      </main>
    </>
  )
}
