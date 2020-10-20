import dbConnect from "../../../db/dbConnect";
import { Models } from "../../../models";
import { getRes } from "../../../util/funcs";
import { compare } from "bcrypt";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { sign } from "jsonwebtoken";
import cookie from "cookie";

dbConnect();

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST", "PUT"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const erroMsg = "Algo fallo en la autenticación";
    const succMsg = "Usuario validado con exito";

    const registerUser = await Models.UsuarioModel.findOne({
      usuario: req.body.usuario,
    });
    if (!registerUser) {
      res.status(400).json({
        msg: erroMsg,
      });
    }

    await compare(req.body.password, registerUser.password, async function (
      err,
      result
    ) {
      if (!err && result) {
        const token = sign(
          { userID: registerUser._id, userEmail: registerUser.email },
          process.env.JWT_SECRET,
          { expiresIn: "3h" }
        );

        res.setHeader(
          "Set-Cookie",
          cookie.serialize("authCookie", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 3600 * 3,
            path: "/",
          })
        );

        res.end(succMsg);
      }
    });
  } catch (error) {
    res.status(401).end(error.message);
  }
}

/*

            //res.status(200).json({ response: { ...getRes(succMsg) } });
            /*res.status(200).send({
              succes: true,
              msg: succMsg,
            });*/

/*
      //res.status(200).json({ response: { ...getRes(succMsg) } });
          //res.status(404).json(getRes(erroMsg))*/
