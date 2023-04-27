// import Header from 'components/home/Header'
// import Layout from 'antd/es/layout'
import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
// const {Header} = Layout
export default function index({children}) {
  return (
    <div className='layout'>
    <Head>
      <link rel='icon' href='/favicon.ico' />
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width initial-scale=1.0' />
      <title>Toeic</title>
      <meta name='description' content={"toiec"} />
      <meta
        name='keywords'
        content='worldcare, world health, đặt lịch khám, phòng khám chuyên khoa, chăm sóc mẹ và bé, điều dưỡng'
      />
      {/* <link
        href='https://fonts.googleapis.com/css2?family=Raleway&display=swap'
        rel='stylesheet'
      /> */}
    </Head>
      {/* <Header style={headerStyle}> */}
        Header
      {/* </Header> */}
      <main className='main'>{children}</main>

      <Footer />
  </div>
  )
}
