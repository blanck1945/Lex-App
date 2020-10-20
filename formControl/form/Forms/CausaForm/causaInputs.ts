import Axios from "axios"
import { juzgadoRoutes } from "../../../../api/routes"
import { styleValues } from "../JuzgadoForm/juzgadoInputs"

export const causaInitiaValues = {
    numCausa: "",
    juzgado: "",
    autos: "",
    cliente: ""
}

const fetchJuzgados = async() => {
    const {data} = await Axios.get(juzgadoRoutes.juzgadoTodos)
}
const transformData = (data:any) => {
    const newArr:string[] = []
    data.data.map((el:any) => newArr.push(el.juzgado))
    const header = "Seleccione el Juzgado"
    newArr.unshift(header)
    return newArr
}

const options = [] || fetchJuzgados()

export const causaFormFields = [
    {
        control: "input",
        rest: {
            ...styleValues,
            name: "numCausa",
            label: "Numero de Causa",
        }
    },
    {
        control: "select",
        rest: {
            ...styleValues,
            name: "juzgado",
            label: "Juzgado",
            asyncFunc: true,
            fetchOptions: {
                url: juzgadoRoutes.juzgadoTodos,
                callback: transformData
            }
        }
    },
    {
        control: "input",
        rest: {
            ...styleValues,
            name: "autos",
            label: "Autos",
        }
    },
    {
        control: "input",
        rest: {
            ...styleValues,
            name: "cliente",
            label: "Cliente",
        }
    },
]