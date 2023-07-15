import React from 'react';

function SliderSlide({ img, comment }) {
  return (
    <div className="w-[80%] h-full flex flex-col items-center justify-center md:flex-row">
      <figure className="w-[200px] h-[200px] ml-4">
        <img
          src={img}
          alt=""
          className="w-[100px] h-[100px]"
        />
      </figure>

      <p className='w-[calc(100%-100px)]'>{comment}</p>
    </div>
  );
}

export default SliderSlide;
