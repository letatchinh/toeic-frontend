import Intro from 'components/salePage/Intro'
import PageCaiThien from 'components/salePage/PageCaiThien'
import PageConDuong from 'components/salePage/PageConDuong'
import PageDatDuoc from 'components/salePage/PageDatDuoc'
import PageDauTuHocPhi from 'components/salePage/PageDauTuHocPhi'
import PageNoiDungKhoaHoc from 'components/salePage/PageNoiDungKhoaHoc'
import PageSoHuu from 'components/salePage/PageSoHuu'
import React from 'react'

export default function index() {
  return (
   <div className='salePage'>
    <Intro />
    <PageCaiThien />
    <PageDauTuHocPhi />
    <PageConDuong />
    <PageNoiDungKhoaHoc/>
    <PageDatDuoc />
    <PageSoHuu />
   </div>

  )
}
