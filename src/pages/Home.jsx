import React from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import HomeSlide1 from '../components/home/HomeSlide1';
import 'swiper/css';
import 'swiper/css/pagination';
import home_about from '../assets/home_about.png'
import home_play1 from '../assets/home_play1.png'
import HomeActivities from '../components/home/HomeActivities'
import HomeTestimonials from '../components/home/HomeTestimonials';
import homeicon from '../assets/homeicon.png'


function Home() {
  return (
    <div className='overflow-x-hidden'>

      {/* Homebanner */}
      <div className='relative'>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true}}
          autoplay={{ delay: 3000 }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide><HomeSlide1/></SwiperSlide>
          <SwiperSlide><HomeSlide1/></SwiperSlide>
          <SwiperSlide><HomeSlide1/></SwiperSlide>
        </Swiper>
      </div>

      {/* 4 cards */}
      <div className='hidden md:inline-block'>
        <div className='w-full flex flex-wrap items-center justify-evenly px-44 gap-0 absolute top-[585px] z-10 '>
          <div className='w-[220px] h-[220px] shadow-xl bg-[#FCFFF6] rounded-3xl p-8'>
              <h4 className='text-[#3E5C05] font_poppins text-[20px]  font-normal'>lorem ipsum</h4>
              <p className='text-[#A4A4A4] font_poppins text-[14px]font-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quis veritatis.</p>
          </div>
          <div className='w-[220px] h-[220px] shadow-xl bg-[#FCFFF6] rounded-3xl p-8'>
              <h4 className='text-[#3E5C05] font_poppins text-[20px]  font-normal'>lorem ipsum</h4>
              <p className='text-[#A4A4A4] font_poppins text-[14px]font-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quis veritatis.</p>
          </div>
          <div className='w-[220px] h-[220px] shadow-xl bg-[#FCFFF6] rounded-3xl p-8'>
              <h4 className='text-[#3E5C05] font_poppins text-[20px]  font-normal'>lorem ipsum</h4>
              <p className='text-[#A4A4A4] font_poppins text-[14px]font-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quis veritatis.</p>
          </div>
          <div className='w-[220px] h-[220px] shadow-xl bg-[#FCFFF6] rounded-3xl p-8'>
              <h4 className='text-[#3E5C05] font_poppins text-[20px]  font-normal'>lorem ipsum</h4>
              <p className='text-[#A4A4A4] font_poppins text-[14px]font-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quis veritatis.</p>
          </div>
        </div>
      </div>


      {/* About BTAG */}
      <div className='w-full  flex flex-wrap items-center px-10  lg:px-36 py-24 mx-auto lg:ms-5 md:pt-48'>

          <div className='flex items-center mb-4'>

            <div className='w-[30px] h-[30px] bg-[#30326B]'>
            </div>
            <h1 className='font_poppins font-semibold text-[27px] text-[#585858] ms-2'>About BTAG Global Educational Trust</h1>

          </div>

          <divs className='flex flex-wrap gap-4' >

            <div className=' w-full lg:w-1/2'>
                      <p className='font_poppins text-[#585858] leading-7 justify-start text-[18px] mb-6'>BTAG Global Educational Trust is an initiative to provide education and training by running offline programmes and institutions across India and online educational services across the Globe. <br />
              Trust Director: Mohammed Abdul Salam: Educational Consultant, CBSE Resource Person & Master Trainer, CBSE school Principal <br />
              Joint Director: Mr Biju s Pillai: CBSE school Principal <br />
                        Trustee:  Ms Bushra B.A.:CBSE school Principal</p>
              
                        <button className='px-6 py-2.5 bg-[#67A800] rounded-full text-white font_poppins font-semibold text-[18px]'>Learn More</button>
            </div>


            <img className='object-fill rounded-2xl w-[390px] h-[280px]' src={home_about} alt="" srcset="" />


          </divs>

      </div>


      {/* Founder Part */}
      <div className='w-full md:px-24 px-5'>

        <div className='bg-[#30326B] md:p-24 p-5 rounded-2xl'>

          <div className='text-white md:w-[45%] w-full '>

            <h1 className='font_poppins text-4xl font-bold mb-5'>Meet our founder</h1>
            <p className='font_poppins font-normal leading-7 mb-5'>
            “I think you're better off finding the money to hire someone than actually find a co-founder. The main reason? You probably won't find someone as passionate as you are about the organization you're building. And keep in mind, I have no clue who you are or what you're building so that's no judgment on you or the idea, just the reality I've observed over 20 years of startups.”
            </p>
            <p className='font-bold'>Jason Hound</p>
            <p className='text-[#838383] mb-8'>Founder of Trustco.</p>
            <button className='text-white font-bold font_poppins bg-[#81D002] rounded-full px-5 py-4'>
            See Team Behind Our Success
            </button>
          </div>


        </div>

      </div>

      {/* Play Button */}
      <div className='w-full h-[400px] text-white mt-24 ' style={{ backgroundImage: `url(${home_play1})`,backgroundSize:"cover",backgroundPosition: "50% 50%"}}>

       <div className='md:w-1/2  mx-auto  text-center md:pt-32 pt-20'>
          <p className='font_poppins font-bold text-[30px]'>Watch Trust Activities Video Tour</p>
          <p className='font_poppins font-normal text-[18px] text-center '>Vmply dummy text of the printing and typesetting industryorem
          Ipsum industry's standard dum an unknowramble.</p>
          <img className='w-[40px] h-[40px] mx-auto mt-2' src={homeicon} alt="" srcset="" />
       </div>

       

      </div>

      {/* Our Activities */}
      <div className='w-full md:p-20 p-7'>

        <h1 className='font_poppins text-[#30326B] font-semibold text-center md:text-[30px] text-[25px] underline md:mb-8 mb-4'>Our Activities</h1>
        <p className='text-[#747373] font-normal md:text-[22px] text-[16px] text-center  mb-8 w-4/5 mx-auto'>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
        <HomeActivities />

      </div>

      {/* Testimonials */}
      <HomeTestimonials/>







      </div>



  );
}

export default Home;
