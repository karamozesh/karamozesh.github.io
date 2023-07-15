export default function Button({
  type,
  children,
  onClick,
  className,
  innerRef,
  ...props
}) {
  return (
    <button
      type={type}
      ref={innerRef}
      onClick={onClick}
      className={`py-2 px-4 bg-secondaryColor text-black rounded-3xl cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
