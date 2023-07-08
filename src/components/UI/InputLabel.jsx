const InputLabel = ({
  text,
  onChange,
  placeholder,
  type,
  innerRef,
  dir,
  role
,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={text}
        className="text-bold text-xs"
      >
        {text}
      </label>
      <input
        className="bg-[#ECEBEB] placeholder-gray-800 rounded-full text-[12px] px-2 text-left p-2"
        
        type={type}
        dir="ltr"
        name={text}
        placeholder={placeholder}
        onChange={onChange}
        ref={innerRef}
        autoComplete="off"
        role={role}
        
        // {...props}
      />
    </div>
  );
};

export default InputLabel;
