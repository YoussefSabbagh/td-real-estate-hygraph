const Feature = () => {
  return (
    <article className="bg-local bg-feature-pattern bg-cover bg-center h-screen max-h-[500px] flex flex-col justify-center items-center text-center text-myWhite py-4">
      <h2 className="text-4xl md:text-6xl lg:text-8xl">Torta del dia</h2>
      <p className="text-xl md:text-3xl lg:text-4xl py-4 mb-4">
        Torta doble chocolate
      </p>
      <button
        onClick={() => {
          alert('crear la funcion de pedido');
        }}
        className="btn text-[1.4rem] py-4 px-16 border-none rounded-none bg-myYellow hover:bg-myRose hover:text-myWhite "
      >
        Ordena ya
      </button>
    </article>
  );
};

export default Feature;
