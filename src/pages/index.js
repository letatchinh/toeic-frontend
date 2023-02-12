import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import '../../firebase/firebase.js'
import Header from 'components/home/Header.js'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className={styles.container}>
        <main className={styles.main}>
        <Header />
          <h2>Home Page</h2>
        </main>
      </div>
  )
}
