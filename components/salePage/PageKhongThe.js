import { Image } from 'antd'
import { range } from 'lodash'
import React from 'react'

export default function PageKhongThe() {
  return (
    <div className='salePage--KhongThe'>
    <div className='salePage--KhongThe__bg'>
   {range(28)?.map(e =>  <Image className='salePage--KhongThe__bg__item' preview={false} src='/assets/images/salePage/tick1.png'/>)}
    </div>
    <div className='salePage--KhongThe__text'>
   <p>

   Bạn không thể nói tiếng Anh?<br/>
Bạn nghe hiểu người ta nói gì…<br/>
Nhưng không biết trả lời lại như thế nào?<br/>
Đặc biệt là kỹ năng viết…<br/>
Có lẽ bạn chỉ biết nhìn vào tờ giấy trắng.<br/>
Hoặc con trỏ chuột màn hình.<br/>
Mà không biết triển khai ý tưởng như nào.<br/>
À..há…<br/>
Bạn chính xác là mình của vài năm trước.<br/>
Bạn muốn sử dụng tiếng Anh như một ngôn ngữ thứ 2 của mình.<br/>
Bạn thật sự muốn bắt đầu học tiếng Anh và quan tâm đến bản thân mình nhiều hơn.<br/>
Bạn thừa biết tiếng Anh sẽ giúp bạn nhiều như thế nào.<br/>
Và nó quan trọng trong thời đại ngày nay ra sao.<br/>
Hầu hết tất cả các công ty hiện nay đều yêu cầu có tiếng Anh.<br/>
Ngay cả các công ty trong nước chứ chưa kể đến các công ty nước ngoài.<br/>
Hoặc bạn muốn học thêm một kỹ năng nào đó nhưng chỉ giới hạn mình ở Việt Nam thì chắc đó là thiệt thòi cho bạn rồi.<br/>
Nhưng…
Thời gian đi học và đi làm đã không có phép bạn học tiếng Anh.<br/>
Thậm chí bạn còn chưa biết phải học như thế nào và phải bắt đầu từ đâu nữa cơ.<br/>
Và rồi…
TRÌ HOÃN là một điều không thể tránh khỏi.<br/>
Đôi lúc bạn sẽ cảm thấy mình cần học ngay, nhưng rồi bạn lại tự nhủ “khi nào có thời gian rảnh mình sẽ học”.<br/>
Hoặc là để đến mấy năm cuối rồi học cũng được, lúc đó mình có nhiêu thời gian hơn.<br/>
Và chính bạn cũng không biết đến bao giờ mình sẽ bắt đầu.<br/>

</p>

    </div>
</div>
  )
}
