import Button from "../../../components/Button/Button";
import { styleValues } from "../Forms/JuzgadoForm/juzgadoInputs";
import { formatData } from "../funcs";
import ReactFormControl from "../ReactFormControl";

interface UserAndPasswordProps {
  customUser?: string;
  customPassword?: string;
  label?: string;
  form_class?: string;
  submit: any;
}

const UserAndPassword = ({
  label,
  customUser,
  customPassword,
  form_class,
  submit,
}: UserAndPasswordProps) => {
  const initialValues = {
    user: "",
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
        name: customUser ? customUser : "user",
        label: customUser ? capitalizeLetter(customUser) : "User",
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

export default UserAndPassword;
