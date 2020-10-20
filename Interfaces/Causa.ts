export interface CausaInterface {
  _id: string;
  cliente: string[];
  juzgado: string;
  juzgadoId: JuzgadoData;
  autos: string;
  numCausa: string;
  inicioDemanda: string;
  proveido: string;
  movimientos: Movimiento[];
  observaciones: Observacion[];
  vencimientos: Vencimiento[];
}

export interface JuzgadoData {
  jurisdiccion: string;
  _id:          string;
  fuero:        string;
  justicia:     string;
  camara:       string;
  juzgado:      string;
  direccion:    string;
  telefono:     string;
  email:        string;
  juez:         string;
  secretaria:   Secretaria[];
}

export interface Secretaria {
  _id:        string;
  tipo:       string;
  direccion:  string;
  telefono:   string;
  secretario: string;
}



export interface Movimiento {
  _id: string;
  fecha: string;
  movimiento: string;
}

export interface Observacion {
  _id: string;
  fecha: string;
  observacion: string;
}

export interface Vencimiento {
  _id: string;
  fecha: string;
  fechaVencimiento: string;
  vencimiento: string;
  estado: boolean;
}
