import { Image } from 'antd'
import React from 'react'
import Navbar from '../Navbar'
export default function index() {
  return (
    <div className='header'>
      <div className='header--logo'>
        <Image preview={false} src='/assets/images/navbar/logo.png' width={50}/>
      </div>
      <Navbar />
    </div>
  )
}
