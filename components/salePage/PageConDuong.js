import { Image } from 'antd'
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
export default function PageConDuong() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  useEffect(() => {
    const left = leftRef.current;
    const right = rightRef.current;
   gsap.fromTo(left,{
    translateX : -100,
    opacity : 0
   },
   {
    translateX : 0,
    opacity : 1,
    duration : 1.5,
    scrollTrigger :{
      trigger : '.triggerSrcollConDuong'
    }
   })
   gsap.fromTo(right,{
    translateX : 100,
    opacity : 0
   },
   {
    translateX : 0,
    opacity : 1,
    duration : 1.5,
    scrollTrigger :{
      trigger : '.triggerSrcollConDuong'
    }
   })
  }, []);
  return (
    <div className='salePage--ConDuong triggerSrcollConDuong'>
    <div  className='salePage--ConDuong__bg'>

    </div>
    <div ref={leftRef} className='salePage--ConDuong__left'>
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
    <div ref={rightRef}  className='salePage--ConDuong__right'>
   <Image preview={false} src='/assets/images/salePage/im2.png'/>
    </div>
    </div>
  )
}
