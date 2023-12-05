import DaySeLa from 'components/salePage/DaySeLa'
import PageBanCanBiet from 'components/salePage/PageBanCanBiet'
import PageKhongThe from 'components/salePage/PageKhongThe'
import BanBietRang from 'components/salePage/BanBietRang'
import React from 'react'
import Letter from 'components/salePage/Letter'
import HocTiengAnh from 'components/salePage/HocTiengAnh'
import BanSeDuoc from 'components/salePage/BanSeDuoc'

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
     </div>
  
    )
  }
  
