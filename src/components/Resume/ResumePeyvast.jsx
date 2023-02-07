import { PlusCircleOutlined } from '@ant-design/icons';

const ResumePeyvast = ({
  onChange,
  onClick,
  innerRef,
}) => {
  return (
    <div>
      <div className="flex flex-col w-full h-full p-4 border border-gray-600 rounded-md shadow-md">
        {/* <div className="w-full h-[50px] border-b-2 border-gray-800">
          alsdnfds
        </div> */}
        <textarea
          onChange={onChange}
          type="text"
          ref={innerRef}
          className="w-full h-full p-4 outline-none"
        ></textarea>
      </div>
      <div className="flex items-center mt-4">
        <PlusCircleOutlined
          className="flex items-center ml-2 text-secondaryColor text-base"
          onClick={onClick}
        />
        اضافه کردن پیوست
      </div>
    </div>
  );
};

export default ResumePeyvast;
