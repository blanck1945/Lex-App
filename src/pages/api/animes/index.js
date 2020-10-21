import { animes } from "../../../util/animes"

export default function handler(req, res) {
    res.status(200).json(animes)
}
