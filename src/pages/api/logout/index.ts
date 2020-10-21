import dbConnect from "../../../../db/dbConnect";
import { getRes } from "../../../util/funcs";
import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("authCookie", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: -1,
      path: "/",
    })
  );

  res.status(200).json({ msg: "Sesion terminada con exito" });

  //res.writeHead(302, { Location: '/api/login' });
  //res.end();
};

/* remove cookies from request header 
   res.setHeader('Set-Cookie', [
    serialize('mytoken1', '', {
        maxAge: -1,
        path: '/',
      }),
      serialize('mytoken2', '', {
          maxAge: -1,
          path: '/',
      }),
  ]);
  */
