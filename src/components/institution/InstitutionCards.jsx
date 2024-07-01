import React from 'react'
import { useNavigate } from 'react-router-dom'

  
const cardData = [
    {
      id:1,
      imageUrl: 'https://images.pexels.com/photos/6457579/pexels-photo-6457579.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Cert IV in Leadership & Management ', 
      description: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country... ',
    },
    {
      id:2,
      imageUrl: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Cert IV in communication & Digital Marketing ',
      description: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country ...',
    },
    {
      id:3,
      imageUrl: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Cert IV Hospitality ',
      description: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country ...',
    },
    
  ];

function InstitutionCards() {

  const navigate=useNavigate()

  const handleCardClick = (id) => {
    navigate(`/card/${id}`);
  };

  return (
    <div className='container mx-auto flex justify-center items-center py-4 mb-[40px] '>

      {/* card */}
    <div className='flex flex-wrap justify-between gap-[70px]'>
      {cardData.map((card, index) => (
        <div key={index} className='flex-grow'   onClick={() => handleCardClick(card.id)}>
          <div className='p-4 bg-white  w-full sm:w-[300px]'>
      <div className='flex flex-col items-center'>
        <div className='w-full h-[200px] overflow-hidden'>
          <img
            src={card.imageUrl}
            alt={card.title}
            className='w-full h-full object-cover'
          />
        </div>
        <div className='p-4 '>
        <h1 className='lg:text-lg 2xl:text-xl sm:text-md  text-sm font-semibold mt-4 text-[#67A800] font_poppins  
          leading-6 min-h-[50px] '>{card.title}</h1>
        <p className='text-base text-[#706E6E] mt-2 font_poppins font-normal  leading-5'>{card.description}</p>
        </div>
        
      </div>
    </div>
        </div>
      ))}
    </div>


  </div>
  )
}

export default InstitutionCards