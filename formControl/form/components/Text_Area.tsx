import * as React from "react";
import { Field, ErrorMessage } from "formik";
import Text_Error from "./Text_Error";
import { RestOptions, Tools } from "../FormInterfaces";

interface TextAresProps {
  rest: RestOptions;
  tools?: Tools;
  formik?: any;
}

const Text_Area = ({ rest, tools, formik }: TextAresProps) => {
  return (
    <div className={rest.div_class}>
      <label className={rest.label_class} htmlFor={rest.name}>
        {rest.label}
      </label>
      <Field
        id={rest.name}
        name={rest.name}
        as="textarea"
        className={rest.input_class}
      />
      <ErrorMessage name={rest.name} component={Text_Error} />
    </div>
  );
};

export default Text_Area;
