import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import '../../firebase/firebase.js'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_ANALYTICS_ID);
  return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h2>Home Page</h2>
        </main>
      </div>
  )
}
