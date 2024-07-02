import React from 'react'
import { Link } from 'react-router-dom';

const data = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur, a\\',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus. Dolore sapiente dolorem pariatur id ipsa obcaecati quod aperiam, neque nesciunt suscipit rerum et repudiandae? Non provident quae omnis tempora. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias amet, sint commodi nihil necessitatibus at molestias deleniti recusandae reprehenderit veniam atque inventore non dolores saepe provident corrupti vitae suscipit! Eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum officia qicabo officiis culpa dolorum expedita minus veniam? dolor sit amet consec',
      date: '27.0.2020',
      imageUrl: 'https://images.pexels.com/photos/7550581/pexels-photo-7550581.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      title: 'Another news title here',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus. Dolore sapiente dolorem pariatur id ipsa obcaecati quod aperiam, neque nesciunt suscipit rerum et repudiandae? Non provident quae omnis tempora. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias amet, sint commodi nihil necessitatibus at molestias deleniti recusandae reprehenderit veniam atque inventore non dolores saepe provident corrupti vitae suscipit! Eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum officia qicabo officiis culpa dolorum expedita minus veniam? elit. Nullam in dui mauris. dolor sit amet consectetur adipisicing elit. Illum officia qicabo officiis culpa dolorum expedita minus veniam',
      date: '15.1.2021',
      imageUrl: 'https://images.pexels.com/photos/3810795/pexels-photo-3810795.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      title: 'Third news title',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus. Dolore sapiente dolorem pariatur id ipsa obcaecati quod aperiam, neque nesciunt suscipit rerum et repudiandae? Non provident quae omnis tempora. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias amet, sint commodi nihil necessitatibus at molestias deleniti recusandae reprehenderit veniam atque inventore non dolores saepe provident corrupti vitae suscipit! Eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum officia qicabo officiis culpa dolorum expedita minus veniam?t dolor sit amet consectetur adipisicing elit. Illum officia qicabo officiis culpa dolorum expedita minus veniam.',
      date: '03.3.2022',
      imageUrl: 'https://images.pexels.com/photos/6457562/pexels-photo-6457562.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 4,
      title: 'Fourth news title',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus. Dolore sapiente dolorem pariatur id ipsa obcaecati quod aperiam, neque nesciunt suscipit rerum et repudiandae? Non provident quae omnis tempora. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias amet, sint commodi nihil necessitatibus at molestias deleniti recusandae reprehenderit veniam atque inventore non dolores saepe provident corrupti vitae suscipit! Eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum officia qicabo officiis culpa dolorum expedita minus veniam?etus. dolor sit amet consectetur adipisicing elit. Illum officia qicabo officiis culpa dolorum expedita minus veniam',
      date: '12.4.2023',
      imageUrl: 'https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

function NewsSection() {

    const truncateContent = (content, maxLength) => {
        if (content.length > maxLength) {
          return content.substring(0, maxLength) + '...';
        }
        return content;
      };
    
  return (
    <div>
        <div className='py-2 mt-[12px]'>
            <h1 className='md:text-3xl sm:text-2xl text-xl font-bold mb-12  text-[#585858] underline-with-space font_poppins '>More News</h1>
        </div>


        <div className='flex lg:flex-row flex-col gap-[120px] '>
            
            {data.slice(0,2).map((each,index)=>(
                <Link to={'/newsandevents'}>
                    <div className='lg:w-[400px] 2xl:w-[600px] w-full  overflow-hidden  ' key={index} >
                    <img 
                        src={each.imageUrl}
                        alt="Sample Image" 
                        className='w-full object-cover'
                    />
                    <div className='min-h-[70px] py-2 mt-[10px]'>
                    <h1 className='font-bold  text-lg sm:text-xl mb-2 text-[#3B3A5D] font_kufam '>{each.title}</h1>
                    </div>
                     
                        <p className=' text-base text-[#949191] font_poppins font-normal'>
                        {truncateContent(each.content, 200)}
                        </p>
                    
                    </div>
                </Link>
                
            ))}
       

        </div>
    </div>
  )
}

export default NewsSection