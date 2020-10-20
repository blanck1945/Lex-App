import dbConnect from "../../../db/dbConnect";
import { Models } from "../../../models";
import { getRes } from "../../../util/funcs";
import { compare } from "bcrypt";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { sign } from "jsonwebtoken";
import cookie from "cookie";

dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  const erroMsg = "Algo fallo en la autenticación";
  const succMsg = "Usuario validado con exito";

  if (method === "POST") {
    const registerUser = await Models.UsuarioModel.findOne({
      usuario: req.body.usuario,
    });
    //res.status(200).json({ response: { ...getRes(succMsg) } });
    //res.end();
    console.log(registerUser);
    if (!registerUser) {
      res.status(400).json({
        msg: erroMsg,
      });
    }

    await compare(req.body.password, registerUser.password, async function (
      err,
      result
    ) {
      console.log(result);
      if (!err && result) {
        const token = sign(
          { userID: registerUser._id, userEmail: registerUser.email },
          process.env.JWT_SECRET,
          { expiresIn: "3h" }
        );
        console.log(token);

        res.setHeader(
          "Set-Cookie",
          cookie.serialize("authCookie", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 3600 * 3,
            path: "/",
          })
        );

        res.status(200).json({ response: { ...getRes(succMsg) } });
      } else {
        res.status(404).json({ msg: err });
      }
    });

    //res.status(404).json(getRes(erroMsg))
  } else {
    res.status(400).json({ msg: "No Request" });
  }
};
