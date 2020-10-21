import { abogadosRoutes } from "../../../api/routes";
import { styleValues } from "../../../formControl/form/Forms/JuzgadoForm/juzgadoInputs";

export const getInitialValues = (control: string) => {
  switch (control) {
    case "movimiento":
      return modalInitialValues;
    case "observacion":
      return observacionInitialValues;
    case "vencimiento":
      return vencimientoInitialValues;
  }
};

export const getFormFields = (control: string) => {
  switch (control) {
    case "movimiento":
      return movimientoFields;
    case "observacion":
      return observacionFields;
    case "vencimiento":
      return vencimientoFields;
  }
};

export const observacionInitialValues = {
  fecha: "",
  observacion: "",
  creadoPor: "",
};

export const vencimientoInitialValues = {
  fecha: "",
  fechaVencimiento: "",
  vencimiento: "",
  creadoPor: "",
};

export const modalInitialValues = {
  fecha: "",
  movimiento: "",
  creadoPor: "",
};

const transformData = (data: any) => {
  const newArr: string[] = [];
  data.data.map((el: any) => newArr.push(el.abogado));
  const header = "Seleccione el Abogado";
  newArr.unshift(header);
  return newArr;
};

const generalInput = {
  control: "select",
  rest: {
    ...styleValues,
    name: "creadoPor",
    label: "Creado Por",
    asyncFunc: true,
    fetchOptions: {
      url: abogadosRoutes.abogadosTodos,
      callback: transformData,
    },
  },
};

export const movimientoFields = [
  {
    control: "input",
    rest: {
      ...styleValues,
      type: "date",
      name: "fecha",
      label: "Fecha",
    },
  },
  {
    control: "text",
    rest: {
      ...styleValues,
      div_class: "text_div",
      input_class: "text_input",
      name: "movimiento",
      label: "Movimiento",
    },
  },
  generalInput,
];

export const observacionFields = [
  {
    control: "input",
    rest: {
      ...styleValues,
      type: "date",
      name: "fecha",
      label: "Fecha",
    },
  },
  {
    control: "text",
    rest: {
      ...styleValues,
      div_class: "text_div",
      input_class: "text_input",
      name: "observacion",
      label: "Observación",
    },
  },
  generalInput,
];

export const vencimientoFields = [
  {
    control: "input",
    rest: {
      ...styleValues,
      type: "date",
      name: "fecha",
      label: "Fecha",
    },
  },
  {
    control: "input",
    rest: {
      ...styleValues,
      type: "date",
      name: "fechaVencimiento",
      label: "Fecha de Vencimiento",
    },
  },
  {
    control: "text",
    rest: {
      ...styleValues,
      div_class: "text_div",
      input_class: "text_input",
      name: "vencimiento",
      label: "Vencimiento",
    },
  },
  generalInput,
];
