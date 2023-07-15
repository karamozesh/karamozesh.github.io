import margaret from '../../../images/margaret.svg';
import './style.css';

export default function PersonTypes({
  img1,
  name1,
  img2,
  name2,
  img3,
  name3,
  img4,
  name4,
}) {
  return (
    <div className="relative mx-auto mt-20">
      <section className="bg-[#F2F3F4] celebrities p-5 text-xl text-[#545C6D]">
        <p className="text-center text-2xl p-8">
          فرماندهانی که ممکن است آنها را بشناسید
        </p>
        <div className="flex gap-5 justify-evenly items-center p-10 flex-wrap">
          <div className="flex flex-col gap-4 justify-center items-center">
            <img
              src={img1}
              alt=""
              className="  w-52 h-52"
            />
            <h1 className=" text-base"> {name1}</h1>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <img
              src={img2}
              alt=""
              className="w-52 h-52"
            />
            <h1 className=" text-base"> {name2}</h1>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <img
              src={img3}
              alt=""
              className=" w-52 h-52"
            />
            <h1 className=" text-base"> {name3}</h1>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <img
              src={img4}
              alt=""
              className="  w-52 h-52"
            />
            <h1 className=" text-base"> {name4}</h1>
          </div>
        </div>
      </section>
    </div>
  );
}
