import dbConnect from "../../../../../db/dbConnect";
import Causa from "../../../../../models/Causa";
import { getRes } from "../../../../util/funcs";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "POST":
      try {
        const causa = await Causa.updateOne(
          {
            _id: id,
          },
          { $push: { vencimientos: req.body }, proveido: req.body.vencimiento }
        );

        res.status(201).json(getRes(causa));
      } catch (err) {
        res.status(400).json(getRes(err));
      }
      break;
    case "DELETE":
      try {
        const { removeId } = req.body;
        const movimientoBorrado = await Causa.updateOne(
          { _id: id },
          { $pull: { vencimientos: { _id: removeId } } }
        );

        if (!movimientoBorrado) {
          return res.status(400).json({ msg: "Ningun movimiento con ese ID" });
        }

        res.status(200).json(getRes({ msg: "Movimiento Borrado con exito" }));
      } catch (err) {
        res.status(400).json(getRes(err));
      }
  }
};
