import React from 'react';

function SliderSlide({
  img,
  comment,
  name,
  feature,
}) {
  return (
    <div className="w-[80%] h-full flex flex-col md:flex-row">
      <figure className="w-[200px] h-[200px] ml-4 rounded-full overflow-hidden">
        <img
          src={img}
          alt=""
          className="w-[100px] h-[100px] bg-cover rounded-md"
        />
      </figure>

      <div className="flex flex-col w-[calc(100%-100px)] text-right">
        <h4 className="text-2xl mb-4">
          {name}{' '}
          <p className="inline-block text-base">
            درباره{' '}
            <span className="text-primaryColor">
              {feature}
            </span>{' '}
            میگه:
          </p>
        </h4>
        <p className="text-center">{comment}</p>
      </div>
    </div>
  );
}

export default SliderSlide;
