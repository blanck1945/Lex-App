import Loader from "react-loader-spinner";

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
      <Loader type="Rings" color="#034ea2" height={160} width={160} />
    </div>
  );
};

export default SWRHandler;
