import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import { getProperties } from '../../services/properties';

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getProperties().then((newProperties) => {
      setProperties(newProperties);
    });
  }, []);

  return (
    <div className="bg-myBlack p-12 pb-20 shadow-lg">
      <h3 className="mb-8 py-12 border-b pb-4 text-6xl font-semibold text-center">
        Destacadas
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {properties.map((property) => (
          <div key={property.id} className="w-full">
            <div className="bg-white rounded-lg flex mb-6 h-[300px]">
              <div className="w-1/2 relative">
                <Image
                  className="rounded-lg"
                  src={property.mainPhoto.url}
                  alt="Chef"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>

              <div className="w-1/2 text-gray-700 p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                <h3 className="font-semibold text-xl text-gray-700 mb-4">
                  {property.title}
                </h3>
                <p className="text-base">{property.address}</p>
                <p className="text-base">
                  <span className="font-bold">H: </span>
                  {property.rooms} / <span className="font-bold">B: </span>
                  {property.bathrooms}
                </p>
                <p className="text-2xl text-myRose font-bold leading-relaxed mb-4">
                  $ {property.price}
                </p>
                <Link href="/">
                  <a
                    href=""
                    className="inline-block py-2 px-8 border border-myYellow  bg-myYellow font-semibold rounded-full hover:border-myRose hover:bg-myRose hover:text-myYellow transition"
                  >
                    Mas Información
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
