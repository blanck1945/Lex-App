import * as React from "react";

//import "./scss/Text_Error.scss";

interface TextErrorProps {
  error_div?: string;
  children?: any;
  error_msg: string;
}

const Text_Error = ({ error_div, error_msg }: TextErrorProps) => {
  return (
    <div className={error_div ? error_div : "error_text"}>{error_msg}</div>
  );
};

export default Text_Error;
