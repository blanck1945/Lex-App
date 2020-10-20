import * as React from "react";
import { Formik, Form } from "formik";
import Formik_Control from "./Formik_Control";
//import "./Form_Comp.scss";
import { FormFieds } from "./FormInterfaces";

interface FormInitialData {
  intialValues?: any;
  validationSchema?: any;
  submit?: Function;
}

interface FormConfig {
  formFields?: FormFieds[];
  button?: any;
  reset?: boolean;
  form_class?: string;
}

interface FormDataProps {
  formInitialData: FormInitialData;
  formConfig: FormConfig;
  ownComponent?: boolean;
}

const ReactFormControl = ({
  formInitialData,
  formConfig,
  ownComponent,
}: FormDataProps) => {
  const [show, setShow] = React.useState<boolean>(false);
  const tools = {
    show,
    setShow,
  };

  return (
    <Formik
      initialValues={formInitialData.intialValues}
      validationSchema={formInitialData.validationSchema}
      onSubmit={async (values: any, { resetForm }) => {
        if (ownComponent) {
          const result = await formInitialData.submit(values);
          if (result) {
            resetForm();
          }
        } else {
          await formInitialData.submit(values);
          resetForm();
        }
      }}
    >
      {(formik) => {
        return (
          <Form className={formConfig.form_class}>
            {formConfig.formFields.map((el: FormFieds, index: number) => (
              <Formik_Control
                key={index}
                control={el.control}
                rest={el.rest}
                formik={formik}
                tools={tools}
                styles={el.styles}
              />
            ))}
            <div>{formConfig.button}</div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ReactFormControl;
