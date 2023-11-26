import { AppleOutlined, FacebookOutlined, YoutubeOutlined } from '@ant-design/icons'
import React from 'react'

export default function index() {
  return (
    <ul className='branches'>
        <li className='branches--item'>
        <FacebookOutlined className='branches--item__logo'/>
        </li>
        <li className='branches--item'>
        <YoutubeOutlined className='branches--item__logo'/>
        </li>
        <li className='branches--item'>
        <AppleOutlined className='branches--item__logo'/>
        </li>
    </ul>
  )
}
