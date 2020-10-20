import { styleValues } from "../JuzgadoForm/juzgadoInputs"

export const abogadosInitialValues = {
    abogado: "",
    especialidad: "",
    celular: "",
    fijo: "",
    email: ""
}



export const abogadoFields = [
    {
        control: "input",
        rest: {
            ...styleValues,
            label: "Abogado",
            name: "abogado"
        }
    },
    {
        control: "radio",
        rest: {
            ...styleValues,
            singleDiv: true,
            name: "sexo",
            radioOptions: [
                {
                    key: "Mujer",
                    value: "mujer"
                },
                {
                    key: "Hombre",
                    value: "hombre"
                }
            ]
        },
        styles: {
            radioInput_class: " mr-2 ",
            labelInput_class: "is-bold",
            radio_class: "is-flex  is-align-center is-justify-evenly",
            singleDiv_class: "px-4 is-flex-is-justify-evenly is-align-center ",
        }   
    },
    {
        control: "select",
        rest: {
            ...styleValues,
            label: "Especialidad",
            name: "especialidad",
            options: [
                "Seleccione una especialidad",
                "Civil",
                "Comercial",
                "Laboral",
                "Penal",
                "Otros"
            ]
        }
    },
    {
        control: "input",
        rest: {
            ...styleValues,
            label: "Celular",
            name: "celular"
        }
    },
    {
        control: "input",
        rest: {
            ...styleValues,
            label: "Numero Fijo",
            name: "fijo"
        }
    },
    {
        control: "input",
        rest: {
            ...styleValues,
            label: "Email",
            name: "email"
        }
    }
]
