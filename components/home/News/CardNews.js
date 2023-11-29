import { useGsap } from 'core/effect';
import React, { useRef } from 'react'

export default function CardNews() {
    const card = useRef();
    useGsap(
      [
        {
          ref: card,
          className: '.news--content__left--card',
          from: {
            translateY: 200,
            opacity: 0,
          },
          to: {
            translateY: 0,
            opacity: 1,
            duration: 1,
          }
        }
      ]
    );
  return (
    <div ref={card} className='news--content__left--card'>
    <div className='hot'>
        <span>Hot</span>
    </div>
    <div className='news--content__left--card__image'>
        <img src='assets/images/news/news1.jpeg'/>
    </div>
    <div className='news--content__left--card__description bs-primary'>
        <div className='news--content__left--card__description--head'>
            <span className='news--content__left--card__description--head__title'>
                TOEFL
            </span>
            <span className='news--content__left--card__description--head__date'>
                13/07/2023
            </span>
        </div>
        <p className='news--content__left--card__description--title'>
        TOEFL iBT – Tấm vé du học khắp năm châu
        </p>
        <p className='news--content__left--card__description--content'>
        Với sự công nhận rộng rãi của hơn 12.000 tổ chức tại 160 quốc gia, TOEFL iBT mở ra cơ hội du học khắp năm châu, trong đó có các trường Đại học hàng đầu tại Mỹ, Anh, Canada, Đức… TOEFL iBT là bài thi quốc tế đánh giá năng lực tiếng Anh trong môi […]
        </p>
    </div>
</div>
  )
}
