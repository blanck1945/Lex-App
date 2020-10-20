import dbConnect from "../../../db/dbConnect";
import Juzgado from "../../../models/Juzgado";
import { getRes } from "../../../util/funcs";
import { AutenthicateUser } from "../middleware/Auth";

dbConnect();

export default AutenthicateUser(async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const juzgado = await Juzgado.find({});
        res.status(200).json(getRes(juzgado));
      } catch (err) {
        res.status(400).json(getRes(err));
      }
      break;
    case "POST":
      try {
        await Juzgado.create(req.body);

        res.status(201).json(getRes({msg: "Juzgado creado con exito"}));
      } catch (err) {
        res.status(400).json(getRes(err));
      }
      break;
  }
});

/*
{    
    "fuero": "Fueros Nacionales",
  "justicia": "Justicia Nacional en lo Civil",
  "camara": "Juzgados",
  "direccion": "Lavalle 1220, PISO TERCERO (C1048AAF)",
  "telefono": "4379-1265",
  "email": "jncivil8@pjn.gov.ar",
  "juez": "Dra. Cordoba, Lucila Ines",
  "secretaria": [
    {
      "tipo": "Única",
      "direccion": "Lavalle 1220, PISO TERCERO (C1048AAF)",
      "telefono": "4379-1263",
      "secretario": "Dra. María Victoria, Ordoñez"
    }
  ]
}

*/