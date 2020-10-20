import * as React from "react";
import { Field, ErrorMessage } from "formik";
import Text_Error from "./Text_Error";
import { RestOptions, Tools } from "../FormInterfaces";

interface InputCompProps {
  rest: RestOptions;
  tools?: Tools;
  formik?: any;
}

const Input_Comp = ({ rest, tools, formik }: InputCompProps) => {
  const handlerInput = (e: any) => {
    formik.setFieldValue(rest.name, e.target.value);
  };


  return (
    <>
      {rest.useTools ? (
        tools.show ? (
          <div className={rest.div_class}>
            <label htmlFor={rest.name} className={rest.label_class}>
              {rest.label}
            </label>
            <Field
              id={rest.name}
              name={rest.name}
              className={rest.input_class}
              type={rest.type ? rest.type : "text"}
            />
            {rest.aclaration ? (
              <h4 className={rest.aclaration_class}>{rest.aclaration}</h4>
            ) : null}
            <ErrorMessage name={rest.name}>
              {(msg) => (
                <Text_Error error_div={rest.error_div} error_msg={msg} />
              )}
            </ErrorMessage>
          </div>
        ) : null
      ) : (
        <div className={rest.div_class}>
          <label htmlFor={rest.name} className={rest.label_class}>
            {rest.label}
          </label>
          {rest.value ? (
            <Field
              id={rest.name}
              name={rest.name}
              className={rest.input_class}
              disabled={rest.disable}
              onChange={(e: any) => handlerInput(e)}
              type={rest.type ? rest.type : "text"}
            />
          ) : (
            <Field
              id={rest.name}
              name={rest.name}
              className={rest.input_class}
              type={rest.type ? rest.type : "text"}
            />
          )}
          {rest.aclaration ? (
            <h4 className={rest.aclaration_class}>{rest.aclaration}</h4>
          ) : null}
          <ErrorMessage name={rest.name}>
            {(msg) => <Text_Error error_div={rest.error_div} error_msg={msg} />}
          </ErrorMessage>
        </div>
      )}
    </>
  );
};

export default Input_Comp;

//<ErrorMessage name={rest.name} component={Text_Error} />
