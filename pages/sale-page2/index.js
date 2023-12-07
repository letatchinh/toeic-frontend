import DaySeLa from 'components/salePage/DaySeLa'
import PageBanCanBiet from 'components/salePage/PageBanCanBiet'
import PageKhongThe from 'components/salePage/PageKhongThe'
import BanBietRang from 'components/salePage/BanBietRang'
import React from 'react'
import Letter from 'components/salePage/Letter'
import HocTiengAnh from 'components/salePage/HocTiengAnh'
import BanSeDuoc from 'components/salePage/BanSeDuoc'
import VayNeuBayGio from 'components/salePage/VayNeuBayGio'
import NgayTuDau from 'components/salePage/NgayTuDau'
import TaiSaoLai from 'components/salePage/TaiSaoLai'
import DayKhongphai from 'components/salePage/DayKhongphai'
import DaCoHon from 'components/salePage/DaCoHon'
import Qa from 'components/salePage/Qa'

export default function index() {
    return (
     <div className='salePage'>
      <PageBanCanBiet />
      <PageKhongThe />
      <DaySeLa />
      <BanBietRang />
      <Letter />
      <HocTiengAnh />
      <BanSeDuoc />
      <VayNeuBayGio />
      <NgayTuDau />
      <TaiSaoLai />
      <DayKhongphai />
      <DaCoHon />
      <Qa />
     </div>
  
    )
  }
  
