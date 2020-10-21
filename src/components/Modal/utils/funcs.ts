import { prefix } from "../../../../api/routes";

export const getPostUrl = (control: string, id: number) => {
  return prefix + "causas/" + control + "/" + id;
};
