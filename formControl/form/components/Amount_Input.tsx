import * as React from "react";
import { RestOptions, Tools } from "../FormInterfaces";
import { Field, ErrorMessage, FieldArray, Form } from "formik";
import Text_Error from "./Text_Error";

interface AmountInputProps {
  rest: RestOptions;
  tools?: Tools;
}

const Amount_Input = ({ rest, tools }: AmountInputProps) => {
  const [num, setNum] = React.useState<number>(0);

  const createFields = () => {
    let el;
    const numberArr: number[] = [];
    for (el = 0; el < num; el++) {
      numberArr.push(el);
    }
    return (
      <>
        <FieldArray
          name={rest.name}
          render={(arrHelpers) => (
            <>
              {numberArr.map((el: number, index: number) => (
                <div key={el} className={rest.amount_div_class}>
                  <label className={rest.label_class}>
                    {rest.amount_label + " " + (el + 1)}
                  </label>
                  <Field
                    type={rest.input_type ? rest.input_type : "text"}
                    name={rest.amount_label + el}
                    id={rest.amount_label + el}
                    className={rest.input_class}
                  />
                </div>
              ))}
            </>
          )}
        />
      </>
    );
  };

  return (
    <>
      {rest.useTools ? (
        tools.show ? (
          <div className={rest.div_class}>
            <div className={rest.div_amount}>
              <label htmlFor={rest.name} className={rest.label_class}>
                {rest.label}
              </label>
              <Field
                name={rest.amountName}
                className={rest.input_class}
                value={num}
                onChange={(e: any) => setNum(e.target.value)}
              />
            </div>
            {createFields()}
            <ErrorMessage name={rest.name}>
              {(msg) => (
                <Text_Error error_div={rest.error_div} error_msg={msg} />
              )}
            </ErrorMessage>
          </div>
        ) : null
      ) : (
        <div className={rest.div_class}>
          <div className={rest.div_amount}>
            <label htmlFor={rest.name} className={rest.label_class}>
              {rest.label}
            </label>
            <Field
              name={rest.amountName}
              className={rest.input_class}
              value={num}
              onChange={(e: any) => setNum(e.target.value)}
            />
          </div>
          {createFields()}
          <ErrorMessage name={rest.name}>
            {(msg) => <Text_Error error_div={rest.error_div} error_msg={msg} />}
          </ErrorMessage>
        </div>
      )}
    </>
  );
};

export default Amount_Input;
