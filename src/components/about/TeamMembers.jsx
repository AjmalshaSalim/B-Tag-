import React from 'react'
import GalleryTeam from './GalleryTeam';
import icon from '../../assets/abouticon.png'

function TeamMembers() {
 
  return (
    <div className=' mx-auto container overflow-hidden '>


        <div className='min-h-[100px] p-6 lg:mt-[0px] mt-[20px] '>
            <h1 className='text-[#585858] font_poppins font-semibold  2xl:text-[38px] lg:text-[35px] text-[12px] sm:text-[30px] md:ml-[120px] ml-[40px]  '>Meet the TEAM</h1>
        </div>

<div className='px-[60px]'>
        <div className=' min-h-[800px] border-[1px] border-[#9C9797]  '>
           <div className='  mx-[100px] pt-[60px] mb-[50px]  '> 
            <p className='ml-[50px] text-black font_poppins text-[18px] font-light'>
            lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur libero, dolorem beatae eaque a aperiam reprehenderit iusto architecto neque asperiores vitae delectus distinctio ad atque id iure blanditiis alias perferendis?  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur libero, dolorem beatae eaque a aperiam reprehenderit iusto architecto neque asperiores vitae delectus distinctio ad atque id iure blanditiis alias perferendis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur libero, dolorem beatae eaque a aperiam reprehenderit iusto architecto neque asperiores vitae delectus distinctio ad atque id iure blanditiis alias perferendis?
            </p>
              
           </div>
           <div className=' mx-[100px]  flex justify-center items-center '>
                <GalleryTeam/>
           </div>
        </div>
        </div>

        <div className='min-h-[200px] flex justify-center items-center'>
       <img
        width="50"
        height="50"
        src={icon}
        alt="circled-left-2"
        className="w-12 h-12 transition-transform transform hover:scale-110"
      />
        </div>



    </div>
  )
}

export default TeamMembers