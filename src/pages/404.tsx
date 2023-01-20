import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import style from '../styles/Custom404.module.css'

export default function Custom404() {
  const [gifState, setGifState] = useState(0)

  const gifStateClassName = (state: number) => {
    if (state === 1) { return style.gif1 }
    if (state === 2) { return style.gif2 }
    if (state === 3) { return style.gif3 }
    if (state === 4) { return style.gif4 }
    return style.gif0
  }

  const randInt = (min: number, max: number) => {
    // Use timestamp as seed
    const seed = (new Date()).getMilliseconds() / 1000
    return Math.floor(seed * (max - min + 1)) + min
  }

  return (
    <>
      <Head>
        <title>404 Not Found - 雅音宫羽 Forever</title>
      </Head>
      <main className={style.container}>
        <div className={`${style.gif} ${gifStateClassName(gifState)}`} />
        <h1 className={style.title}>页面被天依吃掉了</h1>
        <h2 className={style.title}>吃完了甚至还跳起了转圈舞</h2>
        <h3 className={style.title}>要不，你试试能不能让天依<span className={style.stop} onMouseOver={() => setGifState(randInt(1, 4))} onMouseOut={() => setGifState(0)}>停下</span></h3>
        <Link href="/" className={style.link}>返回首页</Link>
      </main>
    </>
  )
}
