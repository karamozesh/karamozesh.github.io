import { Dropdown, Space } from 'antd';

import caretDownIcon from '../../asset/icon/caret-down_icon.svg';

export default function CustomDropdown({
  label,
  items,
  className,
  classNameLabel,
}) {
  const menu = { items };

  return (
    <Dropdown
      menu={menu}
      className={`cursor-pointer [&>*]:bg-primaryColor font-inherit ${className}`}
      placement="bottomRight"
    >
      <Space>
        <label
          className={`cursor-pointer ${classNameLabel}`}
        >
          {label}
        </label>
        <img
          src={caretDownIcon}
          alt="caret-down"
          className="text-base"
        />
      </Space>
    </Dropdown>
  );
}
