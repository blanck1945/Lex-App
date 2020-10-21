import dbConnect from "../../../../db/dbConnect";
import { getRes } from "../../../util/funcs";
import { AutenthicateUser } from "../middleware/Auth";

dbConnect();

export default AutenthicateUser(async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json(getRes({ msg: "Usuario Autenticado" }));
  }
});
