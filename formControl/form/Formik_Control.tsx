import * as React from "react";
import Input_Comp from "./components/Input_Comp";
import Text_Area from "./components/Text_Area";
import Select_Comp from "./components/Select";

//import "./Form_Comp.scss";
import { FormFieds, RestOptions, Tools } from "./FormInterfaces";
import Amount_Input from "./components/Amount_Input";
import Input_State from "./components/Input_State";
import File_Input from "./components/File";
import CustomField from "./components/CustomField";
import Radio from "./components/Radio";

interface FormikControlProps extends FormFieds {
  formik?: any;
  tools: Tools;
}

const Formik_Control = ({
  control,
  rest,
  formik,
  tools,
  styles,
}: FormikControlProps) => {
  switch (control) {
    case "input":
      return <Input_Comp rest={rest} tools={tools} formik={formik} />;
    case "inputState":
      return <Input_State rest={rest} formik={formik} tools={tools} />;
    case "file":
      return <File_Input rest={rest} formik={formik} tools={tools} />;
    case "text":
      return <Text_Area rest={rest} tools={tools} formik={formik} />;
    case "select":
      return <Select_Comp rest={rest} tools={tools} formik={formik} />;
    case "amount":
      return <Amount_Input rest={rest} tools={tools} />;
    case "radio":
      return <Radio rest={rest} formik={formik} styles={styles} />;
    case "custom":
      return <CustomField component={rest.component} tools={tools} />;
    default:
      return null;
  }
};

export default Formik_Control;
