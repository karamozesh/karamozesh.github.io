export default function ResumeInput({
  label,
  name,
  onChange,
  type,
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
        className="mt-2 py-2 px-4 rounded-xl bg-gray-400 focus:outline-none focus:outline-gray-500"
        onChange={onChange}
        {...props}
      />
    </div>
  );
}
