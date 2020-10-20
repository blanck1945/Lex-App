import mongoose from "mongoose";

const AbogadoSchema = new mongoose.Schema(
    {
        abogado: {
            type: String,
            required: true
        },
        sexo:{
            type: String,
            required: true,
            enum: [
                "mujer",
                "hombre"
            ]
        },
        especialidad: {
            type: String,
            required: true
        },
        contacto: {
            celular: {
                type: String,
                required:true
            },   
            fijo: String,
            email: {
                type: String,
                required: true,
                trim: true
            }
        }
        },{
            timestamp: true
    }
)

export default mongoose.models.Abogado || mongoose.model("Abogado", AbogadoSchema);