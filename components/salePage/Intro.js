import { Image } from 'antd'
import React from 'react'
export default function Intro() {
  return (
    <div className='salePage--intro'>
        <div className='salePage--intro__image'>
            <Image preview={false} src='/assets/images/salePage/teacher.png'/>
        </div>
        <div className='salePage--intro__text'>
        <p>Tôi không muốn giỏi tiếnh anh</p>
        </div>
    </div>
  )
}
