import { useState, useEffect } from 'react';

import Layout from '../components/Layout';
import { getProperties } from '../services/properties';
import SearchBar from '../components/search/searBar';
import SearchResult from '../components/search/searchResult';

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

        <SearchBar />

        <div className="container mx-auto mt-10 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {properties.map((property) => (
            <div key={property.id} className="w-full">
              <SearchResult property={property} />
              <SearchResult property={property} />
              <SearchResult property={property} />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
