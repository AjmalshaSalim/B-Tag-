import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AxiosInstance from '../../Api/AxiosInstance';
import { Link } from 'react-router-dom';

function NewsSection() {
  const [data, setData] = useState([]);
  const { slug } = useParams();
  console.log(slug);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await AxiosInstance.get(`/institution/${slug}`);
        console.log(response.data.events);
        setData(response.data.events);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvents();
  }, [ slug]);

  const truncateContent = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + '...';
    }
    return content;
  };

  return (
    <div>
      <div className='py-2 mt-[12px]'>
        <h1 className='md:text-3xl sm:text-2xl text-xl font-bold mb-12 text-[#585858] underline-with-space font_poppins'>More News</h1>
      </div>

      <div className='flex lg:flex-row flex-col gap-[120px] flex-wrap'>
        {data.slice(0, 100).map((event, index) => (
          <Link to={'/newsandevents'} key={index}>
            <div className='lg:w-[340px] w-full overflow-hidden'>
              <img
                src= {`https://btagglobal.com/admin/uploads/forms/${event.file}` }
                alt="Sample Img"
                className='w-full object-cover'
              />
              <div className='min-h-[70px] py-2 mt-[10px]'>
                <h1 className='font-bold text-lg sm:text-xl mb-2 text-[#3B3A5D] font_kufam'>{event.title}</h1>
              </div>
              <p className='text-base text-[#949191] font_poppins font-normal'>
                {truncateContent(event.description, 200)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NewsSection;


