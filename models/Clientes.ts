import mongoose from "mongoose"

const ContactoSchema = new mongoose.Schema({
    telefono_fijo: {
        type: String,
    },
    celular: {
        type: String,
        required:true,
    }
})

const ClienteSchema = new mongoose.Schema({
    cliente_nombre:{
        type: String,
        required: true
    },
    cliente_direccion: {
        type: String,
        required:true
    },
    cliente_contacto: ContactoSchema,
    cliente_causa: mongoose.Schema.Types.ObjectId,
    creadoPor: {
        type: String,
        required: true
    }
})

export default mongoose.models.Cliente || mongoose.model("Cliente", ClienteSchema);
