import * as React from "react";
import { RestOptions, Tools } from "../FormInterfaces";
import { Field } from "formik";

interface FileInputProps {
  rest: RestOptions;
  formik: any;
  tools?: Tools;
}

const File_Input = ({ rest, formik, tools }: FileInputProps) => {
  const handlerFile = (e: any) => {
    formik.setFieldValue("event_img", e.target.files[0].name);
  };

  const [fileType, setFileType] = React.useState<boolean>(true);

  return (
    <div className={rest.div_class}>
      <label htmlFor={rest.name} className={rest.label_class}>
        {rest.label}
      </label>
      {fileType ? (
        <input type="file" name={rest.name} onChange={(e) => handlerFile(e)} />
      ) : (
        <Field
          type="text"
          name={rest.name}
          id={rest.name}
          className={rest.input_class}
        />
      )}
      {rest.swapFile ? (
        <span
          className={rest.btn_class ? rest.btn_class : "default"}
          onClick={() => setFileType(!fileType)}
        >
          Cambiar tipo de upload
        </span>
      ) : null}
    </div>
  );
};

export default File_Input;

/*
  value={formik.values.event_img}
        onChange={(e: any) => formik.setFieldValue(e.target.value)}*/
