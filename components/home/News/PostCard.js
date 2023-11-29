import { useGsap } from 'core/effect';
import React, { useRef } from 'react'

export default function PostCard() {
    const card = useRef();
    useGsap(
      [
        {
          ref: card,
          className: '.postCard',
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
    <div ref={card} className='postCard br-tr-15 bs-primary'>
        <div className='hot br-tr-15'>
            <span>Hot</span>
        </div>
        <div className='news--content__left--card__description'>
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
    </div>
    </div>
  )
}
