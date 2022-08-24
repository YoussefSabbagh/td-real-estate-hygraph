import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SearchResult = ({ property }) => {
  return (
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
  );
};

export default SearchResult;
