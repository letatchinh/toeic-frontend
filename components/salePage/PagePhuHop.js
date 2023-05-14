import { Image } from 'antd'
import React from 'react'

export default function PagePhuHop() {
  return (
    <div className='salePage--PhuHop'>
    <div  className='salePage--PhuHop__bg'>

    </div>
    <div className='salePage--PhuHop__left'>
    <p className='salePage--PhuHop__left__title'>
    Phù hợp với tất cả đối tượng
    </p>
    <p className='salePage--PhuHop__left__content'>
    Bạn đang không sinh sống tại<br />
 thành phố Hồ Chí Minh.<br />
Thậm chí bạn là một người có lịch học<br />
 và làm việc quá dày đặc.<br />
Và bạn muốn tìm một khoá học vừa chất lượng<br />
 vừa thuận tiện cho cuộc sống hiện tại.<br />
Chắc chắn Toeic 600+ (mất gốc → nâng cao) <br />
sinh ra là dành cho bạn.<br />
Ngoài đào tạo trực tiếp tại trung tâm, Hoàng Toeic đã nắm bắt được nhu cầu đó nên các lớp học online đã được hình thành.<br />
Chất lượng không thay đổi, những giá trị không thay đổi. Điều duy nhất thay đổi đó là vị trí học tập.<br />
Học online sẽ giúp bạn tiết kiệm thời gian di chuyển, học bất cứ nơi nào bạn muốn.<br />
Tất cả đều vì mục đích mang đến cho bạn<br />
 một khoá học phù hợp nhất.
    </p>
    </div>
    <div className='salePage--PhuHop__right'>
   <Image preview={false} src='/assets/images/salePage/intro.png'/>
    </div>
    </div>
  )
}
