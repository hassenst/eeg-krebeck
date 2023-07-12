import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

const Form = ({ data }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  /**
   *
   * @param {object} FormData
   * @returns Object
   */

  const [formSubmitSuccess, setFormSubmitSuccess] = useState(false);

  const onSubmit = async (FormData) =>
    fetch(' https://thb.haseundrudi.com/api/content/item/mail', {
      method: 'POST',
      headers: {
        'api-key': 'USR-c07baa4282265d01235931e5b923336c96699194',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          name: FormData.name,
          email: FormData.email,
          message: FormData.message,
          phone: FormData.phone,
        },
      }),
    })
      .then((res) => res.json())
      .then(function (data) {
        console.log(JSON.stringify(data));
        setFormSubmitSuccess(true);
        reset();
      });

  useEffect(() => {
    setFormSubmitSuccess(false);
  }, [data]);

  if (!formSubmitSuccess)
    return (
      <form onSubmit={handleSubmit(onSubmit)} id="form" className="my-5 w-full">
        <div>
          <label htmlFor="name" className="font-semibold mb-1 block">
            Name <span>*</span>
          </label>
          <input
            id="name"
            placeholder="Maxi Mustermensch"
            className="block border border-black p-2 w-full"
            {...register('name', {
              required: 'Name ist ein Pflichtfeld',
            })}
          />
          <div className="h-6">
            {errors.name?.message && (
              <small className="block text-red-500">{errors.name.message} </small>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="email" className="font-semibold mb-1 block">
            Email <span>*</span>
          </label>
          <input
            id="email"
            placeholder="maxi@musterstadt.de"
            className="block border border-black p-2 w-full"
            {...register('email', {
              required: 'Email ist ein Pflichtfeld',
              validate: {
                matchPattern: (v) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                  'Bitte geben Sie eine gültige Emailadresse ein',
              },
            })}
          />
          <div className="h-6">
            {errors.email?.message && (
              <small className="block text-red-500">{errors.email.message} </small>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="font-semibold mb-1 block">
            Telefon <span>(optional)</span>
          </label>
          <input
            id="phone"
            placeholder="05507-2552"
            className="block border border-black p-2 w-full"
            {...register('phone', {
              validate: {
                matchPattern: (v) =>
                  /^[\+]?[(]?[0-9]*[)]?[\/\-\s\.]?[0-9]*[-\s\.]?[0-9]*$/.test(v) ||
                  'Bitte geben Sie gültige Telefonnummer ein',
              },
            })}
          />
          <div className="h-6">
            {errors.phone?.message && (
              <small className="block text-red-500">{errors.phone.message} </small>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="name" className="font-semibold mb-1 block">
            Ihre Nachricht
          </label>
          <textarea
            id="message"
            rows="6"
            className="block border border-black p-2 w-full focus:bg-gray-200"
            {...register('message')}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-black text-white hover:bg-gray-600 p-3 font-bold inline-block transition ease-in-out duration-300 mt-3 w-full lg:w-auto"
        >
          Anfrage absenden
        </button>
      </form>
    );
  if (formSubmitSuccess)
    return (
      <div className="text-emerald-600">
        <h2 className="font-bold my-5">Vielen Dank Für Ihre Nachricht</h2>
        <p>
          Wir haben Ihre Nachricht erhalten und werden uns zeitnah mit Ihnen Verbindung
          setzen.
        </p>
      </div>
    );
};

export default Form;
