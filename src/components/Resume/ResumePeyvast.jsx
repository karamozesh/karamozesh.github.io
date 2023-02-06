import { PlusCircleOutlined } from '@ant-design/icons';

const ResumePeyvast = () => {
  return (
    <div>
      <div className="flex items-center">
        <PlusCircleOutlined className="flex items-center ml-2 text-secondaryColor text-base" />
        اضافه کردن پیوست
      </div>
      <div className="flex flex-col w-full h-full p-4 mt-4 border border-gray-600 rounded-md shadow-md">
        <div className="w-full h-[50px] border-b-2 border-gray-800">
          alsdnfds
        </div>
        <textarea
          type="text"
          className="w-full h-full p-4 outline-none"
        ></textarea>
      </div>
    </div>
  );
};

export default ResumePeyvast;
