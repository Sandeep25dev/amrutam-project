const Tags = ({
  children,
  varient = "primary",
}: {
  children: string;
  varient: "primary" | "outlined";
}) => {
  return (
    <span
      className={`${
        varient === "outlined"
          ? "bg-transparent border-gray-300 border-2 cursor-pointer"
          : "bg-gray-100"
      } text-gray-700 text-sm font-semibold px-4 py-2 rounded-full`}
    >
      {children}
    </span>
  );
};

export default Tags;
