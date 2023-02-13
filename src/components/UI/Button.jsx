export default function Button({
  type,
  children,
  onClick,
  className,
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-2 px-4 bg-secondaryColor text-black rounded-3xl ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
