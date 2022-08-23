import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

import Layout from '../components/Layout';
import Contact from '../components/contact';
import { getProperties } from '../services/properties';
import Link from 'next/link';
import Image from 'next/image';

export default function SearchScreen() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getProperties().then((newProperties) => {
      setProperties(newProperties);
    });
  }, []);

  return (
    <Layout title={'Jesus Guevara - Search Section'}>
      <section
        id="search"
        className="pt-[var(--header-height)] bg-myBlack flex flex-col justify-center items-center"
      >
        <h1 className="my-10 leading-none border-b p-4 text-4xl font-semibold font-title text-center">
          Encuentra tu nuevo hogar
        </h1>
        <div className="container mx-auto max-w-4xl bg-myWhite p-4">
          <form className="flex space-x-10 bg-myBlack p-4 mx-auto">
            <label htmlFor="location">
              Ciudad : <input type="text" /> <FaSearch className="inline" />
            </label>
            <label htmlFor="type">
              Tipo : <input type="text" /> <FaSearch className="inline" />
            </label>
            <label htmlFor="price">
              Precio : <input type="text" /> <FaSearch className="inline" />
            </label>
          </form>
        </div>

        <h2 className="mb-8 py-12 border-b pb-4 text-2xl font-semibold text-center">
          Se muestran los resultados de la busqueda
        </h2>
        <div className="container mx-auto mt-10 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 ">
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
                <div className="absolute px-3 py-2 font-semibold text-myRose bg-myYellow rounded-tl-lg">
                  {property.type}
                </div>
                <div className="w-1/2 text-gray-700 p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3 className="font-semibold text-lg text-gray-700 mb-4">
                    {property.title}
                  </h3>
                  <p className="text-base">{property.address}</p>
                  <p className="text-base">
                    <span className="font-bold">H: </span>
                    {property.rooms} / <span className="font-bold">B: </span>
                    {property.bathrooms}
                  </p>
                  <p className="text-xl text-myRose font-bold leading-relaxed mb-4">
                    $ {property.price}
                  </p>
                  <Link href="/">
                    <a
                      href=""
                      className="inline-block py-2 px-4 border border-myYellow  bg-myYellow font-semibold rounded-full hover:border-myRose hover:bg-myRose hover:text-myYellow transition"
                    >
                      + detalles
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Contact />
    </Layout>
  );
}
