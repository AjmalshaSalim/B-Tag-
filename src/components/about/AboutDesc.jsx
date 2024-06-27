import React from 'react'
import '../../index.css'

function AboutDesc() {
  return (
    <div className='flex justify-center items-center min-h-[700px] mx-auto container overflow-hidden'>
        <div className=' w-full min-h-[600px] flex justify-center lg:items-start items-center flex-col space-y-2 overflow-hidden mx-[40px] lg:pt-0 pt-[30px]'> 
        <div className='p-4 ' >
            <h1 className='text-[#585858] font_poppins font-semibold 2xl:text-[47px] lg:text-[40px] text-[12px] sm:text-[33px] lg:ml-[60px] '>
                <span className="underline-with-space ">About</span> BTAG Global Educational Trust
            </h1>
        </div>
        <div className='grid lg:grid-cols-2 '>
            <div className='p-4'>
                <p className='lg:ml-[60px] font_poppins font-[400px] 2xl:text-[22px] sm:text-[18px] text-[12px] leading-[30px] xl:leading-[33px] 2xl:leading-[50px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, cum explicabo. In, dolore! Cum commodi ipsam enim. Voluptas fuga repudiandae porro reprehenderit suscipit, perferendis perspiciatis voluptatum qui ut sequi ab!Loremorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, cum explicabo. In, dolore! Cum commodi ipsam en uptatum qui ut sequi ab!Loremorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, cum explicabo. In, dolo !</p>
            </div>
            <div className=' '>
                <div className=' bg-red-600 h-full w-full rounded-3xl overflow-hidden'>
                <img src='https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=600' alt='aboutImage1' className='w-full h-full' />
                </div>
                
            </div>
        </div>


           
        </div>
    </div>
  )
}

export default AboutDesc