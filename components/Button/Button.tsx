const Button = ({ children }) => {
  return (
    <button
      type="submit"
      className="button has-background-judicial has-text-white my-4 "
    >
      {children}
    </button>
  );
};

export default Button;
