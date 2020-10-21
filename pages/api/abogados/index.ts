import dbConnect from "../../../db/dbConnect";
import { Models } from "../../../models";
import Abogado from "../../../models/Abogados";
import { getRes } from "../../../util/funcs";
import { AutenthicateUser } from "../middleware/Auth";

dbConnect();

export default async function getData(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      const abogados = await Models.AbogadoModel.find({});

      res.status(200).send(getRes(JSON.parse(JSON.stringify(abogados))));
      break;
    case "POST":
      Models.AbogadoModel.create(req.body)
        .then((abogado) =>
          res.status(201).json({ msg: "Abogado creado con exito" })
        )
        .catch((err) => console.log(err));
      break;
    default:
      res.status(400).json({ msg: "no Match" });
      break;
  }
}
