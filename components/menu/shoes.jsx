import { useRef } from 'react';
import { recipesData } from './menuTestData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Shoes = () => {
  const carousel = useRef(null);
  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <>
      <div
        className="container mx-auto flex overflow-x-auto scroll-smooth scrollbar-hide"
        ref={carousel}
      >
        {recipesData.map((recipe) => {
          return (
            <article
              key={recipe.id}
              className="item shadow-md shadow-yellow-700 m-2.5 p-2.5 w-[280px]  rounded-2xl flex-none"
            >
              <div className="image  w-full h-[160px]">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="info flex flex-col justify-between h-[100px]">
                <span className="title block text-center  text-purple p-1 rounded-lg">
                  {recipe.title}
                </span>
                <span className="price block text-center text-xl p-1 rounded-lg bg-[#ff7e3b] font-semibold">
                  US$ {recipe.price}
                </span>
              </div>
            </article>
          );
        })}
      </div>
      <div className="w-full text-center">
        <button className="left" onClick={handleLeftClick}>
          <FaChevronLeft />
        </button>
        <button className="right" onClick={handleRightClick}>
          <FaChevronRight />
        </button>
      </div>
    </>
  );
};

export default Shoes;
