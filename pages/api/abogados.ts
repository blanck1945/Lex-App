import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../db/dbConnect";
import { Models } from "../../models";

export default async function getAbogados(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const abogados = await Models.AbogadoModel.find({});

  res.status(200).json(abogados);
}

/*
  case "POST":
      Models.AbogadoModel.create(req.body)
        .then((abogado) =>
          res.status(201).json({ msg: "Abogado creado con exito" })
        )
        .catch((err) => console.log(err));
      break;
    default:
      res.status(400).json({ msg: "no Match" });
      break;*/
