import React from 'react'
import contact_banner from '../assets/contact_banner.jpeg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <div className='overflow-x-hidden'>

      {/* contact banner */}
      <div className='bg-white w-full md:px-40 px-8 py-7'>
        <p className='font_poppins font-semibold capitalize underline underline-custom text-[#585858] text-3xl md:text-5xl md:mb-7'>contact</p>
      </div>
      <div className='w-full  flex flex-wrap items-center md:justify-around justify-start px-16 md:px-44 py-24 bg-[#364E09] opacity-70%' style={{ backgroundImage: `url(${contact_banner})`,backgroundSize:"cover",backgroundPosition: "65% 35%"}}>

        <div className='text-white text-3xl md:text-4xl font_poppins md:mb-0 mb-8'>
          <p className='font-semibold'><LocalPhoneIcon style={{fontSize:"44px"}}/> Phone</p>
          <p className='text-2xl md:text-2xl mt-3 font-light'>+1-2345-2345</p>
        </div>
        <div className='text-white text-3xl md:text-4xl font_poppins md:mb-0 mb-8'>
          <p className='font-semibold'><EmailIcon style={{fontSize:"44px"}}/> Email</p>
          <p className='text-2xl md:text-2xl mt-3 font-light'>contact@thivi.com.au</p>
        </div>
        <div className='text-white text-3xl md:text-4xl font_poppins'>
          <p className='font-semibold'><LocationOnIcon style={{fontSize:"44px"}}/>Location</p>
          <p className='text-2xl md:text-2xl mt-3 font-light'>&nbsp; Sydney, Australia</p>
        </div>

      </div>

      {/* contact form */}
      <div className='w-full bg-white text-center py-16 mb-11'>
        <h1 className='font_poppins font-bold text-3xl md:text-4xl text-[#30326B]'>LEAVE US YOUR INFO</h1>
        <p className='font_poppins font-normal md:text-[22px] text-[#A0A0A0] mt-3 mb-12'>AND WE WILL GET BACK TO YOU.</p>

        <form className='lg:w-[652px] w-[320px] mx-auto'>
                  <input className='lg:w-[652px] w-[320px] bg-[#F2F2F2] rounded-xl p-5 mb-4 font_poppins' type="text" placeholder='Your Name' />

                  <input className='lg:w-[652px] w-[320px] bg-[#F2F2F2] rounded-xl p-5 mb-4 font_poppins' type="email" placeholder='Your Email'  name="" id="" />

                  <textarea className='lg:w-[652px] w-[320px] h-[174px] p-5 bg-[#F2F2F2] rounded-xl mb-4 font_poppins' placeholder='Message' name="" id=""></textarea>

                  <button className='lg:w-[652px] w-[320px] h-[67px] bg-[#30326B] text-white rounded-xl font_poppins md:text-[22px] font-bold font_poppins'>Subscribe</button>
        </form>

      </div>

      {/* map area */}
      <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.492169300537!2d76.87736640000001!3d8.54858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bf9bca82635f%3A0x72d8ed7960ffc184!2sTechnopark%20Phase%203!5e0!3m2!1sen!2sin!4v1719554087304!5m2!1sen!2sin' style={{height:"500px", border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full'/>



    </div>
  )
}

export default Contact