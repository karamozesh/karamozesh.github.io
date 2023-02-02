import { Link, Outlet } from 'react-router-dom';

export default function ResumeCreating() {
  return (
    <div className="flex flex-col main resume">
      <h1 className="mb-4">رزومه جدید</h1>
      <Outlet />
      <div className="flex self-end">
        <button className="max-w-[200px] ml-4 px-8 py-2 mt-6 rounded-xl shadow-xl bg-secondaryColor">
          بازگشت
        </button>
        <button className="max-w-[200px]  px-8 py-2 mt-6 rounded-xl shadow-xl bg-secondaryColor">
          ذخیره و ادامه
        </button>
      </div>
    </div>
  );
}

const resumeCretingLoader = () => {
  return null;
};

export { resumeCretingLoader };
