import React from 'react'
import contact_banner from '../assets/contact_banner.jpeg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <div className='overflow-x-hidden'>
      <div className='bg-white w-full px-40 py-7'>
        <p className='font_poppins font-semibold capitalize underline text-[#585858] text-5xl'>contact</p>
      </div>
      <div className='w-full  flex items-center justify-around  px-44 py-24 [background-position:bottom]' style={{ backgroundImage: `url(${contact_banner})`,backgroundSize:"cover" }}>

        <div className='text-white text-4xl'>
          <p><LocalPhoneIcon/>Phone</p>
          <p>+1-2345-2345</p>
        </div>
        <div className='text-white text-4xl'>
          <p><EmailIcon/>Email</p>
          <p>contact@thivi.com.au</p>
        </div>
        <div className='text-white text-4xl'>
          <p><LocationOnIcon/>Location</p>
          <p>Sydney, Australia</p>
        </div>

      </div>

    </div>
  )
}

export default Contact