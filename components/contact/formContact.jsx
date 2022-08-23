import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schema } from './userMailValidations';

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);

  const intialValues = {
    user_name: '',
    subject: '',
    email: '',
    message: '',
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: intialValues,
    mode: 'all',
  });

  const onSubmit = (valores) => {
    setIsSending(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        valores,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          toast.success('¡Gracias por su email!', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setIsSending(false);
          reset();
        },
        (err) => {
          toast.error('Ups.. Algo salió mal :)', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
          });
          console.log('FAILED...', err);
          setIsSending(false);
        }
      );
  };

  return (
    <div className="">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <form
        className="flex flex-col justify-start"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-center text-4xl text-myRose mb-12">
          Envíanos tus comentarios
        </h2>
        <div className="flex items-center text-xl">
          <label
            htmlFor="user_name"
            className=" w-[150px] auto text-right mr-2"
          >
            Nombre:
          </label>
          <input
            {...register('user_name')}
            placeholder="Nombre:"
            className="w-full px-2 py-2 outline-none border-transparent focus:border-myRose border-b-4 rounded-md transition duration-500 bg-yellow-100"
          />
        </div>
        <p className="text-sm text-error text-center mb-2">
          {errors.user_name?.message}
        </p>
        <div className="flex items-center text-xl">
          <label htmlFor="subject" className=" w-[150px] auto text-right mr-2">
            Asunto:
          </label>
          <input
            {...register('subject')}
            placeholder="Asunto:"
            className="w-full px-2 py-2 outline-none border-transparent focus:border-myRose border-b-4 rounded-md transition duration-500 bg-yellow-100"
          />
        </div>
        <p className="text-sm text-error text-center mb-2">
          {errors.subject?.message}
        </p>
        <div className="flex items-center text-xl">
          <label htmlFor="email" className=" w-[150px] auto text-right mr-2">
            Email:
          </label>
          <input
            {...register('email')}
            placeholder="ejemplo@correo.com"
            className="w-full px-2 py-2 outline-none border-transparent focus:border-myRose border-b-4 rounded-md transition duration-500 bg-yellow-100"
          />
        </div>
        <p className="text-sm text-error text-center mb-2">
          {errors.email?.message}
        </p>
        <div className="flex items-center text-xl">
          <label htmlFor="messaje" className=" w-[150px] auto text-right mr-2">
            Mensaje:
          </label>
          <textarea
            {...register('message')}
            cols="30"
            rows="3"
            placeholder="Su mensaje"
            className="w-full px-2 py-2 outline-none border-transparent focus:border-myRose border-b-4 rounded-md transition duration-500 bg-yellow-100"
          ></textarea>
        </div>
        <p className="text-sm text-error text-center mb-2">
          {errors.message?.message}
        </p>

        <div className="text-center mt-4">
          {!isSending && (
            <button
              type="submit"
              className="btn py-4 px-16 border-none rounded-none bg-myRose hover:bg-transparense hover:text-myRose"
            >
              Enviar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
