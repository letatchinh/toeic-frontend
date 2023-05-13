import { Image } from 'antd'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
export default function Intro() {
  const triggerRef = useRef(null);
  useEffect(() => {
    const el = triggerRef.current;
   gsap.fromTo(el,{
    translateX : -200,
    opacity : 0
   },
   {
    translateX : 0,
    opacity : 1,
    duration : 3,
    scrollTrigger :{
      trigger : '.triggerSrcollIntro'
    }
   })
  }, []);
  return (
    <div className='salePage--intro triggerSrcollIntro'>
        <div ref={triggerRef} className='salePage--intro__image'>
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
