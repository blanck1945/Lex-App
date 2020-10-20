import * as React from "react";
import { RestOptions, Tools } from "../FormInterfaces";
import { Field, ErrorMessage } from "formik";
import Text_Error from "./Text_Error";
import Input_Comp from "./Input_Comp";

interface InputStateProps {
  rest: RestOptions;
  formik: any;
  tools?: Tools;
}

const Input_State = ({ rest, formik, tools }: InputStateProps) => {
  return (
    <>
      {rest.useTools ? (
        tools.show ? (
          <div className={rest.div_class}>
            <label htmlFor={rest.name} className={rest.label_class}>
              {rest.label}
            </label>
            <Field
              as="select"
              id={rest.name}
              name={rest.name}
              className={rest.input_class}
            >
              {rest.options.map((el: string) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
            </Field>
            <ErrorMessage name={rest.name}>
              {(msg) => (
                <Text_Error error_div={rest.error_div} error_msg={msg} />
              )}
            </ErrorMessage>
            {formik.values.event_discount === rest.options[0] ? null : (
              <Input_Comp rest={rest.subRest} />
            )}
          </div>
        ) : null
      ) : (
        <div className={rest.div_class}>
          <label htmlFor={rest.name} className={rest.label_class}>
            {rest.label}
          </label>
          <Field
            as="select"
            id={rest.name}
            name={rest.name}
            className={rest.input_class}
          >
            {rest.options.map((el: string) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </Field>
          <ErrorMessage name={rest.name}>
            {(msg) => <Text_Error error_div={rest.error_div} error_msg={msg} />}
          </ErrorMessage>
          {formik.values.event_discount === rest.options[0] ? null : (
            <Input_Comp rest={rest.subRest} />
          )}
        </div>
      )}
    </>
  );
};

export default Input_State;
