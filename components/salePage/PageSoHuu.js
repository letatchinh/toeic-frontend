import { Image } from 'antd'
import { getImgFromAssets } from 'libs/hook'
import React, { useEffect, useRef, useState } from 'react'

export default function PageSoHuu() {
  const ref = useRef()
  const [visible,setVisible] = useState(false)
  console.log(visible,"visible");
  useEffect(() => {
      const obsever = new IntersectionObserver((entries) => {
          const entry   = entries[0]
          console.log(entry,'entry');
          const {isIntersecting} = entry
          console.log(isIntersecting,"isIntersecting");
          if(isIntersecting) setVisible(true)
      })
      !visible && obsever.observe(ref.current)
  },[])
  return (
    <>
      <div ref={ref}></div>
      {visible &&  <div className='salePage--SoHuu'>
    <div className='salePage--SoHuu__people'>
        <Image preview={false} src={getImgFromAssets('salePage/img3.png')}/>
    </div>
    <div className='salePage--SoHuu__NetSon'>
        <Image preview={false} src={getImgFromAssets('salePage/netSon.png')}/>
    </div>
    <div className='salePage--SoHuu__MayBayGiay1'>
    <Image preview={false} src={getImgFromAssets('salePage/MayBayLine.png')}/>
    </div>
    <div className='salePage--SoHuu__MayBayGiay2'>
    <Image preview={false} src={getImgFromAssets('salePage/MayBayDash.png')}/>
    </div>
    <div className='salePage--SoHuu__right'>
        <p className='salePage--SoHuu__right__content'>
        Sở hữu <span>Toeic 600+ (mất gốc → nâng cao)</span>, với một mức giá cực kỳ hấp dẫn.<br/>
Chỉ với <span>2triệu  900k</span> cho toàn bộ quá trình học tận 5 tháng, tất cả các tài liệu và quà tặng đi kèm thay vì<br/>
 <span className='gachCheo'>14 triệu 750k</span> như tổng giá trị. <br/>
Rất nhiều phần quà giá trị phía bên dưới…
        </p>
    </div>
    </div>}
    </>
   
  )
}
