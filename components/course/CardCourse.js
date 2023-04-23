import { Button, Card, Image, Typography } from 'antd'
import React from 'react'

export default function CardCourse() {
  return (
    <div className='cardCourse'>
        <div className='cardCourse--image'>
            <Image preview={false} src='https://admin.ebomb.edu.vn/uploads/images/userfiles/2020/05/top_4_khoa_hoc_toeic_online.png' alt='khoa hoc'/>
        </div>
       <div className='cardCourse--body'>
       <div className='cardCourse--body__title'>
            <Typography.Title level={4}>Khoá nâng cao</Typography.Title>
        </div>
        <div className='cardCourse--body__content'>
            <p>Mô tả chi tiết về khoá học</p>
        </div>
        <div className='cardCourse--body__action'>
            <Button>Xem chi tiết</Button>
        </div>
       </div>
    </div>
  )
}
