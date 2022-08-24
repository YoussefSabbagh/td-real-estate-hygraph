import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object().shape({
  city: Yup.string(),
  type: Yup.string(),
});

const SearchBar = () => {
  const intialValues = {
    city: '',
    type: '',
    initialPrice: '',
    finalPrice: '',
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: intialValues,
    mode: 'all',
  });

  const onSubmit = (values) => {
    console.log(values);
    alert('buscando los datos');
  };

  return (
    <div className="container mx-auto max-w-5xl bg-gray-700 p-4 rounded-lg">
      <form
        className="p-4 mx-auto md:flex md:justify-between  md:items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 justify-items-center sm:justify-items-start">
          <div className="relative sm:w-full">
            <div className="w-full flex justify-between lg:flex-col">
              <label htmlFor="city">Ciudad :</label>
              <input className="flex-1 text-gray-700" {...register('city')} />
            </div>
            <p className="text-sm text-error text-center mb-2">
              {errors.city?.message}
            </p>
          </div>

          <div className="relative sm:w-full">
            <div className="w-full flex justify-between lg:flex-col">
              <label htmlFor="type">Tipo :</label>
              <input className="flex-1  text-gray-700" {...register('type')} />
            </div>
            <p className="text-sm text-error text-center mb-2">
              {errors.type?.message}
            </p>
          </div>

          <div className="relative sm:w-full">
            <div className="w-full flex justify-between lg:flex-col">
              <label htmlFor="initialPrice">Precio Desde : </label>
              <input
                className="flex-1 text-gray-700"
                {...register('initialPrice')}
                type="number"
              />
            </div>
            <p className="text-sm text-error text-center mb-2">
              {errors.initialPrice?.message}
            </p>
          </div>

          <div className="relative sm:w-full">
            <div className="w-full flex justify-between lg:flex-col">
              <label htmlFor="finalPrice">Precio Hasta :</label>
              <input
                className="flex-1 text-gray-700"
                {...register('finalPrice')}
                type="number"
              />
            </div>
            <p className="text-sm text-error text-center mb-2">
              {errors.finalPrice?.message}
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-4 md:mt-0 md:ml-4">
          <button className="px-8 py-2 border inline-block text-center hover:border-gray-700 hover:bg-myWhite hover:text-gray-700">
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
