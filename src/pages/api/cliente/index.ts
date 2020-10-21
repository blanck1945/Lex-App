import dbConnect from "../../../../db/dbConnect";
import Cliente from "../../../../models/Clientes";
import Causa from "../../../../models/Causa";
import { getRes } from "../../../util/funcs";
import { AutenthicateUser } from "../middleware/Auth";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const clientes = await Cliente.find({});

        res.status(200).json(getRes(clientes));
      } catch (err) {
        res.status(400).json(getRes(err));
      }
      break;
    case "POST":
      try {
        const causa = await Causa.findOne({
          autos: req.body.causa.toString(),
        });

        const newCliente = {
          ...req.body,
          causa: causa._id,
        };

        await Cliente.create(newCliente);

        res.status(200).json({ msg: "Cliente creado con exito" });
      } catch (err) {
        res.status(400).json(getRes(err));
      }
      break;
  }
};
