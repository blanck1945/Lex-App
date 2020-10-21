import Axios from "axios";

export default async function AxiosFetch(url: string, url2?: string) {
  try {
    const { data } = await Axios.get(url);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
}
