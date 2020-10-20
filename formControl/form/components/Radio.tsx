import * as React from "react";
import { Field, ErrorMessage } from "formik";
import Text_Error from "./Text_Error";
import { RestOptions, StylesOptions, Tools } from "../FormInterfaces";

interface RadioProps {
  rest: RestOptions;
  styles: StylesOptions;
  formik: any;
}

const Radio = ({ rest, formik, styles }: RadioProps) => {
  return (
    <div className={rest.div_class}>
      <label className={rest.label_class}>{rest.label}</label>
      <div className={styles.radio_class}>
        <Field name={rest.name} className={rest.input_class}>
          {({ field }) => {
            return rest.radioOptions.map((option: any, index: number) => {
              return rest.singleDiv ? (
                <div className={styles.singleDiv_class} key={index}>
                  <input
                    type="radio"
                    id={option.value}
                    {...field}
                    className={styles.radioInput_class}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                  <label
                    className={styles.labelInput_class}
                    htmlFor={option.value}
                  >
                    {option.key}
                  </label>
                </div>
              ) : (
                <>
                  <input
                    key={index}
                    type="radio"
                    id={option.value}
                    className={styles.radioInput_class}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                  <label
                    className={styles.labelInput_class}
                    htmlFor={option.value}
                  >
                    {option.key}
                  </label>
                </>
              );
            });
          }}
        </Field>
      </div>
      <ErrorMessage name={rest.name} component={Text_Error} />
    </div>
  );
};

export default Radio;
