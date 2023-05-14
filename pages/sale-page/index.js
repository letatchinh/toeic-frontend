import Intro from 'components/salePage/Intro'
import PageCaiThien from 'components/salePage/PageCaiThien'
import PageConDuong from 'components/salePage/PageConDuong'
import PageDatDuoc from 'components/salePage/PageDatDuoc'
import PageDauTuHocPhi from 'components/salePage/PageDauTuHocPhi'
import PageLuaChon from 'components/salePage/PageLuaChon'
import PageLuuY from 'components/salePage/PageLuuY'
import PageNoiDungKhoaHoc from 'components/salePage/PageNoiDungKhoaHoc'
import PagePhanQua from 'components/salePage/PagePhanQua'
import PagePhuHop from 'components/salePage/PagePhuHop'
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
    <PagePhanQua />
    <PageLuuY />
    <PageLuaChon />
    <PagePhuHop />
   </div>

  )
}
