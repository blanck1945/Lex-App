import dbConnect from "../../../db/dbConnect";
import { Models } from "../../../models";
import CorsHandler from "./middleware/Cors";
import handler from "../../util/handler";

const animes = [
  {
    anime: "HunterxHunter",
    puntaje: "9.13",
  },
  {
    anime: "Bang!Dream",
    putanje: "7.45",
  },
];

export default handler
  .get(async (req, res) => {
    console.log(req.url);
    console.log("Using this route");
    res.status(200).json(animes);
  })
  .post((req, res) => {});
