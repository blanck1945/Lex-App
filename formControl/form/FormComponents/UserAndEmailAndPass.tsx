import Button from "../../../components/Button/Button";
import { styleValues } from "../Forms/JuzgadoForm/juzgadoInputs";
import ReactFormControl from "../ReactFormControl";

interface UserAndEmailAndPasswordProps {
  customUser?: string;
  customEmail?: string;
  customPassword?: string;
  customConfirm?: string;
  label?: string;
  form_class?: string;
  submit: any;
}

const UserAndEmailAndPassword = ({
  label,
  customUser,
  customEmail,
  customPassword,
  customConfirm,
  form_class,
  submit,
}: UserAndEmailAndPasswordProps) => {
  const initialValues = {
    user: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const capitalizeLetter = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const getPass = () => {
    if (customPassword) {
      return capitalizeLetter(customPassword);
    }

    return " Password";
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
    {
      control: "input",
      rest: {
        ...styleValues,
        name: customConfirm
          ? customConfirm + customPassword
          : "confirmPassword",
        type: "password",
        label: customConfirm
          ? capitalizeLetter(customConfirm) + " " + getPass()
          : "Confirm Password",
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
          button: <Button>{label ? label : "Register"}</Button>,
        }}
        ownComponent={true}
      />
    </div>
  );
};

export default UserAndEmailAndPassword;
