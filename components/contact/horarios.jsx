import React from 'react';

const Horarios = () => {
  return (
    <article className="text-myRose flex flex-col justify-start items-center">
      <h2 className="text-4xl mb-4">Horarios</h2>
      <div className="mb-2 text-center text-xl">
        <p className="font-bold"> Lunes - Viernes</p>
        <p className=""> 08:00 - 19:00</p>
      </div>
      <div className="mb-2 text-center text-xl">
        <p className="font-bold"> Sabados</p>
        <p className=""> 07:00 - 19:00</p>
      </div>
      <div className="mb-2 text-center text-xl">
        <p className="font-bold"> Domigos</p>
        <p className=""> 07:00 - 17:00</p>
      </div>
    </article>
  );
};

export default Horarios;
