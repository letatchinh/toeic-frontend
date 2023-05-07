import { Image } from 'antd'
import React from 'react'

export default function PageConDuong() {
  return (
    <div className='salePage--ConDuong'>
    <div  className='salePage--ConDuong__bg'>

    </div>
    <div className='salePage--ConDuong__left'>
    <p className='salePage--ConDuong__left__title'>
    Đây là con đường Ngắn Nhất, Dễ Nhất
    <br/>
 và Tiết Kiệm Nhất để
 <br/>
 học Tiếng Anh.
 <br/>
Dù Bạn Là Một Người Chưa Biết Gì Về 
<br/>
Tiếng Anh.
    </p>
    <p className='salePage--ConDuong__left__content'>
    Toeic 600+ (mất gốc → nâng cao) hoạt động như thế nào….
Bạn sẽ được học lên đến tận 5 tháng với từng giai đoạn rõ ràng và dễ hiểu. Giúp bạn có chứng chỉ để ra trường và sử dụng tiếng Anh một cách tự tin.
<br/>
Với mục tiêu chính “học một lần là đậu”, Hoàng Toeic luôn chú trọng vào chất lượng của từng buổi học không để học viên phải tốn thời gian và công sức mà không có kết quả.
Nếu bạn muốn trải nghiệm? 
<br/>
<a  className='salePage--ConDuong__left__link' href='#'>[Nhấn vào đây để trở thành học viên]</a>
    </p>
    </div>
    <div className='salePage--ConDuong__right'>
   <Image preview={false} src='/assets/images/salePage/im2.png'/>
    </div>
    </div>
  )
}
