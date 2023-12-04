import { Image } from 'antd'
import { range } from 'lodash'
import React from 'react'

export default function DaySeLa() {
    return (
        <div className='salePage--DaySeLa'>
            <div className='salePage--DaySeLa__bg'>
                <Image className='salePage--DaySeLa__bg__item' preview={false} src='/assets/images/salePage2/image_112.png' />
            </div>
            <div className='salePage--DaySeLa__left'>
                <p>
                Đây sẽ là con đường giúp bạn sử dụng được tiếng Anh.<br/>
                Mà không cần đầu tư quá nhiều tiền <br/>
                </p>

            </div>
            <div className='salePage--DaySeLa__right'>
                <img src='/assets/images/salePage2/IMG_0202.png'/>
            </div>  
        </div>
    )
}
