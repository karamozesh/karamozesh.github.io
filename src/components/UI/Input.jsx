export default function Input({
  type,
  placeholder,
  onChange,
  className,
  defaultValue,
  value,
  ...props
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      dir="auto"
      onChange={onChange}
      value={value}
      defaultValue={defaultValue}
      className={`bg-gray-700 rounded-3xl px-4 py-2 focus:outline-gray-800 ${className}`}
    />
  );
}
