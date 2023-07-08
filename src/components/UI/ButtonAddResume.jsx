import { PlusSquareOutlined } from '@ant-design/icons';

const ButtonAddResume = ({ onClick }) => {
  return (
    <button
      className="flex justify-center items-center w-full p-2 border-[3px] rounded-md border-gray-900 text-gray-500 border-dashed"
      onClick={onClick}
    >
      <PlusSquareOutlined className="text-secondaryColor rounded-md ml-4" />
      افزودن
    </button>
  );
};

export default ButtonAddResume;
