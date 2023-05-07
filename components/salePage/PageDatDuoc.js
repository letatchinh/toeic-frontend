import { Image } from 'antd'
import React from 'react'
const text = ['Cơ sở vật chất đảm bảo đầy đủ điều kiện, loại bỏ hoàn toàn tác nhân gây sao nhãng từ môi trường xung quanh.',
'Tài liệu chuẩn đi thẳng vào trọng tâm để bạn đi thi, không lan man, không dàn trải.',
'Từ vựng thông dụng phù hợp cho cả đời sống hằng ngày chứ không dừng lại ở việc đi thi. Thứ giá trị nhất bạn nhận được là kiến thức - không phải chứng chỉ. ',
'Bạn sẽ cảm thấy vui vẻ và tràn đầy năng lượng khi học tập, không lo bị chán hay quá tải kiến thức với đội ngũ giáo viên trẻ trung và luôn hiểu được tâm lý học viên.',
'Dù level của bạn đang ở đâu đều tham gia được, vì lượng kiến thức và phương pháp dạy đã được nghiên cứu và phát triển trong nhiều năm. Dù cho bạn là con số 0 vẫn đạt được kết quả tốt.',
'Không cần lo lắng về chất lượng cũng như học phí. Tôi hứa!',
'Bạn sẽ được giải đáp thắc mắc ngay lập tức nếu có bất cứ vấn đề gì trong quá trình học.'
]
export default function PageDatDuoc() {
  return (
    <div className='salePage--DatDuoc'>
        <div className='salePage--DatDuoc__left'>
            <p>Những gì bạn sẽ nhận được khi tham gia 
Toeic 600+
 (mất gốc → nâng cao):</p>
        </div>
        <div className='salePage--DatDuoc__right'>
        {text.map(e =>  <div className='salePage--DatDuoc__right__item'>
               <div className='salePage--DatDuoc__right__item__img'> 
               <Image width={50} height={50} preview={false} src='/assets/images/salePage/tick1.png'/>
               </div>
               <div className='salePage--DatDuoc__right__item__title'>
                <p>{e}</p>
               </div>
            </div>)}
           
        </div>
    </div>
  )
}
