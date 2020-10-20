import Button from "../../../components/Button/Button";
import { styleValues } from "../Forms/JuzgadoForm/juzgadoInputs";
import { formatData } from "../funcs";
import ReactFormControl from "../ReactFormControl";

interface EmailAndPassword {
  customEmail?: string;
  customPassword?: string;
  label?: string;
  form_class?: string;
  submit: any;
}

const EmailAndPassword = ({
  label,
  customEmail,
  customPassword,
  form_class,
  submit,
}: EmailAndPassword) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const capitalizeLetter = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const formFields = [
    {
      control: "input",
      rest: {
        ...styleValues,
        type: "email",
        name: customEmail ? customEmail : "email",
        label: customEmail ? capitalizeLetter(customEmail) : "Email",
      },
    },
    {
      control: "input",
      rest: {
        ...styleValues,
        name: customPassword ? customPassword : "password",
        type: "password",
        label: customPassword ? capitalizeLetter(customPassword) : "Password",
      },
    },
  ];

  return (
    <div>
      <ReactFormControl
        formInitialData={{
          intialValues: initialValues,
          submit: submit,
        }}
        formConfig={{
          formFields: formFields,
          form_class: form_class
            ? form_class
            : "container has-background-light is-flex is-dis-col is-align-center",
          button: <Button>{label ? label : "Login"}</Button>,
        }}
        ownComponent={true}
      />
    </div>
  );
};

export default EmailAndPassword;
