import { useEffect, useState } from 'react';
import { recipesData } from './menuTestData';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Popular = () => {
  const [isLoading, setIsLoadind] = useState(true);
  const [recipes, setRecipes] = useState([]);
  SwiperCore.use([Autoplay]);

  useEffect(() => {
    // const fetchRecipes = async () => {
    //   setIsLoadind(true);
    //   const response = await fetch(
    //     `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_KEY}&query=cake`
    //   );
    // const newRecipes = await response.json();

    // setRecipes(newRecipes.results);
    setRecipes(recipesData);
    setIsLoadind(false);
    // return null;
    // };

    // fetchRecipes();
  }, []);

  return (
    <div className="bg-[#150f0f] pb-8">
      <h2 className="text-4xl text-center text-white py-4 uppercase ">
        The most popular cake
      </h2>
      {!isLoading && (
        <div className="mx-auto container max-w-4xl">
          {/* Aqui va el carousel con swiper begin */}
          <Swiper
            className="mx-auto"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            breakpoints={{
              0: {
                spaceBetween: 0,
                slidesPerView: 2,
              },
              640: {
                spaceBetween: 0,
                slidesPerView: 3,
              },
              1024: {
                spaceBetween: 0,
                slidesPerView: 6,
              },
            }}
            loop={true}
            freeMode={true}
            autoplay={{ delay: 5000 }}
          >
            {recipes.map((recipe) => {
              return (
                <SwiperSlide key={recipe.id} className="w-[120px]">
                  <img
                    src={recipe.image}
                    alt={recipe.id}
                    className="object-cover object-center rounded-full w-[120px] h-[120px]"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          {/* Aqui va el carousel con swiper end */}
        </div>
      )}
    </div>
  );
};

export default Popular;
