import Axios from "axios";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import ReactFormControl from "../../formControl/form/ReactFormControl";
import Header from "../Header/Header";
import { getInitialValues, getFormFields } from "./ModalInputs";
import { mutate } from "swr";
import { causaRoutes, prefix } from "../../api/routes";
import { useRouter } from "next/router";

interface ModalProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  label: string;
  control?: string;
  causaId?: number;
}

const Modal = ({ openModal, setOpenModal, label, control }: ModalProps) => {
  const [succMsg, setSuccMsg] = useState<boolean>(false);
  const router = useRouter();

  const handleModal = async (values: any) => {
    try {
      await Axios({
        method: "POST",
        url: prefix + "causas/" + control + "/" + router.query.id,
        data: values,
      });

      mutate(causaRoutes.causasTodas + "/" + router.query.id);
      setOpenModal(!openModal);
      router.push("causas" + "/" + router.query.id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={openModal ? "modal is-active is-clipped" : "modal"}>
      <div className="modal-background"></div>
      <div className="modal-content has-background-white is-bor-4 is-hm-300 ">
        <Header>{label}</Header>
        <ReactFormControl
          formInitialData={{
            intialValues: getInitialValues(control),
            submit: handleModal,
          }}
          formConfig={{
            button: (
              <button className=" mt-2 mb-4 button is-link">Agregar</button>
            ),
            formFields: getFormFields(control),
            form_class:
              "is-w-full is-flex is-dis-col is-align-center is-justify-center",
          }}
        />
      </div>
      <button
        className="modal-close is-large "
        aria-label="close"
        onClick={() => setOpenModal(false)}
      ></button>
    </div>
  );
};

export default Modal;
