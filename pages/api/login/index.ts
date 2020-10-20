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

  switch (method) {
    case "POST":
      try {
        const registerUser = await Models.UsuarioModel.findOne({
          usuario: req.body.usuario,
        });
        //res.status(200).json({ response: { ...getRes(succMsg) } });
        //res.end();
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
                secure: process.env.NODE_ENV !== "development" ? true : false,
                sameSite: "strict",
                maxAge: 3600 * 3,
                path: "/",
              })
            );
            console.log("we reach to the response");
            //res.status(200).json({ response: { ...getRes(succMsg) } });
            return res.status(200).json({
              succes: true,
              msg: succMsg,
            });
          }

          res.status(200).json({
            succes: true,
            msg: succMsg,
          });
          //res.status(200).json({ response: { ...getRes(succMsg) } });
          //res.status(404).json(getRes(erroMsg))
        });
      } catch (err) {
        console.log(err);
        res.status(404).json({
          succes: false,
          data: err,
        });
      }
  }
};
