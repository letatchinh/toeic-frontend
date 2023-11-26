import { Carousel, Image } from 'antd'
import React from 'react'

export default function index() {
  return (
    <div className='banner'>
        <Carousel dots={{
            className : 'dot-banner'
        }} swipeToSlide draggable autoplay className='banner--carousel'>
            <div className='banner--carousel__ContainerImage'>
                <Image width='100%' preview={false} src='assets/images/banner/banner1.png'/>
            </div>
            <div className='banner--carousel__ContainerImage'>
                <Image width='100%' preview={false} src='assets/images/banner/Banner-final.jpg'/>
            </div>
            <div className='banner--carousel__ContainerImage'>
                <Image width='100%' preview={false} src='assets/images/banner/banner3.jpeg'/>
            </div>
        </Carousel>
    </div>
  )
}
