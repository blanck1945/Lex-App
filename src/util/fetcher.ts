import Axios from "axios";

const baseURL = "http://localhost:3000";

export default async function AxiosFetch(url: string, url2?: string) {
  try {
    const res = await Axios.get(baseURL + url);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
}
