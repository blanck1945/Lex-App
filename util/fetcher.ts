import Axios from "axios";

export default async function AxiosFetch(url: string) {
  const { data } = await Axios(url);

  return data;
}
