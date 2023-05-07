import Intro from 'components/salePage/Intro'
import PageCaiThien from 'components/salePage/PageCaiThien'
import PageConDuong from 'components/salePage/PageConDuong'
import PageDatDuoc from 'components/salePage/PageDatDuoc'
import PageDauTuHocPhi from 'components/salePage/PageDauTuHocPhi'
import React from 'react'

export default function index() {
  return (
   <div className='salePage'>
    <Intro />
    <PageCaiThien />
    <PageDauTuHocPhi />
    <PageConDuong />
    <PageDatDuoc />
   </div>

  )
}
