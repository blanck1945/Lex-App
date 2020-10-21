import { verify } from "jsonwebtoken"
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"

const failAuth = "Error - Authentication Failure"

export const AutenthicateUser = (fn:NextApiHandler) => async(req:NextApiRequest, res:NextApiResponse)  => {
    verify(req.cookies.authCookie!, process.env.JWT_SECRET, async function(err, decoded){
      if(!err && decoded){
        return await fn(req,res)
      }

      res.status(401).json({msg: failAuth})
    })
  }