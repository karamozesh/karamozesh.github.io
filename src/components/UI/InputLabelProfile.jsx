const InputLabelProfile = ({
  required,
  label,
  value,
  onChange,
  className,
  innerRef,
  changeMode,
}) => {
  return (
    <div className="flex flex-col">
      <label>
        {label}{' '}
        {required ? (
          <span className="text-red-500">*</span>
        ) : null}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={`bg-gray-700 px-4 py-2 mt-2 rounded-[10px] text-sm focus:outline-gray-800 ${className}`}
      />
    </div>
  );
};

export default InputLabelProfile;
