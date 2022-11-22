import axios from 'axios';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const recaptchaRef = React.createRef<any>();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [inputs, setInputs] = useState({
    email: '',
    name: '',
    message: '',
  });
  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };
  const handleOnSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const data = { ...inputs, _date: new Date().toLocaleString() };
    axios({
      method: 'POST',
      url: 'https://formbold.com/s/9R4Go',
      data: {
        ...data,
        'g-recaptcha-response': recaptchaRef.current.getValue(),
      },
    })
      .then((r) => {
        setSuccess(true);
        setLoading(false);

        setInputs({
          email: '',
          name: '',
          message: '',
        });
      })
      .catch((r) => {
        setLoading(false);
        setError(r.response?.data?.message || 'Something went wrong');
      });
  };

  return (
    <div className="w-11/12 md:max-w-xl mx-auto mt-20">
      <h2 className="dark:text-white font-bold text-2xl mb-5 decoration-4 underline underline-offset-8 underth">
        Contact
      </h2>
      <form
        className="flex flex-col gap-4"
        // action="https://formbold.com/s/9R4Go"
        // action="https://getform.io/f/42e083d1-9ad9-4671-ade4-d8ac129a2d28"
        onSubmit={handleOnSubmit}
      >
        <input
          className="dark:bg-stone-900 p-2 focus-visible:outline-black border-2 border-stone-300 rounded-md"
          onChange={handleOnChange}
          id="name"
          type="text"
          placeholder="Name"
          value={inputs.name}
          name="name"
        />

        <input
          className="dark:bg-stone-900 p-2 focus-visible:outline-black border-2 border-stone-300 rounded-md"
          onChange={handleOnChange}
          id="email"
          type="email"
          value={inputs.email}
          placeholder="Email"
          name="email"
        />
        <textarea
          className="dark:bg-stone-900 p-2 focus-visible:outline-black border-2 border-stone-300 rounded-md"
          onChange={handleOnChange}
          value={inputs.message}
          id="message"
          placeholder="Message"
          name="message"
          rows={4}
        ></textarea>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LcCickiAAAAAAU4hhcO9nMag_a9W0E5yc3Nw8Od"
        />
        <button
          className=" flex items-center bg-[#e0a82e] dark:bg-[#6419e6] py-2 px-6 font-bold text-white rounded-md max-w-max"
          type="submit"
        >
          {loading && (
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx={12}
                cy={12}
                r={10}
                stroke="currentColor"
                strokeWidth={4}
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          )}
          Send
        </button>
      </form>
      <div className="mt-3 font-[500]">
        {error && <p className="text-red-400">{error}</p>}
        {success && (
          <p className="text-green-400">Form submitted successfully!</p>
        )}
      </div>
    </div>
  );
};
export default Contact;
