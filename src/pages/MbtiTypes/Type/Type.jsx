import React from 'react';

export default function Type({
  typeName,
  type,
  color,
  typeImg,
}) {
  let colorType;
  if (
    type === 'ESFP-A / ESFP-T' ||
    type === 'ESTP-A / ESTP-T' ||
    type === 'ISFP-A / ISFP-T' ||
    type === 'ISTP-A / ISTP-T'
  ) {
    colorType = '#D8A537';
  } else if (
    type === 'ESFJ-A / ESFJ-T' ||
    type === 'ESTJ-A / ESTJ-T' ||
    type === 'ISFJ-A / ISFJ-T' ||
    type === 'ISTJ-A / ISTJ-T'
  ) {
    colorType = '#4298B4';
  } else if (
    type === 'ENFP-A / ENFP-T' ||
    type === 'ENFJ-A / ENFJ-T' ||
    type === 'INFP-A / INFP-T' ||
    type === 'INFJ-A / INFJ-T'
  ) {
    colorType = '#33A474';
  } else if (
    type === 'ENTP-A / ENTP-T' ||
    type === 'ENTJ-A / ENTJ-T' ||
    type === 'INTP-A / INTP-T' ||
    type === 'INTJ-A / INTJ-T'
  ) {
    colorType = '#88619a';
  }
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
          class={`st1 fill-[${colorType}]`}
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
        <div
          className={`text-[${color}]`}
          style={{ color: colorType }}
        >
          {type}
        </div>
      </div>
    </header>
  );
}
