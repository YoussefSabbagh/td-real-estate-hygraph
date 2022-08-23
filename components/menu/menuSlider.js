import Image from 'next/image';

const MenuSlider = () => {
  return (
    <div className="flex justify-center bg-pink-300">
      <div className="w-48 relative h-48 p-5 m-5 rounded-full">
        <Image
          className="rounded-full mr-10"
          src="/images/dulces/featured.jpg"
          width={100}
          height={100}
          layout="fill"
          alt="lay"
        />
      </div>
      <div className="w-48 relative h-48 p-5 m-5 rounded-full">
        <Image
          className="rounded-full mr-10"
          src="/images/dulces/featured2.jpg"
          width={100}
          height={100}
          layout="fill"
          alt="lay"
        />
      </div>
      <div className="w-48 relative h-48 p-5 m-5 rounded-full">
        <Image
          className="rounded-full mr-10"
          src="/images/dulces/featured3.jpg"
          width={100}
          height={100}
          layout="fill"
          alt="lay"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default MenuSlider;
