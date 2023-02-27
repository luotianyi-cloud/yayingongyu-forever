import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import style from '../styles/Home.module.css'
import Footer from '../components/footer'
import Poem from '@/components/poem'
import LinkList from '@/components/link-list'

// Define page content here
const poems = {
  introduction: `
    「也许有人会遗忘
    　但是我绝不会忘记
    　你永远是我的雅音宫羽」
  `,
  detailTitle: `
    还记得她的生日吗？还能回忆起她的笛章吗？
  `,
  detail: `
    姓名: 雅音宫羽
    人设: MOTH
    爱称: 小羽、笔仙儿
    年龄: 15 岁
    生日: 10 月 8 日
    身高: 157 cm
    外貌：灰发发尾白色，红瞳
    代表：冰糖葫芦
    乐器: 笛子。

    最美好的回忆是六岁的时候出去倒垃圾，在门口捡到了漂亮的笛子，从此随身携带。遭遇过的最恐怖的事是被人把山楂堵到了笛子的吹奏孔里。
  `,
  songs: `听吧，天依唱给雅音的歌：`
}
const songs = [
  { id: 333069, name: '唱給雅音宮羽' },
  { id: 1773542, name: '天唱給雅音宮羽 · Ⅱ' },
  { id: 5461608, name: '天唱給雅音宮羽 · Ⅲ' },
  { id: 12104333, name: '天唱給雅音宮羽 · 终' },
  { id: 60660066, name: 'Haru' },
]

export default function Home() {
  const [cdn, setCDN] = useState('/static')
  const [poemContent, setPoemContent] = useState<{[name: string]: string}>({})
  const [songLinks, setSongLinks] = useState<{id: Number, name: string}[]>([])

  // Global initialization effect
  useEffect(() => {
    setCDN(process.env.NEXT_PUBLIC_CDN_LOCATION || '/static')
    setPoemContent(poems)
    setSongLinks(songs)
    document.querySelector('audio')?.play().catch(() => { console.log('浏览器不支持自动播放') })
  }, [])

  return (
    <>
      <Head>
        <title>「雅音宫羽」纪念网站</title>
        <meta name="description" content="你是全世界的洛天依 却只是我一人的雅音宫羽" />
      </Head>
      <main className={style.background} onClick={() => { document.querySelector('audio')?.play() }}>
        <article className={style.container}>
          <div className={style.content}>
            <Image className={style.banner} src={`${cdn}/${encodeURIComponent('唱給雅音宮羽')}.png`} alt="雅音宮羽" width={600} height={330} />
            <audio className={style.hidden} src={`${cdn}/${encodeURIComponent('唱給雅音宮羽')}.mp3`} loop />
            <Poem content={poemContent.introduction} />
            <Poem content={poemContent.detailTitle} start={5} end={0} />
            <Poem content={poemContent.detail} start={0} end={0} fontSize={18} />
            <blockquote className={style.blockquote}>
              摘自 <a href="https://zh.moegirl.org.cn/zh-hans/雅音宫羽" target="_blank" rel="noreferrer">萌娘百科「雅音宫羽」词条</a> ，该段文本采用 CC BY-NC-SA 3.0 协议。
            </blockquote>
            <Poem content={poemContent.songs} start={5} />
            <LinkList links={songLinks.map((link) => { return { url: `https://b23.tv/av${link.id}`, text: link.name } })} />
          </div>
          <Footer />
        </article>
      </main>
    </>
  )
}
