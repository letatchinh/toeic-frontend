import Head from 'next/head'
import '../firebase/firebase.js'
import Layout from 'components/Layout'
import CardBlog from 'components/blog/CardBlog.js'
import CardBlogMultiImage from 'components/blog/CardBlogMultiImage.js'
import { Button, Carousel, Col, Row } from 'antd'
import CardCourse from 'components/course/CardCourse.js'
import GroupCourse from 'components/home/GroupCourse.js'
import VideoHomePage from 'components/home/VideoHomePage.js'
import { useRouter } from 'next/router.js';
import Banner from 'components/home/Banner';
export default function Home() {
  const routes = useRouter()
  console.log(routes,'routes');
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
      <Banner />
      <Button onClick={() => routes.push('/sale-page')}>
        Sale page ở đây nè
      </Button>
      <Button onClick={() => routes.push('/sale-page2')}>
        Sale page 2 ở đây nè
      </Button>
      <div>
        <VideoHomePage/>
      </div>
      <Row className='BoxCourse' gutter={16}> 
      <Col span={10}>
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
      <Col span={10}>
      <div className='columnBox'>
     <Carousel  autoplay dots={false}>
    
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
