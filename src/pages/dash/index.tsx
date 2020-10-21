import { GetServerSideProps } from "next";
import React from "react";
import HomeDis from "../../components/Home-dis/HomeDis";
import ValidationUser from "../../components/validatationUser/ValidationUser";
import dbConnect from "../../../db/dbConnect";
import { CausaInterface } from "../../../Interfaces/Causa";
import Causa from "../../../models/Causa";

interface HomeProps {
  causa: CausaInterface[];
}

const Home = ({ causa }: HomeProps) => {
  return (
    <div className="pt-4">
      <HomeDis label="Causas" causas={causa} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  await dbConnect();
  const {
    req: { method },
  } = ctx;

  switch (method) {
    case "GET":
      const causa = await Causa.find({});
      return {
        props: {
          causa: JSON.parse(JSON.stringify(causa)),
        },
      };
  }
};

export default Home;
