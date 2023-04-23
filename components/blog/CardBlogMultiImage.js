import { CommentOutlined, HeartFilled, HeartOutlined, HeartTwoTone, SendOutlined } from '@ant-design/icons'
import { Col, Row, Typography } from 'antd'
import React from 'react'

export default function CardBlogMultiImage() {
  return (
    <div className='cardBlog'>
        <div className='cardBlog--image'>
        <div className='cardBlog--image__twice'>
            <img src='https://i.pinimg.com/736x/13/d3/f2/13d3f2d0ebddec53a06a480af60e7cbe.jpg' alt='card'/>
        </div>
        <div className='cardBlog--image__twice'>
            <img src='https://i.pinimg.com/564x/ab/c7/63/abc763b900e0cf9b495bfaa26964da07.jpg' alt='card'/>
        </div>
        </div>
        <div className='cardBlog--title'>
            <Typography.Text strong>Chú mèo tội nghiệp không có tiền phải đi cày thuê giao hàng vv mm</Typography.Text>
        </div>
        <div className='cardBlog--action'>
            <Row>
                <Col>
                    <Row className='cardBlog--action__group'>
                        {/* <HeartOutlined /> */}
                        <HeartFilled className='heartActive'/>
                        <Typography.Text>123</Typography.Text>
                    </Row>
                </Col>
                <Col>
                    <Row className='cardBlog--action__group'>
                        <CommentOutlined />
                        {/* <CommentOutlined className='commentActive'/> */}
                        <Typography.Text>123</Typography.Text>
                    </Row>
                </Col>
                <Col>
                    <Row className='cardBlog--action__group'>
                    <SendOutlined />
                    {/* <SendOutlined className='sendActive'/> */}
                        <Typography.Text>123</Typography.Text>
                    </Row>
                </Col>
            </Row>
        </div>
    </div>
  )
}
