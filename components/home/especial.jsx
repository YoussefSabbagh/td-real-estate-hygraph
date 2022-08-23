import EspecialCard from './especialCard';

const Especial = () => {
  return (
    <section id="especial" className="bg-myYellow py-10">
      <div className="container mx-auto p-10 pb-4">
        <h2 className="text-center text-5xl font-semibold mb-8 text-myRose ">
          Oferta especial de la semana
        </h2>
        <p className="max-w-2xl mx-auto mb-4 text-2xl text-center">
          Disfruta de los mejores postres mas vendidos este mes y ahora con
          precio especial
        </p>
      </div>
      <EspecialCard />
    </section>
  );
};

export default Especial;
