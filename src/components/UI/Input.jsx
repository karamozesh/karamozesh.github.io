export default function Input({
  type,
  placeholder,
  onChange,
  ...props
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      dir="auto"
      onChange={onChange}
      className="bg-gray-700 rounded-3xl px-4 py-8"
    />
  );
}
