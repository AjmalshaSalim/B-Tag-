import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import './institutioncard.css'; 
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AxiosInstance from '../../Api/AxiosInstance';

const truncateText = (text, limit) => {
  return text.split(' ').length > limit 
    ? text.split(' ').slice(0, limit).join(' ') + '...' 
    : text;
};

function InstitutionCards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await AxiosInstance.get('/institutions');
        console.log(response.data.institutions); 
        setData(response.data.institutions);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchEvents();
  }, []);


  return (
    <div className='home-institution-slider py-10 px-7 md:px-16 bg-[#84AB3A26] relative'>
      <h1 className='text-center font_poppins font-semibold text-xl sm:text-2xl lg:text-3xl underline underline-offset-8 mb-10'>
        List of Establishments
      </h1>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={3}
        navigation
        autoplay={{ delay: 2000 }}
        breakpoints={{
          1024: { 
            slidesPerView: 3,
            spaceBetween: -75
          },
          766: { 
            slidesPerView: 2,
            spaceBetween: -50 
          },
          360: { 
            slidesPerView: 1,
            spaceBetween: 0 
          },
        }}
        className='flex items-center justify-evenly '>
        {data.map((data, index) => (
          <SwiperSlide key={index} >
            <div className='p-4 mx-auto w-[270px] md:w-[300px] h-[420px] md:h-[500px] bg-slate-100'>
              <div className='w-full h-[225px] overflow-hidden'>
                <img
                  src={`https://btagglobal.com/admin/uploads/institutions/${data.images}` ? `https://btagglobal.com/admin/uploads/institutions/${data.images}`.split(',')[0] : ''} 
                  alt={data.title}
                  className='w-full h-full rounded-xl'
                />
               
              </div>
              <p className='font_poppins font-semibold text-[14px] md:text-[16px] mt-4 leading-6 ms-1'>{data.title}</p>
              <p className='font_poppins text-[#4D4A4A] text-[14px]  w-[270px] absolute bottom-[77px] ms-1'>
                <LocationOnIcon className='text-[#578d01] font-medium'/>{truncateText(data.address, 10)}
              </p>
              {/* <p className='text-[14px] w-[270px] text-justify text-[#505050] mt-2 font_poppins font-normal leading-5 absolute bottom-[85px]'>
                {truncateText(data.introduction, 24)}
              </p> */}
              <Link to={`/card/${data.slug}`}>
                <button className='font_poppins font-medium text-[15px] px-10 py-1 bg-[#578d01] rounded-lg absolute bottom-[20px] ms-[58px]'>
                  See more
                </button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default InstitutionCards;




