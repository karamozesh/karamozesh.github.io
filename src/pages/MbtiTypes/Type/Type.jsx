import React from 'react';

export default function Type({
  typeName,
  type,
  color,
  typeImg,
}) {
  return (
    <header className="relative h-80">
      <div className="absolute -top-[1.5px] z-20 right-0 bg-black-900 h-1 w-[44.3%]"></div>
      <svg
        viewBox="0 0 1920 600"
        preserveAspectRatio="none"
        class="background h-80 absolute right-0 w-full z-10"
      >
        <path
          d="M400 598.9l1520-152.8v164.4H0v-288z"
          class="st0 bg-white fill-white"
        ></path>
        <path
          d="M923.4 546.3l996.6-97.4V1.5h-851z"
          class={`st1 fill-[${color}]`}
        ></path>
      </svg>
      <img
        src={typeImg}
        alt=""
        className=" absolute border-5 border-red-400 h-80 left-0 top-0 bottom-0"
      />
      <div className="absolute  top-[40px] right-32  text-3xl  text-white z-20  text-center">
        <span>تایپ شخصیت شما :</span>
        <h1 className="text-5xl p-3 font-extrabold mb-2">
          {typeName}
        </h1>
        <div className="text-secondaryColor">
          {type}
        </div>
      </div>
    </header>
  );
}
