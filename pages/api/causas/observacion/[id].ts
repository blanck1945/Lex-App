import dbConnect from "../../../../db/dbConnect";
import Causa from "../../../../models/Causa";
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
        await Causa.updateOne(
          {
            _id: id,
          },
          { $push: { observaciones: req.body } },
        );

        await Causa.updateOne(
          {
            _id: id,
          },
          { proveido: req.body.observacion } 
        );

        

        res.status(201).json(getRes({msg: "Observación agregada"}));
      } catch (err) {
        res.status(400).json(getRes(err));
      }
      break;
    case "DELETE":
      try {
        const { removeId } = req.body;
        const movimientoBorrado = await Causa.updateOne(
          { _id: id },
          { $pull: { obaservaciones: { _id: removeId } } }
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
