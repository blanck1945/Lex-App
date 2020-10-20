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
        console.log(req.body)
        await Causa.update(
          {
            _id: id,
          },
          { $push: { movimientos: req.body } }
        );
          await Causa.update({
            _id: id
          },{
            proveido: req.body.movimiento
          })
          console.log("temrinado el update")

        res.status(201).json(getRes({msg:"Movimiento creado con exito"}));
      } catch (err) {
        res.status(400).json(getRes(err));
      }
      break;
    case "DELETE":
      try {
        const { removeId } = req.body;
        const movimientoBorrado = await Causa.updateOne(
          { _id: id },
          { $pull: { movimientos: { _id: removeId } } }
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
