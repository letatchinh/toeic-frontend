import { Image } from 'antd'
import { range } from 'lodash'
import React from 'react'

export default function HocTiengAnh() {
    return (
        <div className='salePage--HocTiengAnh'>
        
            <div className='salePage--HocTiengAnh__left'>
                <p className='salePage--HocTiengAnh__left__title'>
                    Học Tiếng Anh Chưa Bao Giờ Là Dễ
                </p>
                <p className='salePage--HocTiengAnh__left__content'>
                    Mình không phải là “pháp sư Trung Hoa” mà có thể biến bạn trở nên <br/>
                    giỏi hơn sau một đêm. <br/>
                    Mình dùng kinh nghiệm dạy học trong nhiều năm, dạy hàng ngàn bạn học viên. <br/>
                    Để có thể mang đến cho bạn những gì tuyệt vời nhất. <br/>
                    Mình muốn chia sẻ cho bạn phương pháp học mà bạn có thể tập trung phát triển <br/>
                    con đường tiếng Anh. <br/>
                    Và cả sự nghiệp tương lai của mình. <br/>
                </p>


            </div>
            <div className='salePage--HocTiengAnh__right'>
            <div className='salePage--HocTiengAnh__bg1'/>
            <div className='salePage--HocTiengAnh__bg2'/>
                <img src='/assets/images/salePage2/IMG_0343.png' />
            </div>
        </div>
    )
}
