import mongoose from "mongoose";
import Juzgado from "./Juzgado"


const MovimientoSchema = new mongoose.Schema({
  fecha: {
    type: String,
    required: true,
  },
  movimiento: {
    type: String,
    required: true,
  },
  creadoPor: {
    type: String,
    enum: [
      "Dra Vanessa Spano",
      "Dr Emilio Bavastro"
    ]
  },
})

const ObservacionesSchema = new mongoose.Schema({
  fecha: {
    type: String,
    required: true,
  },
  observacion: {
    type: String,
    required: true,
  },
  creadoPor: {
    type: String,
    enum: [
      "Dra Vanessa Spano",
      "Dr Emilio Bavastro"
    ]
  },
})

const VencimientosSchema = new mongoose.Schema({
  fecha: {
    type: String,
    required: true,
  },
  fechaVencimiento: {
    type: String,
    required: true,
  },
  vencimiento: {
    type: String,
    required: true,
  },
  estado: {
    type: Boolean,
    required: true,
    default: true,
  },
  creadoPor: {
    type: String,
    enum: [
      "Dra Vanessa Spano",
      "Dr Emilio Bavastro"
    ]
  },
})

const CausaSchema = new mongoose.Schema(
  {
    numCausa: {
      type: String,
      required: [true, "El numero de causa es necesario"],
      unique: true,
    },
    juzgado: {
      type: String,
      trim: true,
      required: [true, "El numero de juzgado es necesario"],
    },
    juzgadoId: { type: mongoose.Schema.Types.ObjectId, ref: "Juzgado" },
    autos: {
      type: String,
      required: [true, "El campo autos es requerido"],
    },
    cliente: {
      type: [String],
      required: true,
    },
    inicioDemanda: {
      type: String,
    },
    proveido: {
      type: String,
      default: "Inicio de la Demanda"
    },
    llevadaPor: {
      type: String,
      enum: [
        "Dra Vanessa Spano",
        "Dr Emilio Bavastro"
      ]
    },
    movimientos: {type: [MovimientoSchema]},
    observaciones: {type: [ObservacionesSchema]},
    vencimientos: {type: [VencimientosSchema]},
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Causa || mongoose.model("Causa", CausaSchema);
