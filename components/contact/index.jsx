import FormContact from './formContact';
import Horarios from './horarios';
import Locations from './locations';

const Contact = () => {
  return (
    <section id="contact" className="bg-myYellow py-10">
      <div className="container mx-auto p-10">
        <h2 className="text-center text-5xl font-semibold mb-8 text-myRose ">
          Contact Us
        </h2>
        <p className="max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ducimus
          ullam est ex nulla aut nostrum similique? Animi dolorem et ex rerum
          vitae totam iste natus ratione! Tempore, quod assumenda?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Horarios />
          <FormContact />
          <Locations />
        </div>
      </div>
    </section>
  );
};

export default Contact;
