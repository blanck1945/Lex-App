import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../db/dbConnect";
import { Models } from "../../models";
import nextConnect from "next-connect";
import CorsHandler from "./middleware/Cors";
import handler from "../../util/handler";

export default handler
  .get(async (req, res) => {
    await dbConnect();
    console.log(req.url);
    const abogados = await Models.AbogadoModel.find({});

    res.status(200).json(abogados);
  })
  .post((req, res) => {});

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
