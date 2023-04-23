import { PlayCircleFilled } from '@ant-design/icons'
import { Col, Row, Typography } from 'antd'
import React from 'react'

export default function VideoHomePage() {
  return (
   <Row className='videoHomePage'>
    <Col span={12}>
       <div className='videoHomePage--title'>
       <Typography.Title level={4}>Chương trình đào tạo tiếng anh chuyên nghiệp</Typography.Title>
        <Typography.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Typography.Text>
       </div>
    </Col>
    <Col span={12}>
        <div className='videoHomePage--video'>
        <PlayCircleFilled style={{fontSize : '6rem' , color : 'red'}}/>
        </div>
    </Col>
   </Row>
  )
}
