import Image from 'next/image';
import Link from 'next/link';
import { ofertaData } from '../menu/menuTestData';

const EspecialCard = () => {
  return (
    <div className="container mx-auto">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ofertaData.map((recipe) => {
            return (
              <div key={recipe.id} className="w-full">
                <div className="bg-white rounded-lg flex mb-6 h-[300px]">
                  <div className="w-1/2 relative">
                    <Image
                      className="rounded-lg"
                      src={recipe.image}
                      alt="Chef"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>

                  <div className="w-1/2 p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3 className="font-semibold text-2xl mb-4">
                      {recipe.title}
                    </h3>
                    <p className="text-base leading-relaxed mb-4">
                      {recipe.description}
                    </p>
                    <p className="text-2xl text-myRose font-bold leading-relaxed mb-4">
                      $ {recipe.price}
                    </p>
                    <Link href="/">
                      <a
                        href=""
                        className="inline-block py-2 px-8 border border-myYellow  bg-myYellow font-semibold rounded-full hover:border-myRose hover:bg-myRose hover:text-myYellow transition"
                      >
                        Pedir
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EspecialCard;
