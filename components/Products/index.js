import Image from 'next/image';

const Products = ({ heading, data }) => {
  const handleAddToCart = (e) => {
    e.stopPropagation();
    alert('recuerda hacer la funcion');
  };
  return (
    <section className="bg-myBlack text-white px-20 py-20">
      <h2 className="text-center mb-20 text-2xl md:text-3xl lg:text-4xl">
        {heading}
      </h2>
      <div className="flex flex-wrap justify-center mx-auto gap-y-16">
        {data.map((product, index) => {
          return (
            <article
              className="mx-8 w-[350px] cursor-pointer hover:scale-105"
              onClick={() => alert('ir a ver detalle de producto')}
              key={index}
            >
              <div className="relative h-[250px] min-w-[350px] shadow-[8px_8px_rgba(255,0,0,1)] ">
                <Image
                  className="w-full h-full block"
                  src={product.img}
                  alt={product.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col justify-start items-center px-8 pt-4 pb-8 text-center">
                <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                <p className="mb-2 h-[75px]">{product.desc}</p>
                <p className="mb-4 text-3xl">{product.price}</p>
                <button
                  onClick={handleAddToCart}
                  className="px-16 py-4 border-none text-lg bg-myRose transition-colors duration-500 hover:bg-myYellow hover:text-myBlack "
                >
                  {product.button}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
