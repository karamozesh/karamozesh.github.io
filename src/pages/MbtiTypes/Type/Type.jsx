

import React from 'react'


export default function Type({
    typeName, 
    type , typeImg

}
    
) {
  return (
    <header className='relative  h-80'>
        <svg viewBox="0 0 1920 600" preserveAspectRatio="none" class="background h-80 absolute right-0 w-full z-10 ">
            <path d="M400 598.9l1520-152.8v164.4H0v-288z" class="st0 bg-white fill-white"></path>
            <path d="M923.4 546.3l996.6-97.4V1.5h-851z" class="st1 fill-[#88619A]"></path>
            </svg>
        <img src={typeImg} alt="" className=' absolute h-80 left-0 top-0 bottom-0'/>
        <div className='absolute  top-[40px] right-32  text-4xl  text-white z-20  text-center'>
            <span>
                شخصیت 
               </span>
               <h1 className='text-5xl p-3 font-extrabold'>{typeName}</h1>
            <div className='text-[#3A2942]'>{type}</div>
        </div>
        </header>
  )
}

