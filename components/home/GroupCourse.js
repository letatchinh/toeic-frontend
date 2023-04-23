import { Col, Row } from 'antd'
import CardCourse from 'components/course/CardCourse'
import React from 'react'

export default function GroupCourse() {
  return (
    <Row justify='space-evenly'>
        <Col span={7}>
            <CardCourse />
        </Col>
        <Col span={7}>
            <CardCourse />
        </Col>
        <Col span={7}>
            <CardCourse />
        </Col>
    </Row>
  )
}
