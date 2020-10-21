import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../db/dbConnect";
import Causa from "../../../../models/Causa";
import Juzgado from "../../../../models/Juzgado";
import { getRes } from "../../../util/funcs";
import { AutenthicateUser } from "../middleware/Auth";

dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  //Variables
  const populateVar = "juzgadoId";
  const noJuzgadoWithThatID = "Ningun juzgado con ese ID";
  const movimientoDefault = "Inicio de la Demanda";

  switch (method) {
    case "GET":
      try {
        const causas = await Causa.find({}).populate(populateVar).exec();

        res.status(200).json(getRes(causas));
      } catch (err) {
        res.status(400).json(getRes(err));
      }
      break;
    case "POST":
      try {
        const juzgado = await Juzgado.findOne({
          juzgado: req.body.juzgado,
        });
        if (!juzgado) {
          return res.status(400).json({
            msg: noJuzgadoWithThatID,
          });
        }
        const jsDay = new Date();

        const causa = {
          ...req.body,
          juzgadoId: juzgado._id.toString(),
          movimientos: [
            {
              fecha:
                jsDay.getFullYear() +
                "-" +
                jsDay.getMonth() +
                "-" +
                jsDay.getDate(),
              movimiento: movimientoDefault,
            },
          ],
          observaciones: [
            {
              fecha:
                jsDay.getDate() +
                "-" +
                jsDay.getMonth() +
                "-" +
                jsDay.getFullYear(),
              observacion: "Causa a cargo de la Dra Spano",
            },
          ],
          vencimientos: [],
        };

        await Causa.create(causa);
        res.status(201).json(getRes({ msg: "Causa creada con exito" }));
      } catch (err) {
        res.status(400).json(getRes(err));
      }
      break;
    default:
      res.status(400).json({ msg: "no Match" });
      break;
  }
};

/*
{
    "numCausa": "1544/38",
    "juzgado": "Civil y Comercial - 16",
    "juzgadoId": "5f8a1d421558b14380afd4f5",
    "autos": "Hilda Guerrero contra Anses por pagos adeudados",
    "cliente": ["Hilda Guerrero"],
    "movimientos": {
        "fecha": "14-10-2020",
        "movimiento": "Presentación de la demanda"
    },
    "observaciones":{
        "fecha": "15-10-2020",
        "observación": "Reunión con Hilda en el estudio"
    },
    "vencimientos": {
        "fecha": "14-10-2020",
        "fechaVencimiento": "24-10-2020",
        "vencimiento": "Plazo para presentar el cargo"
    }
}*/

/*
{
  "numCausa": "4578/25",
  "juzgado": "Juzgado Civil Nro. 8",
  "autos": "Gamarra Federica contra Horacio Vazquez",
  "cliente": "Gamara Federica",
  "inicioDemanda": "16-9-2020",
  "juzgadoId": "5f8a33f2449b3220180738e8",
  "movimientos": [],
  "observaciones": [],
  "vencimientos": []
}*/
