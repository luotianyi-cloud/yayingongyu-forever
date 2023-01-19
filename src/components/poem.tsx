import style from '../styles/Poem.module.css'

export default function Poem(props: { content: string, end?: Number, start?: Number, fontSize?: Number }) {
  return (
    <>
      <p className={style.poem} style={{ marginTop: `${props.start ?? 1}em`, marginBottom: `${props.end ?? 1}em`, fontSize: `${props.fontSize ?? 28}px` }}>
        {(props.content || '').trim().split('\n').map((line, index) => {
          return <span key={index}>{line}<br /></span>
        })
        }
      </p>
    </>
  )
}
