import dbConnect from "../../../db/dbConnect";
import { Models } from "../../../models";
import { getRes } from "../../../util/funcs";
import {hash} from "bcrypt"

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch(method){
        case "POST":
            hash(req.body.password, 10, async function(err, hash){
                const nuevoUsuario = {
                    ...req.body,
                    password: hash
                }

                Models.UsuarioModel.create(nuevoUsuario)
                .then(() => res.status(201).json({msg: "Usuario registrado con exito"}))
                .catch(err => res.status(400).json(getRes(err))) 
            })
    }
}