import { Collapse, Image } from 'antd'
import { getImgFromAssets } from 'libs/hook'
import React from 'react'
const {Panel} = Collapse
export default function PageNoiDungKhoaHoc() {
  return (
    <div className='salePage--NoiDungKhoaHoc'>
    <div className='salePage--NoiDungKhoaHoc__title'>
    <div className='salePage--NoiDungKhoaHoc__title__bg'>
        <Image preview={false} src={getImgFromAssets('salePage/netSon.png')}/>
    </div>
        <h3>Nội dung khoá học</h3>
    </div>
    <div className='salePage--NoiDungKhoaHoc__content'>
    <Collapse  size='large'  >
      <Panel  header="Tháng đầu tiên" key="1">
        <p>Đây là tháng tạo thói quen học tập và sử dụng tiếng Anh cho bạn.<br />
Bạn sẽ được học những thứ cơ bản nhất như phát âm, luyện nghe song song học ngữ pháp.<br />
Những kiến thức sẽ được áp dụng ngay sau khi bạn học. Ai cũng biết “học đi đôi với hành” mà nhỉ!!!<br />
Đặc biệt cách ghi nhớ từ vựng không bao giờ quên. Và phương pháp học dễ nhất để bạn ghi nhớ từ vựng cũng như tạo thói quen hằng ngày.<br />
Sau đó bạn sẽ bắt đầu luyện nghe ở những bài căn bản nhất.<br />
Bạn sẽ bất ngờ khi lượng từ vựng bạn vừa học sẽ được sử dụng ngay lập tức.<br />
Bạn sẽ không cần phải làm các bài test đầu vào, vì nó tốn thời gian và không mang lại lợi ích gì cả. </p>
      </Panel>
      </Collapse>
      <Collapse  size='large'  >
      <Panel  header="Tháng thứ 2&3" key="1">
        <p>
        Tiếp tục duy trì thói quen học tập.<br />
Bạn sẽ thấy khả năng học tiếng anh của bạn thay đổi khá mạnh mẽ ở giai đoạn này.<br />
Bạn có thể học nhanh hơn, nhiều hơn mà không thấy áp lực hay stress.<br />
Lượng từ vựng tổng hợp sẽ tiếp tục được hấp thu. Bạn sẽ bất ngờ nếu nhìn lại khối từ vựng mà bạn đang sở hữu.<br />
Bạn sẽ dần quen ở việc làm bài reading cũng như listening.<br />
Tạo bước đệm để đến với giai đoạn tiếp theo.
</p>
      </Panel>
      </Collapse>
      <Collapse  size='large'  >
      <Panel  header="Tháng thứ 4" key="1">
        <p>
        Đến đây thì chắc chắn bạn đã giữ được thói quen học tiếng Anh của mình rồi.<br />
Ôn tập lại từng giai đoạn phía trước, nắm chắc kiến thức, bắt đầu luyện full test reading và listening.<br />
Lượng từ vựng vẫn tiếp tục được nạp vào ở giai đoạn này nhé!
</p>
      </Panel>
      </Collapse>
      <Collapse  size='large'  >
      <Panel  header="Tháng cuối cùng" key="1">
        <p>
        Bạn sẽ được học những từ vựng cuối cùng của khóa học.<br />
Dành 100% thời gian để luyện giải đề.<br />
Nắm vững kiến thức. Đến giai đoạn này rồi thì bạn chỉ muốn hoàn thành khóa học và….<br />
Đi thi lấy chứng chỉ về thôi nàooooo!<br />
Hoặc bạn cảm thấy chưa tự tin và muốn luyện đề nhiều hơn?<br />
Đừng quên bạn còn có bonus 20 buổi luyện test mà! (này ở phía bên dưới nhé!)
</p>
      </Panel>
    </Collapse>
    </div>
    </div>
  )
}
