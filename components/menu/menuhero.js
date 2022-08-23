// import Shoes from './shoes';
import Popular from './popular';
const HeroMenu = () => {
  return (
    <>
      <div className="bg-fixed bg-menu-hero-pattern bg-cover bg-center pb-24">
        <div className="bg-fixed bg-menu-hero-pattern bg-cover bg-center md:px-[calc((100vw_-_var(--max-width))/2)] pb-24">
          <div className="flex flex-col justify-center items-start px-8 w-full md:w-[650px] text-myPink uppercase font-bold leading-none">
            <h1 className="mt-20 mb-4 text-[2.5rem] md:text-[4rem] lg:text-[5rem] shadow-[3px_3px_rgba(255,0,0,1)] ">
              Explora nuestro Menu
            </h1>
          </div>
        </div>
      </div>
      {/* <Shoes /> */}
      <Popular />
    </>
  );
};

export default HeroMenu;
