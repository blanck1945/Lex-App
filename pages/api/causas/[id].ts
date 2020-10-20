import dbConnect from "../../../db/dbConnect";
import Causa from "../../../models/Causa";
import Juzgado from "../../../models/Juzgado";
import { getRes } from "../../../util/funcs";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const causa = await Causa.findById(id).populate('juzgadoId').exec()
        if (!causa) {
          return res.status(400).json({ msg: "Ninguna causa con ese id" });
        }
        res.status(200).json(getRes(causa));
      } catch (err) {
        res.status(400).json(getRes(err));
      }
      break;
    case "PUT":
      try {
        const causa = await Causa.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!causa) {
          return res.status(400).json({ msg: "Ninguna causa con ese id" });
        }

        res.status(200).json(getRes(causa));
      } catch (err) {
        res.status(400).json(getRes(err));
      }
      break;
    case "DELETE":
      try {
        const causaBorrada = await Causa.deleteOne({
          _id: id,
        });

        if (!causaBorrada) {
          return res.status(400).json({ msg: "Ninguna causa con ese id" });
        }

        res.status(200).json({});
      } catch (err) {
        res.status(400).json(getRes(err));
      }
      break;
    default:
      res.status(500).json({ msg: "Problemas de servidor" });
      break;
  }
};
