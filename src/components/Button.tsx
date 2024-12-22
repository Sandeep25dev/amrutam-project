interface ButtonProps {
  children: string;
  variant?: "primary" | "secondary";
  classname?: string;
}

const Button = ({
  children,
  variant = "primary",
  classname = "",
}: ButtonProps) => {
  const baseStyles = `rounded-lg font-semibold focus:outline-none focus:ring px-4 py-2`;
  const variants = {
    primary: `bg-primary-200 ease-in-out duration-300 text-white hover:bg-[#3A643B85]/70 hover:border-primary-200`,
    secondary:
      "border-2 border-primary-200 text-primary-200 ease-in-out duration-300 hover:bg-[#3A643B85]/20",
  };
  return (
    <button className={`${baseStyles} ${variants[variant]} ${classname}`}>
      {children}
    </button>
  );
};

export default Button;
