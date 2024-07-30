import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './institutionCards.css'; 
import  { useEffect, useState } from 'react';
import AxiosInstance from '../../Api/AxiosInstance';


function InstitutionCards() {


  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchInstitutions = async () => {
      try {
        const response = await AxiosInstance.get('/institutions');
        console.log(response.data.institutions); 
        setData(response.data.institutions);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchInstitutions();
  }, []);


const truncateContent = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + '...';
    }
    return content;
  };

  const navigate=useNavigate()

  const handleCardClick = (slug) => {
    navigate(`/card/${slug}`);
  };

  return (
  
  <div className='home-testimonials-slider xl:ml-[30px] ml-[10px] mb-6  '>
      <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={2}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000 }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
          1024: { slidesPerView: 3 },
          766: { slidesPerView: 2 },
          360: { slidesPerView: 1 },
      }}
      className=''>
          {/* card */}
          
            {data.map((data, index) => (
              <SwiperSlide key={index}    onClick={() => handleCardClick(data.slug)}>
                <div className='p-4   w-full sm:w-[300px]'>
            <div className='flex flex-col items-center'>
              <div className='w-full h-[225px] overflow-hidden'>
                <img
                  src={`https://btagglobal.com/admin/uploads/institutions/${data.images}` ? `https://btagglobal.com/admin/uploads/institutions/${data.images}`.split(',')[0] : ''} 
                  alt={data.title}
                  className='w-full h-full object-fill'
                />
              </div>
              <div className='p-4 '>
              <h1 className='lg:text-lg 2xl:text-xl sm:text-md  text-sm font-semibold mt-4 text-[#67A800] font_poppins  
                leading-6 min-h-[50px] '>{data.title}</h1>
              <p className='text-base text-[#706E6E] mt-2 font_poppins font-normal  leading-5'> {truncateContent(data.introduction, 100)}</p>
              </div>
              
            </div>
                </div>
              </SwiperSlide>
            
            ))}
     

      </Swiper>
      </div>
      
  )
}

export default InstitutionCards

