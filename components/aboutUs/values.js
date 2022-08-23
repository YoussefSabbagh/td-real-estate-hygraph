import Image from 'next/image';

const Values = () => {
  return (
    <div className="container w-full text-center">
      <h2 className="my-8 text-myPink text-5xl">Nuestros Valores</h2>
      <div className="grid grid-cols-1 md:grid-cols-8 gap-8">
        <div className="md:col-span-3 w-full flex flex-col justify-start items-center">
          <h3 className="text-4xl mb-5 text-myYellow">Nuestra Historia</h3>
          <p className="font-bold mb-1">
            cing jujubes sugar plum ice cream chocolate bar. Oat cake cotton
            candy candy jelly-o sesame snaps. Oat cake bonbon chocolate
            macaroon.
          </p>
          <p>
            chupa chups jelly beans danish lollipop halvah. Chocolate bar
            tootsie roll cake tart caramels dessert. Fruitcake candy canes
            halvah sweet chocolate cake lollipop tart muffin candy canes. Bear
            claw macaroon sweet roll danish ice cream fruitcake chocolate bar
            cheesecake. Fruitcake tootsie roll sweet pastry sugar plum soufflé
            tiramisu candy cheesecake. Sweet roll croissant cake topping cookie
            chupa chups pastry pudding. Marshmallow chocolate bar sweet roll
            chocolate cake chocolate cake cookie tiramisu tootsie roll. Pudding
            shortbread wafer pie ice cream dessert tiramisu chocolate bear claw.
          </p>
        </div>

        <div className="md:col-span-2 w-full relative">
          <Image
            src="/images/dulces/chef.png"
            alt="Chef"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        <div className="md:col-span-3 w-full flex flex-col justify-start items-center">
          <h3 className="text-4xl mb-5 text-myYellow">Nuestra Visión</h3>
          <p className="font-bold mb-2">
            cing jujubes sugar plum ice cream chocolate bar. Oat cake cotton
            candy candy jelly-o sesame snaps. Oat cake bonbon chocolate
            macaroon.
          </p>
          <p>
            chupa chups jelly beans danish lollipop halvah. Chocolate bar
            tootsie roll cake tart caramels dessert. Fruitcake candy canes
            halvah sweet chocolate cake lollipop tart muffin candy canes. Bear
            claw macaroon sweet roll danish ice cream fruitcake chocolate bar
            cheesecake. Fruitcake tootsie roll sweet pastry sugar plum soufflé
            tiramisu candy cheesecake. Sweet roll croissant cake topping cookie
            chupa chups pastry pudding. Marshmallow chocolate bar sweet roll
            chocolate cake chocolate cake cookie tiramisu tootsie roll. Pudding
            shortbread wafer pie ice cream dessert tiramisu chocolate bear claw.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
