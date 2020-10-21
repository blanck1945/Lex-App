import { Children } from "react";

const Header = ({ children }) => {
  return (
    <h2 className="font-size-6 is-flex is-align-center is-justify-center mt-2 is-bold">
      {children}
    </h2>
  );
};

export default Header;
