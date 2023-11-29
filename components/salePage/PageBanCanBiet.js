import { Image } from 'antd'
import Cirleviolet from '../comon/exportSvg/cirleviolet'
import React from 'react'

export default function PageBanCanBiet() {
  return (
    <div className='salePage--BanCanBiet'>
    <div className='salePage--BanCanBiet__bg1'>
        <img src='/assets/images/salePage/nen2.png'/>
    </div>
    <div className='salePage--BanCanBiet__image'>
    <div className='salePage--BanCanBiet__image__bg'>
    <Cirleviolet />
    </div>
        <Image preview={false} src='/assets/images/salePage/IMG_0434.png'/>
    </div>
    <div className='salePage--BanCanBiet__text'>
   <p>Những Gì Bạn Cần Biết Để Nói Và Viết Tiếng Anh Tốt<br/>
Chưa Nơi Nào Nói Cho Bạn Điều Này<br/>

</p>
<span>
(Những Sự Thật Về Tiếng Anh Mà Chưa Nơi Nào Nói Cho Bạn Biết)
</span>
    </div>
</div>
  )
}
