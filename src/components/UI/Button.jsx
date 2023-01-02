export default function Button({
  type,
  children,
  onClick,
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="py-x bg-secondaryColor text-black rounded-3xl"
      {...props}
    >
      {children}
    </button>
  );
}
