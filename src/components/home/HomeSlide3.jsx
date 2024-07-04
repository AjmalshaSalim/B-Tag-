import React from 'react'
import homebanner from '../../assets/homebanner.png'
import { Link } from 'react-router-dom'

function HomeSlide1() {
  return (
<div className='relative'>
  <div className='w-full h-[579px] p-14 md:p-36 relative' style={{backgroundImage:`url(${homebanner})`,backgroundSize:"cover",backgroundPosition: "70% 30%"}}>
    <div className='absolute inset-0 bg-green-950 opacity-50'></div>
    <div className='relative md:w-4/5 w-full'>
      <h1 className='font_poppins font-bold text-white text-[30px] md:text-[50px] md:leading-[62px] mb-3 mt-20 md:mt-0'>BTAG Global Educational Trust </h1>
      <p className='font_poppins text-white font-light md:text-[15px] md:w-2/3 w-full'>An initiative to provide education and training by running offline programmes and institutions across India and online educational services across the Globe.  </p>
      <Link to={'/about'}><button className='rounded-full px-4 py-2 border-[1px] border-slate-900 font_poppins text-[18px] font-semibold mt-5'>More Details</button></Link>
    </div>
  </div>
</div>

  )
}

export default HomeSlide1