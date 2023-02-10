import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [sending, setSending] = useState(false);
  const [send, setSend] = useState(false);

  const onSubmit = async (event) => {
    setSending(true);
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3c9caed9-0226-4ab3-9a67-8ca8e4a1762f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setSending(false);
      setSend(true);
    }
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(onSubmit(e))}
      className="drop-shadow-lg"
      noValidate
    >
      {/* <!-- Create your free access key from https://web3forms.com/ --> */}
      <div className="mb-5">
        <input
          type="text"
          placeholder="¿Cuál es tu nombre completo?"
          className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
          name="name"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <p className="text-red-400 text-sm mt-1">
            ¡Es importante un nombre, asi vamos conociendo a nuestros clientes!
          </p>
        )}
      </div>
      <div className="mb-5">
        <label htmlFor="email_address" className="sr-only">
          Correo electronico
        </label>
        <input
          id="email_address"
          type="email"
          placeholder="¿A que correo te podemos contactar?"
          name="email"
          className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <div className="text-red-400 text-sm mt-1">
            ¡Por favor, ingresa un correo electrónico válido!
          </div>
        )}
      </div>
      <div className="mb-5">
        <label htmlFor="phone_number" className="sr-only">
          Número telefónico
        </label>
        <input
          id="phone_number"
          type="text"
          placeholder="¿Cuál es tu número telefónico con?"
          className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
          {...register("phone", { required: true })}
        />
        {errors.phone && (
          <div className="text-red-400 text-sm mt-1">
            ¡Te queremos contactar lo más pronto posible, por favor ingresa tú
            número telefónico!
          </div>
        )}
      </div>
      <div className="mb-5">
        <label htmlFor="website" className="sr-only">
          Website
        </label>
        <input
          id="website"
          type="text"
          placeholder="¡Si cuentas con página web, por favor ingresala!"
          name="website"
          className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
        />
      </div>
      <div className="mb-3">
        <textarea
          name="message"
          placeholder="¿Algún mensaje que te gustaría dejarnos?"
          className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
        ></textarea>
      </div>
      <button
        className="rounded-3xl text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 w-full px-6 py-3 bg-black text-white hover:bg-slate-900 border-2 border-transparent "
        type="submit"
      >
        Enviar
      </button>
      {sending && (
        <div className="mt-3 text-center text-gray-400">Enviando...</div>
      )}
      {send && (
        <div className="mt-3 text-center text-green-500">
          Mensaje enviado con exito!
        </div>
      )}
    </form>
  );
};

export default ContactForm;
