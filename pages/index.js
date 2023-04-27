import Head from 'next/head'
import '../firebase/firebase.js'
import Layout from 'components/Layout'
import CardBlog from 'components/blog/CardBlog.js'
import CardBlogMultiImage from 'components/blog/CardBlogMultiImage.js'
import { Carousel, Col, Row } from 'antd'
import CardCourse from 'components/course/CardCourse.js'
import GroupCourse from 'components/home/GroupCourse.js'
import VideoHomePage from 'components/home/VideoHomePage.js'
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
      <div>
        <VideoHomePage/>
      </div>
      <Row gutter={16}> 
      <Col span={12}>
      <div className='columnBox'>
     <Carousel autoplay dots={false}>
     <CardBlog />
     <CardBlog />
     <CardBlog />
     </Carousel>
      <Carousel autoplay dots={false}>
      <CardBlogMultiImage />
      <CardBlogMultiImage />
      <CardBlogMultiImage />
      </Carousel>
      </div>
      </Col>
      <Col span={12}>
      <div className='columnBox'>
     <Carousel autoplay dots={false}>
    
     <CardBlogMultiImage />
      <CardBlogMultiImage />
      <CardBlogMultiImage />
     </Carousel>
      <Carousel autoplay dots={false}>
      <CardBlog />
     <CardBlog />
     <CardBlog />
      </Carousel>
      </div>
      </Col>
      </Row>

      {/* //////////////////////////////////////////////////////////////// */}
      <div>
        <GroupCourse />
      </div>
     
      </div>
    </Layout>
  )
}
