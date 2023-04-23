import Head from 'next/head'
import { Inter } from '@next/font/google'
import '../firebase/firebase.js'
import Layout from 'components/Layout'
import CardBlog from 'components/blog/CardBlog.js'
import CardBlogMultiImage from 'components/blog/CardBlogMultiImage.js'
import { Col, Row } from 'antd'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
<Layout>
      <Head>
        <title>
          Hoang Toeic
        </title>
        <meta
          name='description'
          content={`Hỗ trợ đặt thuốc online, liên kết các phòng khám, trung tâm xét nghiệm, và chăm sóc sức khỏe tại nhà.`}
        />
        <meta
          name='keywords'
          content={`worldcare, world health, mua thuốc online, đặt lịch khám, phòng khám chuyên khoa, chăm sóc mẹ và bé, điều dưỡng`}
        />
      </Head>
      <div className='home-page'>
      <Row>
      <Col span={4}><CardBlog /></Col>
      <Col span={4}><CardBlogMultiImage /></Col>
      
      </Row>
      </div>
    </Layout>
  )
}
