
export const juzgadoInitialValues = {
    fuero: "Fueros Nacionales",
    justicia: "",
    camara: "",
    juzgado: "",
    direccion: "",
    telefono: "",
    email:"",
    juez: "",
    tipo: "Única",
    direccionSecretaria: "",
    telefonoSecretaria: "",
    secretario: "",
}


export const styleValues = {
    div_class: "input_div",
    input_class: "input",
    error_div: "error_msg",
}

export const juzgadoFields = [
    {
        control: "input",
        rest: {
            ...styleValues,
            name: "fuero",
            label: "Fuero",
            value: "disable",
            disable: true
        }
    },
    {
        control: "select",
        rest: {
            ...styleValues,
            name: "justicia",
            label: "Justicia",
            options: [
                "Justicia Nacional en lo Comercial",
                "Justicia Nacional del Trabajo",
                "Justicia Nacional en lo Civil",
                "Justicia Nacional en lo Criminal y Correcional",
            ]
        }
    },
    {
        control: "select",
        rest: {
            ...styleValues,
            name: "camara",
            label: "Camara",
            options: [
                "Cámara Nacional de Apleaciones en lo Civil", "Juzgados"
            ]
        }
    },
    {
        control: "input",
        rest: {
            ...styleValues,
            name: "juzgado",
            label: "Juzgado",
        }
    },
    {
        control: "input",
        rest: {
            ...styleValues,
            name: "direccion",
            label: "Dirección",
        }
    },
    {
        control: "input",
        rest: {
            ...styleValues,
            name: "telefono",
            label: "Telefono",
        }
    },
    {
        control: "input",
        rest: {
            ...styleValues,
            name: "email",
            label: "Email",
        }
    },
    {
        control: "input",
        rest: {
            ...styleValues,
            name: "juez",
            label: "Juez"
        }
    },
    {
        control: "input",
        rest: {
            ...styleValues,
            name: "tipo",
            label: "Unicá",
            value: "disable",
            disable: true
        }
    },
    {
        control: "input",
        rest: {
            ...styleValues,
            name: "direccionSecretaria",
            label: "Dirección Secretaria"
        }
    },
    {
        control: "input",
        rest: {
            ...styleValues,
            name: "telefonoSecretaria",
            label: "Telefono Secretaria"
        }
    },
    {
        control: "input",
        rest: {
            ...styleValues,
            name: "secretario",
            label: "Secretariao"
        }
    },
   
]