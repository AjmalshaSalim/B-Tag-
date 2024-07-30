import React, { useEffect, useRef, useState } from 'react';
import AxiosInstance from '../../Api/AxiosInstance';

const itemsPerPage = 2;

function Event() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const observer = useRef();

  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get('/event');
      console.log('API Response:', response.data); // Log the API response
      setData(response?.data.event);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='container mx-auto overflow-hidden px-4 md:px-20 m-10'>
      <h1 className='md:text-3xl sm:text-2xl text-xl font-bold mb-12 text-[#585858] underline-with-space font_poppins ml-4'>
        News & Events
      </h1>
      <div className='flex flex-col gap-10'>
        {data?.map((item, index) => (
          <div key={item.id} className='flex flex-col md:flex-row gap-4 md:gap-10 p-4'>
            {index % 2 === 0 ? (
              <>
                <div className='md:w-1/2'>
                  <div className='w-full h-[300px] overflow-hidden'>
                    <img
                      src={`https://btagglobal.com/admin/uploads/forms/${item.file}`}
                      alt={`news${item.id}`}
                      className='w-full h-full object-contain'
                    />
                  </div>
                </div>
                <div className='md:w-1/2'>
                  <h1 className='font-bold text-3xl leading-[40px] font_kufam text-[#3B3A5D]'>{item?.title}</h1>
                  <p className='text-base sm:text-md md:text-md text-[#002847] font_source_sans_3 sm:p-0 p-4 leading-6'>
                    {item?.description}
                  </p>
                  <p className='mt-4 text-[#B4B7C1]'>{item?.date}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='mt-4 inline-block bg-[#73AB3A] text-white px-4 py-2 rounded'
                    >
                      View This
                    </a>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className='md:w-1/2 order-2 md:order-1'>
                  <h1 className='font-bold text-3xl leading-[40px] font_kufam text-[#3B3A5D]'>{item?.title}</h1>
                  <p className='text-base sm:text-md md:text-md text-[#002847] font_source_sans_3 sm:p-0 p-4 leading-6'>
                    {item.description}
                  </p>
                  <p className='mt-4 text-[#B4B7C1]'>{item.date}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='mt-4 inline-block bg-[#73AB3A]  text-white px-4 py-2 rounded'
                    >
                       View This
                    </a>
                  )}
                </div>
                <div className='md:w-1/2 order-1 md:order-2'>
                  <div className='w-full h-[300px] overflow-hidden'>
                    <img
                      src={`https://btagglobal.com/admin/uploads/forms/${item.file}`}
                      alt={`news${item.id}`}
                      className='w-full h-full object-contain'
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Event;
