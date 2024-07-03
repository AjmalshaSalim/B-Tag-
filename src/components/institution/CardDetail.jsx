import React from 'react'
import { useParams } from 'react-router-dom';
import eduicon from '../../assets/eduicon.png'
import NewsSection from './NewsSection';

const cardData = [
  {
    id: 1,
    imageUrl: 'https://images.pexels.com/photos/6457579/pexels-photo-6457579.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Cert IV in Leadership & Management  ',
    introduction: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country  A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country... ',
    description: "Lorem ipsum dolor sit amet consectetur. Purus rhoncus feugiat pellentesque vel eget aliquet egestas non dignissim.In convallis platea mi habitansim.In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel t.\n\nVelitsim.In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel  a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor.\n\nHendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesqsim.In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel ue tempor id. Commodo molestieinteger vel sed eleifend.",
    address: '123 Leadership St, Management City, LM 12345,Management City, LM 12345',
    phone:'7657980976',
    email:"Btag@gmail.com"
  },
  {
    id: 2,
    imageUrl: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Cert IV in Communication  ',
    introduction: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country  ...',
    description: "Lorem ipsum dolor sit amet consectetur. Purus rhoncus feugiat pellentesque vel eget aliquet egestas non dignissim.In convallis platea mi habitansim.In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel t.\n\nVelitsim.In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel  a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor.\n\nHendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesqsim.In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel ue tempor id. Commodo molestieinteger vel sed eleifend.",
    address: '456 Marketing Blvd, Communication Town, CD 45678',
     phone:'7657980976',
    email:"Btag@gmail.com"
  },
  {
    id: 3,
    imageUrl: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Cert IV in Hospitality ',
    introduction: 'SSeparated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country  A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country......',
    description: "Lorem ipsum dolor sit amet consectetur. Purus rhoncus feugiat pellentesque vel eget aliquet egestas non dignissim.In convallis platea mi habitansim.In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel t.\n\nVelitsim.In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel  a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor.\n\nHendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesqsim.In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel ue tempor id. Commodo molestieinteger vel sed eleifend.",
    address: '789 Hospitality Ave, Hotel City, HP 78910',
     phone:'7657980976',
    email:"Btag@gmail.com"
  },
  {
    id: 4,
    imageUrl: 'https://images.pexels.com/photos/14031189/pexels-photo-14031189.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Cert IV in Hospitality ',
    introduction: 'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country  A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country...',
    description: "Lorem ipsum dolor sit amet consectetur. Purus rhoncus feugiat pellentesque vel eget aliquet egestas non dignissim.In convallis platea mi habitansim.In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel t.\n\nVelitsim.In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel  a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor.\n\nHendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesqsim.In convallis platea mi habitant. Velit a at dictum commodo lacus fermentum. Lorem erat in dolor cursus sollicitudinin dignissim consectetur sit. A ac neque habitant aenean tortor. Hendrerit tempor mattis nunc enim enim. Nulla sitmassa lectus urna. Donec vivamus pretium sapien eget posuere pellentesque tempor id. Commodo molestieinteger vel ue tempor id. Commodo molestieinteger vel sed eleifend.",
    address: '1011 Hospitality St, Resort Town, HP 10112',
     phone:'7657980976',
    email:"Btag@gmail.com"
  },
];



function CardDetail() {

    const {id}=useParams()
    const card=cardData.find((each) => each.id === parseInt(id))
    const paragraphs = card.description?.split('\n\n');



  return (
    <div className='overflow-hidden  px-[50px]  ' >
       <div className='md:px-[100px] px-[10px] py-[50px] '>


          <div className='mb-[20px]'>
            <h1 className='text-[#376409] font_poppins font-semibold lg:text-3xl  sm:text-xl text-sm  lg:leading-[50px] md:leading-10 sm:leading-8 leading-6'>{card.title}</h1>
          </div>
          
           <div
            className="h-[300px] overflow-hidden  mb-[20px] bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${card.imageUrl})` }}
          >
            {/* Your content here */}

           
            {/* <img 
              src={card.imageUrl} 
              alt={card.title} 
              className='object-cover w-full h-full'
            /> */}
          </div>


              {/* card */}
              <div className=' md:p-6 p-2  '>
                <div className='flex lg:flex-row flex-col   justify-center items-center lg:px-[100px] sm:px-[10px] px-[10px]  gap-4  '>

               <div className='card bg-[#67A800] shadow-md rounded-md p-4 sm:w-[300px] w-full lg:h-[220px] h-[250px] mx-auto'>
                      <div className='flex justify-center overflow-hidden'>
                        <img src={eduicon} alt='icon' className='w-12 h-12 mb-4' />
                      </div>
                      <h2 className='text-xl font-semibold mb-2 text-center text-white font_poppins'>Address</h2>
                      <p className=' text-center text-white font_poppins'>{card.address}</p>
               </div>

               <div className='card bg-[#67A800] shadow-md rounded-md p-4 sm:w-[300px] w-full h-[220px] mx-auto'>
                      <div className='flex justify-center'>
                        <img src={eduicon} alt='icon' className='w-12 h-12 mb-4' />
                      </div>
                      <h2 className='text-xl font-semibold mb-2 text-center text-white font_poppins'>Contact</h2>
                      <p className=' text-center text-white font_poppins mb-2'>{card.email}</p>
                      <p className=' text-center text-white font_poppins'>{card.phone}</p>
               </div>

               {/* <div className='card bg-[#67A800] shadow-md rounded-md p-4 w-[200px] mx-auto'>
                      <div className='flex justify-center'>
                        <img src={eduicon} alt='icon' className='w-12 h-12 mb-4' />
                      </div>
                      <h2 className='text-xl font-semibold mb-2 text-center text-white font_poppins'>Time</h2>
                      <p className=' text-center text-white font_poppins'>This is a sample description for the card.</p>
               </div> */}

                </div>

              </div>

              <div className=' py-[20px]'>
            <p className='text-[#949191] text-base sm:text-lg lg:text-xl font_poppins '>{card.introduction}</p>
          </div>

          <div className='mt-[30px]'>
          {paragraphs?.map((paragraph, index) => (
          <p key={index} className='text-[#949191] font_poppins font-normal mb-4'>
          {paragraph}
       
        </p>
         ))}
          </div>

          {/* line */}

          <hr className='mx-auto mt-10 opacity-40 w-full border-t border-[#9C9797]' />

        {/* news section */}
        <NewsSection/>

       </div>
    </div>
  )
}

export default CardDetail