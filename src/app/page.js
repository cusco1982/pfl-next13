import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>







      <h1>Home Page</h1>

      <p>

        <Link href={'/projects'}>Projects</Link>

      </p>
     





    </main>
  )
};