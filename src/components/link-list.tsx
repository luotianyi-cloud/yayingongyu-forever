import style from '../styles/LinkList.module.css'

export default function LinkList(props: { links: { url: string, text: string }[] }) {
  return (
    <>
      <ul className={style.links}>
        {props.links.map((link, index) => {
          return (
            <a key={index} href={link.url} target="_blank" rel="noreferrer">
              <li>{link.text}</li>
            </a>
          )
        })}
      </ul>
    </>
  )
}
