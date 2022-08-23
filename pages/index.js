import Layout from '../components/Layout';
import Contact from '../components/contact';
import SlideShow from '../components/SlideShow';
import { SliderData } from '../components/SlideShow/SliderData';
import Properties from '../components/properties';

// import Services from '../components/home/services';

export default function Home() {
  return (
    <Layout title={'Jesus Guevara'}>
      <section id="home">
        <SlideShow id="home" slides={SliderData} />
      </section>
      <Properties />
      <Contact />
    </Layout>
  );
}
