import style from '../styles/Footer.module.css'

export default function Footer() {
  return (
   <>
    <footer className={style.footer}>
      <ul>
        <li>
          © {new Date().getFullYear()}
          <a href="https://雅音宫羽.com">雅音宫羽.com</a>
        </li>
        <li>
          Content License:
          <a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license noreferrer" target="_blank">CC BY-SA 4.0</a>
        </li>
        <li>
          Code License:
          <a href="https://opensource.org/licenses/MIT" rel="license noreferrer" target="_blank">MIT</a>
        </li>
        <li>
          <a href="https://github.com/luotianyi-cloud/yayingongyu-forever" rel="noreferrer" target="_blank">GitHub</a>
        </li>
        <li>
          Contact: <a href="mailto:yayingongyu@lty.name">yayingongyu@lty.name</a>
        </li>
      </ul>
    </footer>
   </>
  )
}
