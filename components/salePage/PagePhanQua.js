import { Collapse } from "antd";
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
const { Panel } = Collapse;
export default function PagePhanQua() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  useEffect(() => {
    const ref11 = ref1.current;
    const ref22 = ref2.current;
    const ref33 = ref3.current;
    const ref44 = ref4.current;
    const ref55= ref5.current;
    const ref66 = ref6.current;
    const transittion1 = {
      translateY : -100,
      opacity : 0,
     }
   const  transittion2 = (ref) => ({
    translateY : 0,
    opacity : 1,
    duration : 1.5,
    delay : 1,
    ease: "power1.inOut",
    scrollTrigger :{
      trigger : ref
    }
   })
  gsap.fromTo(ref11,transittion1,transittion2(ref11))
  gsap.fromTo(ref22,transittion1,transittion2(ref22))
  gsap.fromTo(ref33,transittion1,transittion2(ref33))
  gsap.fromTo(ref44,transittion1,transittion2(ref44))
  gsap.fromTo(ref55,transittion1,transittion2(ref55))
  gsap.fromTo(ref66,transittion1,transittion2(ref66))
  }, []);
  return (
    <div className="salePage--PhanQua">
      <div className="salePage--PhanQua__title__bg"></div>
      <div className="salePage--PhanQua__title triggerSrcollPhanQUa">
        <h3>Những phần quà mà bạn sẽ nhận được kèm với khóa học</h3>
      </div>
      <div className="salePage--PhanQua__content ">
        <Collapse ref={ref1} size="large">
          <Panel header="1. Học lại trọn đời. (ít nhất 2.5 triệu) " key="1">
            <p>
              Hoàng Toeic đã dành rất nhiều thời gian và tâm huyết để tạo ra lớp
              học cấp tốc này, nó hoàn toàn MIỄN PHÍ cho các học viên.
              <br />
              Thời lượng 20 buổi sẽ giúp bạn rèn luyện và chuẩn bị tinh thần
              trước khi đi thi.
              <br />
              Bạn có thể học lại nhiều lần, nên con số không dừng lại ở 20 buổi
              đâu nhé!
              <br />
              Chắc chắn lớp học này sẽ là vô giá đối với bạn.
            </p>
          </Panel>
        </Collapse>
        <Collapse ref={ref2} size="large">
          <Panel
            header="2. 20 buổi luyện full test cấp tốc sau khóa học - trọn đời. (ít nhất 2 triệu) "
            key="1"
          >
            <p>
              Hoàng Toeic đã dành rất nhiều thời gian và tâm huyết để tạo ra lớp
              học cấp tốc này, nó hoàn toàn MIỄN PHÍ cho các học viên.
              <br />
              Thời lượng 20 buổi sẽ giúp bạn rèn luyện và chuẩn bị tinh thần
              trước khi đi thi.
              <br />
              Bạn có thể học lại nhiều lần, nên con số không dừng lại ở 20 buổi
              đâu nhé!
              <br />
              Chắc chắn lớp học này sẽ là vô giá đối với bạn.
            </p>
          </Panel>
        </Collapse>
        <Collapse ref={ref3} size="large">
          <Panel header="3.Miễn phí tài liệu và chi phí in ấn. (250k) " key="1">
            <p>
              Chi phí in ấn ban đầu sẽ rơi vào khoản 250k.
              <br />
              Không cần phải lo lắng, bạn không phải bỏ ra thêm bất cứ khoản
              tiền nào khác khi đã trở thành học viên của Hoàng Toeic.
            </p>
          </Panel>
        </Collapse>
        <Collapse ref={ref4} size="large">
          <Panel
            header="4. Miễn phí tài khoản để học trực tuyến. (5 triệu)"
            key="1"
          >
            <p>
              Hoàng Toeic đã tạo ra một trang web và mỗi học viên đều sẽ có
              account riêng.
              <br />
              Website đó sẽ có những gì?
              <br />
              Toàn bộ tài liệu chất lượng và mới nhất sẽ được Hoàng Toeic update
              lên đó.
              <br />
              Bao gồm cả video bài giảng về từng chủ đề…
              <br />
              Bạn có quyền truy cập bất kỳ nơi đâu, bất kỳ lúc nào và học bất kỳ
              thứ gì bạn muốn.
              <br />
              Không lo thiếu tài liệu để học tập rồi nhé!
            </p>
          </Panel>
        </Collapse>
        <Collapse ref={ref5} size="large">
          <Panel
            header="5. Giảm giá khi đăng ký theo nhóm. (lên đến 500k)"
            key="1"
          >
            <p>
              Nhóm càng nhiều thì sẽ được giảm càng nhiều…
              <br />
              - Đi cá nhân: 2tr5/bạn
              <br />
              - Nhóm 3+ bạn: 2tr4/bạn
              <br />
              - Nhóm 5+ bạn: 2tr3/bạn
              <br />
              - Nhóm 8+ bạn: 2tr2/bạn
              <br />
              - Nhóm 10+ bạn: 2tr1/bạn
              <br />
              - Nhóm 15+ bạn: 2tr/bạn
              <br />
              Để tiết kiệm hơn thì bạn nên rủ bạn bè cùng đi học để cùng được
              giảm học phí nhé!
            </p>
          </Panel>
        </Collapse>
        <Collapse ref={ref6} size="large">
          <Panel
            header="6. Phương pháp học từ vựng mới lạ, giúp bạn học dễ nhớ lâu. (2 triệu)"
            key="1"
          >
            <p>
              Từ vựng là ĐIỂM YẾU LỚN NHẤT của hầu hết các bạn khi học tiếng
              Anh.
              <br />
              Khó nhớ, khô khan lại dễ quên chắc chắn sẽ là những suy nghĩ đầu
              tiên khi nhắc tới.
              <br />
              Với phương pháp đặc biệt của Hoàng Toeic, việc học từ vựng giống
              như bạn đang chơi game vậy, hấp dẫn - dễ nhớ - lại lâu quên.
              <br />
              Chắc chắn bạn sẽ bất ngờ bởi phương pháp “bí mật” của Hoàng Toeic.
            </p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}
