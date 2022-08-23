const Hero = () => {
  return (
    <div className="bg-fixed bg-hero-pattern bg-cover bg-center md:px-[calc((100vw_-_var(--max-width))/2)]">
      <div className="flex flex-col justify-center items-start h-full min-h-screen px-8 w-full md:w-[650px] text-myWhite uppercase font-bold leading-none">
        <p className="mt-20 mb-4 text-xl md:text-2xl lg:text-3xl">
          Bienvenidos
        </p>
        <h1 className="font-title mb-4 text-[2.5rem] md:text-[4rem] lg:text-[5rem] ">
          Jesus Contreras
        </h1>
        <p className="mb-8 text-xl md:text-2xl lg:text-3xl">Bienes Raices</p>
        <button className="btn text-[1.4rem] py-4 px-16 border-none bg-myRose rounded-none hover:bg-myYellow">
          Ver Propiedades
        </button>
      </div>
    </div>
  );
};

export default Hero;
