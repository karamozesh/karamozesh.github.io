export default function ResumeInput({
  label,
  name,
  onChange,
  type,
  className,
  placeholder,
  ...props
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        placeholder={placeholder}
        type={type}
        className={`mt-2 py-2 px-4 rounded-xl bg-gray-400 focus:outline-none focus:outline-gray-500 placeholder-gray-800 ${className}`}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}
