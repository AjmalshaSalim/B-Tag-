import React from 'react';

const dummyData = [
  {
    id: 1,
    name: "Cert IV in Leadership & Management",
    description: "Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country ...",
    imageUrl: "https://thecharitycfo.com/wp-content/uploads/2022/05/24.png"
  },
  {
    id: 2,
    name: "Cert IV in Digital Marketing and Communication",
    description: "Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country ...",
    imageUrl: "https://thecharitycfo.com/wp-content/uploads/2022/05/24.png"
  },
  {
    id: 3,
    name: "Cert IV Hospitality",
    description: "Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country ...",
    imageUrl: "https://thecharitycfo.com/wp-content/uploads/2022/05/24.png"
  }
];

const HomeActivities = () => (
  <div className='w-full flex flex-wrap items-center justify-center  gap-11'>
    {dummyData.map((item) => (
      <div key={item.id} className='w-[300px] h-[340px] relative'>
        <img src={item.imageUrl} alt={item.name} className='w-full h-1/2 object-cover ' />
        <h4 className='text-[#67A800] font_poppins text-[18px] font-semibold mt-4 px-3'>{item.name}</h4>
        <p className='text-[#706E6E] font_poppins text-[13px] font-normal mt-2 absolute bottom-4 px-3 '>{item.description}</p>
      </div>
    ))}
  </div>
);

export default HomeActivities;
