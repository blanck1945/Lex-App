
export const addData = (values: any) => {
    return {
        ...values,
        justicia: values.justicia === "" ? "Justicia Nacional en lo Civil" : values.justicia,
        camara: values.camara === "" ? "Juzgados" : values.camara,
        secretaria: [{
            tipo: values.tipo,
            direccion: values.direccionSecretaria,
          telefono: values.telefonoSecretaria,
          secretario: values.secretario,
        }],
      };
}

export const formatData = (juzgado: any) => {
    delete juzgado.tipo
    delete juzgado.direccionSecretaria
    delete juzgado.telefonoSecretaria
    delete juzgado.secretario

    return juzgado
}

/*
{
  fuero: 'Fueros Nacionales',
  justicia: 'Justicia Nacional en lo Civil',
  camara: 'Juzgados',
  direccion: 'Lavalle 1220, PISO TERCERO (C1048AAF)',
  telefono: '4379-1265',
  email: 'jncivil8@pjn.gov.ar',
  juez: 'Dra. Cordoba, Lucila Ines',
  secretaria: [
    {
      tipo: 'Única',
      direccion: 'Lavalle 1220, PISO TERCERO (C1048AAF)',
      telefono: '4379-1263',
      secretario: 'Dra. María Victoria, Ordoñez'
    }
  ]
}*/


/*
{   
    "fuero": "Fueros Nacionales",
    "justicia": "Justicia Nacional en lo Civil",
    "camara": "Juzgados",
    "juzgado": "Juzgado Civil Nro. 16",
    "direccion": "Marcelo T. de Alvear 1840 1° piso",
    "telefono": "4130-6169",
    "email": "jncivil16@pjn.gov.ar",
    "juez": "Dr. Fernandez, Javier Humberto",
    "secretaria":[{
        "tipo": "Única",
        "direccion": "Av. De Los Inmigrantes 1950, Entre Piso (C1104ADO)",
        "telefono": "4130-6168",
        "secretario": "Dr. Rovatti, Lucas"
    }] 
}*/