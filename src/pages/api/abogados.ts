import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../db/dbConnect";
import AbogadoModel from "../../../models/Abogados";
import Cors from "cors";
import initMiddleware from "../../util/middleware";
import { Models } from "../../../models";

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    methods: ["GET", "POST"],
  })
);

export default async function RouteHandler(req, res) {
  await cors(req, res);
  dbConnect();
  const abogados = await Models.AbogadoModel.find();

  console.log(abogados);
  res.status(200).json(abogados);
}

/*export default handler
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    await dbConnect();
    console.log(req.url);
    const abogados = await Models.AbogadoModel.find({});

    res.status(200).json(abogados);
  })
  .post((req, res) => {});


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
