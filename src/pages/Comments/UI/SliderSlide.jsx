import React from 'react'

function SliderSlide({
    img,
    comment
}) {
  return (
   

        <div className='flex gap-5 p-16'>
                <figure className='w-[60px ] h-[60px]'>
                <img src={img} alt=""  className='w-[60px] h-[60px]' />
                </figure>
            
                <p >{comment}</p>
            </div>

  )
}

export default SliderSlide