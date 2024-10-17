import Loader from "./Loader";

const GraphLoader = () => {
  return (
    <div className="mt-10 bg-white rounded-lg grid place-items-center w-[400px] h-[250px] sm:h-[250px] md:h-[300px] lg:h-[350px] sm:w-[600px] md:w-[700px] xl:w-[800px]">
      <Loader />
    </div>
  );
};

export default GraphLoader;
