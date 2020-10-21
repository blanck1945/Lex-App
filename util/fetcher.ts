import Axios from "axios";

export default async function AxiosFetch(url: string, url2?: string) {
  const { data } = await Axios.get(url);

  return data;
}
