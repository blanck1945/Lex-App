import dbConnect from "../../../db/dbConnect";
import { Models } from "../../../models";
import Abogado from "../../../models/Abogados";
import { getRes } from "../../../util/funcs";
import { AutenthicateUser } from "../middleware/Auth";

dbConnect();

export default async (req, res) => {
    const {method} = req

    switch(method){
        case "GET":
            try{
                const abogados = await Abogado.find({})

                res.status(200).json(getRes(abogados))
            }
            catch(err){
                res.status(400).json(getRes(err))
            }
            break;
            case "POST":
                    Models.AbogadoModel.create(req.body)
                    .then(abogado => res.status(201).json({msg: "Abogado creado con exito"}) )
                    .catch(err =>console.log(err)) 
                break;
                default:
                    res.status(400).json({ msg: "no Match" });
                    break;
    }
}