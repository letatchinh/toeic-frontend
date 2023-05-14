import React, { useEffect, useRef, useState } from 'react'
import Pencils from 'public/assets/images/salePage/pencils.svg'
import { Image } from 'antd';
export default function PageLuaChon() {
    const titleRef = useRef()
    const [visible,setVisible] = useState(false)
    useEffect(() => {
        const obsever = new IntersectionObserver((entries) => {
            const entry   = entries[0]
            console.log(entry,'entry');
            const {isIntersecting} = entry
            if(isIntersecting) setVisible(true)
        })
        obsever.observe(titleRef.current)
    },[])
    const [message, setMessage] = useState('');
    const [index, setIndex] = useState(0);
  
    const text = 'Bạn Sẽ Chọn Từ Bỏ Cái Gì - Khả Năng Tiếng Anh Hoặc Thời Gian Học Trên Trường Và Đi Làm?';
    useEffect(() => {
        if (index < text.length && visible) {
          setTimeout(() => {
            setMessage(message + text.charAt(index));
            setIndex(index + 1);
          }, 10);
        }
      }, [index, message, text,visible]);
  return (
    <div className='salePage--LuaChon'>
   <div ref={titleRef} className='salePage--LuaChon__title'>
   <p>
   {message}
   </p>
   </div>
   <div  className='salePage--LuaChon__content'>
  <p className='cac'>
  Với Toeic 600+ (mất gốc → nâng cao), bạn sẽ không cần phải chọn.<br/>
Là công cụ đắc lực hỗ trợ trong công việc và học tập, trong khi lại TIẾT KIỆM cho bạn rất nhiều THỜI GIAN và  TIỀN BẠC. <br/>
Không hề ảnh hưởng đến công việc và học tập, đồng thời hỗ trợ bạn ngay tại thời điểm bạn nạp kiến thức của Hoàng Toeic.<br/>
Dù bạn là sinh viên năm cuối hay người đang đi làm đều tham gia được…<br/>
Có nhiều lớp học xen kẽ trong một tuần, nên sẽ rất thuận tiện nếu bạn là một người không có nhiều thời gian rảnh.<br/>
Hoặc có việc đột xuất xảy ra trong ngày học của bạn.<br/>
Bạn hoàn toàn có thể học bù vào các buổi khác, điều mà không có trung tâm nào có thể làm được.<br/>
Và khóa học này chỉ vỏn vẹn một ổ bánh mì mỗi ngày!
  </p>
   </div>
    </div>
  )
}
