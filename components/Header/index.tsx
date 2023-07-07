import Link from 'next/link'

import styles from '../../styles/Header.module.css'

export default function Headers(): JSX.Element {
  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.HeaderList}>
          <li><Link className={styles.HeaderItem} href="/" >Home</Link></li>
          <li><Link className={styles.HeaderItem} href="/work" >Trabajemos</Link></li>
          {/* <li><Link className={styles.HeaderItem} href="/blog" >Blog</Link></li> */}
        </ul>
      </nav>
      <hr className={styles.HeaderLine} />
    </header>
  )
}
