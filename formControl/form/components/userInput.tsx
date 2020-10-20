import * as React from "react";
import { Field } from "formik";

interface UserInputProps {
  label: string;
  name: string;
}

const UserInput = ({ label, name }: UserInputProps) => {
  return (
    <div>
      <label>{label}</label>
      <Field type="checkbox" placeholder="Custom Input" name={name} />
    </div>
  );
};

export default UserInput;

//{`${values.toggle}`}//
