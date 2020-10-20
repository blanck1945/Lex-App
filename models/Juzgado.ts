import mongoose from "mongoose";

const JuzgadoSchema = new mongoose.Schema(
  {
    fuero: {
      type: String,
      enum: [
        "Consejo de la Magistratura",
        "Justicia Nacional Electoral",
        "Jurado de Enjuiciamiento de Magistrados de la Nación",
        "Fuerons con Competencia en todo el país",
        "Fueros Nacionales",
        "Fueros Federales",
      ],
    },
    justicia: {
      type: String,
      enum: [
        "Justicia Nacional en lo Comercial",
        "Justicia Nacional del Trabajo",
        "Justicia Nacional en lo Civil",
        "Justicia Nacional en lo Criminal y Correcional",
      ],
    },
    camara: {
      type: String,
      enum: ["Cámara Nacional de Apleaciones en lo Civil", "Juzgados"],
    },
    juzgado: {
      type: String,
      required: true,
    },
    jurisdiccion: {
      type: String,
      default: "Ciudad Autonoma de Buenos Aires",
    },
    direccion: {
      type: String,
      required: true,
    },
    telefono: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    juez: {
      type: String,
      required: true,
    },
    secretaria: [
      {
        tipo: {
          type: String,
        },
        direccion: {
          type: String,
          required: true,
        },
        telefono: {
          type: String,
          required: true,
        },
        secretario: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timeStamps: true,
  }
);

export default mongoose.models.Juzgado ||
  mongoose.model("Juzgado", JuzgadoSchema);


//5f89b27f4281b11cd02895e0