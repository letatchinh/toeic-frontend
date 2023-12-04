import { Image } from 'antd'

export default function BanBietRang() {
    return (
        <div className='salePage--BanBietRang'>
            <div className='salePage--BanBietRang__bg'>
                <Image className='salePage--BanBietRang__bg__item' preview={false} src='/assets/images/salePage2/backgroup2.png' />
            </div>
            <div className='salePage--BanBietRang__left'>
                <p>
                    Bạn biết rằng chỉ cần mỗi ngày bạn dành ra một ít thời gian để học, là bạn có thể tiến bộ một cách nhanh chóng.Trở nên giỏi hơn.<br />
                    Và sử dụng tiếng Anh như cách<br />
                    bạn mong muốn.Có một tin xấu là mình không thể làm cho bạn có thêm thời gian được.<br />
                    Đồng thời cũng không thể học thay bạn được.<br />
                    Và tin tốt là mình có thể giúp bạn thay đổi<br />
                    từng bước một. Loại bỏ cảm giác tự ti.<br />
                    Áp dụng những kiến thức được học<br />
                    ngay vào thực tế.Chỉ trong 3 tháng,<br />
                    có thể ngay tại nhà nếu bạn muốn!<br />
                </p>

            </div>
            <div className='salePage--BanBietRang__right'>
                <div className='salePage--BanBietRang__right__neon'>
                <img src='/assets/images/salePage2/pngegg.png' />
                </div>
                <img src='/assets/images/salePage2/IMG_0527.png' />
            </div>
        </div>
    )
}
