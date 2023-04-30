import { Image } from 'antd'
import React from 'react'
export default function Intro() {
  return (
    <div className='salePage--intro'>
        <div className='salePage--intro__image'>
            <Image preview={false} src='/assets/images/salePage/teacher.png'/>
        </div>
        <div className='salePage--intro__text'>
        <p className='classic'>"Tôi không muốn giỏi tiếnh anh"không ai nói như vậy cả</p>
        <p className='bold'>Cách để có chứng chỉ toeic, cải thiện khả năng tiếng anh chỉ trong <span className='bgBlack'>5 tháng</span></p>
        <p className='bold'> Dễ Dàng Nhất, Tiết Kiệm Nhất Và Hiệu Quả Nhất…</p>
        <p className='classic'>Đây chính là thứ bạn tìm kiếm, tôi hứa, khám phá ở bài viết phía dưới.</p>
        </div>
    </div>
  )
}
