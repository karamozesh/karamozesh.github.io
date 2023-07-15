const InputLabelProfile = ({
  required,
  label,
  value,
  onChange,
  className,
  isTextArea,
  innerRef,
  changeMode,
  type,
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-base">
        {label}{' '}
        {required ? (
          <span className="text-red-500">*</span>
        ) : null}
      </label>
      {isTextArea ? (
        <textarea
          value={value}
          onChange={onChange}
          ref={innerRef}
          className={`min-h-[150px] bg-gray-700 px-4 py-2 mt-2 rounded-[10px] text-sm focus:outline-gray-800 ${className}`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          ref={innerRef}
          className={`bg-gray-700 px-4 py-2 mt-2 rounded-[10px] text-sm focus:outline-gray-800 ${className}`}
        />
      )}
    </div>
  );
};

export default InputLabelProfile;
