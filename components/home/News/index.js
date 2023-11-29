import { RightOutlined } from '@ant-design/icons';
import ButtonPrimary from 'components/comon/exportSvg/button/ButtonPrimary';
import { useGsap } from 'core/effect';
import { useRef } from 'react';
import CardNews from './CardNews';
import PostCard from './PostCard';

export default function News() {
  const title = useRef()
  useGsap(
    [
      {
        ref: title,
        className: '.news--title',
        from: {
          translateX: -200,
          opacity: 0,
        },
        to: {
          translateX: 0,
          opacity: 1,
          duration: 1,
        }
      }
    ]
  );
  return (
    <div className='news'>
      <h1 ref={title} className='news--title'>
        Tin tức & Sự kiện
      </h1>
      <div className='news--content'>
        <div className='news--content__left'>
          <CardNews />
          <CardNews />
        </div>
        <div className='news--content__right'>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
      <ButtonPrimary>
        Xem tất cả <RightOutlined />
      </ButtonPrimary>
    </div>
  )
}
