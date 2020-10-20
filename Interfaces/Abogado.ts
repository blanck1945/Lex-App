export interface AbogadoInterface{
    abogado: String,
    especialidad: String;
    contacto: ContactoInterface
}

// contacto:ContactoInterface

export interface ContactoInterface{
    celular: String;
    fijo?: String;
    email: String
}