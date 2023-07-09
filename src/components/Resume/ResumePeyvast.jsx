import { PlusCircleOutlined } from '@ant-design/icons';
import { useRef, useState } from 'react';

const ResumePeyvast = ({
  onChange,
  onClick,
  innerRef,
  placeholder,
}) => {
  const [message, setMessage] = useState(null);

  const valueRef = useRef(null);

  const clickHandler = () => {
    const value = valueRef.current.value;
    // simple validation
    if (value.trim().length < 5) {
      setMessage({
        text: 'پیوست باید بیشتر از 4 حرف باشد!',
        type: 'error',
      });
      return;
    }
    onClick(value);
    setMessage({
      text: 'پیوست اضافه شد.',
      type: 'message',
    });
    valueRef.current.value = '';
  };

  return (
    <div>
      <div className="flex flex-col w-full h-[200px] p-4 border border-gray-600 rounded-md shadow-md">
        {/* <div className="w-full h-[50px] border-b-2 border-gray-800">
          alsdnfds
        </div> */}
        <textarea
          type="text"
          ref={valueRef}
          placeholder={
            placeholder ??
            'هر چی دوست داری بنویس...'
          }
          className="w-full h-full outline-none resize-none placeholder:text-gray-500"
        ></textarea>
      </div>
      <div
        className="flex items-center mt-4 cursor-pointer"
        onClick={clickHandler}
      >
        <PlusCircleOutlined className="flex items-center ml-2 text-secondaryColor text-base" />
        اضافه کردن پیوست
      </div>
      {message && (
        <span
          className={`inline-block mt-4 ${
            message.type === 'error'
              ? 'text-red-500'
              : 'text-greenColor'
          }`}
        >
          {message.text}
        </span>
      )}
    </div>
  );
};

export default ResumePeyvast;
