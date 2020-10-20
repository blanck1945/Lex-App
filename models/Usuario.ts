import mongoose from "mongoose"

const jsDay = new Date()

const UsuarioSchema = new mongoose.Schema({
    usuario: {
        type: String,
        required:true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minLength: 6
    },
    creado: {
        type: String,
        default: jsDay.getFullYear() + "-"+ jsDay.getMonth() + "-"+ jsDay.getDate()
    }
})

export default mongoose.models.Usuario ||
  mongoose.model("Usuario", UsuarioSchema);