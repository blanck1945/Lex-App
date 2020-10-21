interface SWRHandlerProps {
  control: string;
}

const SWRHandler = ({ control }: SWRHandlerProps) => {
  if (control === "error") {
    return (
      <div className="has-background-danger">
        <h2 className="has-text-white">Error al buscar la data</h2>
      </div>
    );
  }

  return (
    <div className="container has-background-light">
      <h3 className="has-text-info">Loading</h3>
    </div>
  );
};

export default SWRHandler;
