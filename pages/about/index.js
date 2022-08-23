import Layout from '../../components/Layout';
import { getAllPartner } from '../../services';

import Values from '../../components/aboutUs/values';

const About = () => {
  return (
    <Layout title={'Acerca de Nosotros'}>
      <section
        id="about"
        className="min-h-[calc(100vh_-_var(--header-height))] h-full flex flex-col items-center mt-[var(--header-height)] text-white bg-about-pattern bg-cover bg-center text-center"
      >
        <div className="relative max-w-5xl">
          <h1 className="my-8 text-myPink text-5xl">Nosotros</h1>
          <h2 className="mb-8 text-myYellow text-6xl">
            Los mejores postres desde 2009
          </h2>
          <p className="text-2xl max-w-3xl">
            <strong>{"Maria's Desserts"} </strong> tiene las mejores tortas y
            postres elaborados en casa con la receta tradicional de la abuela
          </p>
        </div>
        <Values />
      </section>
    </Layout>
  );
};

export default About;

// Fetch data at build time
export const getStaticProps = async () => {
  const partners = (await getAllPartner()) || [];

  return {
    props: { partners },
    revalidate: 10,
  };
};
