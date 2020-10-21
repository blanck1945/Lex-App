interface JuzgadoDataProps {
  juzgado: any;
}

const JuzgadoData = ({ juzgado }: JuzgadoDataProps) => {
  return (
    <div className="px-2 is-w-full">
      <div className="is-flex is-align-center tool-row-2 my-1 has-background-link ">
        <p className="ml-4">{juzgado.fuero}</p>
        <p className="mr-4">{juzgado.justicia}</p>
      </div>
      <div className="is-flex is-align-center tool-row-2 my-1">
        <p className="ml-4">{juzgado.camara}</p>
        <p className="mr-4">{juzgado.juzgado}</p>
      </div>
      <div className="is-flex is-align-center tool-row-2 my-1">
        <p className="ml-4">Dirección</p>
        <p className="mr-4">{juzgado.direccion}</p>
      </div>
      <div className="is-flex is-align-center tool-row-2 my-1">
        <p className="ml-4">Telefono</p>
        <p className="mr-4">{juzgado.telefono}</p>
      </div>
      <div className="is-flex is-align-center tool-row-2 my-1">
        <p className="ml-4">Email</p>
        <p className="mr-4">{juzgado.email}</p>
      </div>
      <div className="is-flex is-align-center tool-row-2 my-1">
        <p className="ml-4">Juez</p>
        <p className="mr-4">{juzgado.juez}</p>
      </div>
      <div className="is-flex is-align-center tool-row-2 my-1">
        <p className="ml-4">Secretario</p>
        <p className="mr-4">
          {juzgado.secretaria.map((el: any) => el.secretario)}
        </p>
      </div>
    </div>
  );
};

export default JuzgadoData;
