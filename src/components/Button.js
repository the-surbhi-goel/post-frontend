const Button = ({ children, classname, ...props }) => {
  return (
    <button
      {...props}
      className={`text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg px-5 py-2.5 font-medium ${classname}`}
    >
      {children}
    </button>
  );
};

export default Button;
