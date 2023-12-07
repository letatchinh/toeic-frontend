import { Image } from 'antd'
import { range } from 'lodash'
import React from 'react'

export default function NgayTuDau() {
    return (
        <div className='salePage--NgayTuDau'>
            <div className='salePage--NgayTuDau__bg'>
                {range(21)?.map(e => <div key={e} className='salePage--NgayTuDau__bg__item'>
                    <img src='/assets/images/salePage2/Sam.svg' />
                </div>)}

            </div>
            <div className='salePage--NgayTuDau__content'>
                <p>
                    Ngay từ ban đầu mình luôn muốn mức giá mình sẽ phù hợp với tất cả các bạn đặc biệt là sinh viên. <br />
                    Vậy nên…<br />
                    Giá của khoá học không phải 20 30 triệu như các trung tâm lớn ngoài kia.<br />
                    Cũng không phải 500 600 nghìn một buổi như dạy kèm 1-1<br />
                    Hay <span>10 triệu…</span><br />
                    Hay <span>7.5 triệu…</span><br />
                    Tóm lại bạn sẽ bất ngờ vì đây sẽ là một khoá học tiếng Anh có giá rẻ không tưởng.<br />
                    Vì số tiền bạn cần đầu tư chỉ là:<br />
                    <span>3.500.000đ</span><br />
                    Đúng vậy!<br />
                    Chỉ vỏn vẹn <span>3.500.000đ</span><br />
                    Nếu bạn đã từng học ở các trung tâm lớn, hoặc có bạn bè học ở các trung tâm lớn.<br />
                    Thì chắc bạn sẽ hiểu mức giá này thấp đến chừng nào.<br />
                    Bạn có biết ở các trung tâm lớn, họ sẽ cố gắng khiến bạn trả càng nhiều tiền càng tốt.<br />
                    Sẽ có rất nhiều level và giá cũng không dưới 10 triệu.<br />
                    Với một sinh viên thì số tiền đó không phải là nhỏ.<br />
                </p>
            </div>
        </div>
    )
}
