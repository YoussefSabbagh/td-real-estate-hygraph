import { useEffect, useRef } from 'react';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import styles from './sliderShow.module.scss';
import Image from 'next/image';

const SlideShow = ({ slides, id }) => {
  const slideshow = useRef(null);
  const intervaloSlideshow = useRef(null);

  const nextSlide = () => {
    if (slideshow.current.children.length > 0) {
      const firstSlide = slideshow.current.children[0];
      slideshow.current.style.transition = `5s linear all`;
      slideshow.current.style.transform = `translateX(-100%)`;

      const transition = () => {
        slideshow.current.style.transition = `none`;
        slideshow.current.style.transform = `translateX(0)`;

        slideshow.current.appendChild(firstSlide);
        slideshow.current.removeEventListener('transitionend', transition);
      };

      slideshow.current.addEventListener('transitionend', transition);
    }
  };

  const prevSlide = () => {
    if (slideshow.current.children.length > 0) {
      const lastSlide =
        slideshow.current.children[slideshow.current.children.length - 1];

      slideshow.current.insertBefore(lastSlide, slideshow.current.firstChild);
      slideshow.current.style.transition = 'none';
      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `2s linear all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect(() => {
    intervaloSlideshow.current = setInterval(() => {
      nextSlide();
    }, 10000);

    // slideshow.current.addEventListener("mouseenter", () => {
    //   clearInterval(intervaloSlideshow.current);
    // });

    // slideshow.current.addEventListener("mouseleave", () => {
    //   intervaloSlideshow.current = setInterval(() => {
    //     nextSlide();
    //   }, 5000);
    // });

    return () => {
      clearInterval(intervaloSlideshow.current);
    };
  }, []);

  return (
    <section className="relative overflow-hidden" id={id}>
      <div
        className="relative flex flex-nowrap after:content-['']  after:bg-myBlack after:w-screen after:h-screen after:absolute after:top-0 after:left-0"
        ref={slideshow}
      >
        {slides.map((slide, i) => {
          return (
            <div className={styles.slide} key={i}>
              <div className="w-screen h-screen relative">
                <Image
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  src={slide.image}
                  alt={slide.alt}
                />
              </div>
              <div className="absolute top-0 left- z-10 bg-myBlack/30 flex flex-col justify-center items-start h-full min-h-screen pl-40 w-full text-myWhite uppercase font-bold leading-none ">
                <p className="mt-20 mb-4 text-xl md:text-2xl lg:text-3xl">
                  {slide.linea1}
                </p>
                <h1 className="font-title mb-4 text-[2.5rem] md:text-[4rem] lg:text-[5rem] md:w-[650px] ">
                  {slide.title}
                </h1>
                <p className="mb-8 text-xl md:text-2xl lg:text-3xl">
                  {slide.linea2}
                </p>
                <button className="btn text-[1.4rem] py-4 px-16 border-none bg-myRose rounded-none hover:bg-myYellow">
                  Ver Propiedades
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.buttons}>
        <IoArrowBack className={styles.arrows} onClick={prevSlide} />
        <IoArrowForward className={styles.arrows} onClick={nextSlide} />
      </div>
    </section>
  );
};

export default SlideShow;
