import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="grid sm:grid-cols-2 items-start gap-16 mx-auto max-w-7xl font-general">
      <div>
        <h1 className="text-xl font-general font-bold">Let's Talk</h1>
        <p className="text-sm mt-3 leading-7">
          Have some big idea or brand to develop and need help? Then reach out
          we'd love to hear about your project and provide help.
        </p>
        <div className="mt-12">
          <h2 className="text-xl font-general font-bold">Email</h2>
          <ul className="mt-3">
            <li className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full overflow-hidden hover:bg-transparent hover:ring-2 ring-primary transition-all duration-300">
                <FaEnvelope />
              </div>
              <a
                target="blank"
                href="https://veilmail.io/e/FkKh7o"
                className="text-white text-sm ml-3"
              >
                <small className="block text-primary">Mail</small>
                <strong>https://veilmail.io/e/FkKh7o</strong>
              </a>
            </li>
            <li className="flex items-center mt-5">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full overflow-hidden hover:bg-transparent hover:ring-2 ring-primary transition-all duration-300">
                <FaEnvelope />
              </div>
              <a
                target="blank"
                href="https://veilmail.io/e/FkKh7o"
                className="text-white text-sm ml-3"
              >
                <small className="block text-primary">Mail</small>
                <strong>https://veilmail.io/e/FkKh7o</strong>
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-general font-bold">Socials</h2>
          <ul className="flex mt-3 space-x-4">
            <li className="flex items-center justify-center w-10 h-10 bg-primary rounded-full overflow-hidden hover:bg-transparent hover:ring-2 ring-primary transition-all duration-300">
              <a href="javascript:void(0)">
                <FaFacebookF />
              </a>
            </li>
            <li className="flex items-center justify-center w-10 h-10 bg-primary rounded-full overflow-hidden hover:bg-transparent hover:ring-2 ring-primary transition-all duration-300">
              <a href="javascript:void(0)">
                <FaLinkedinIn />
              </a>
            </li>
            <li className="flex items-center justify-center w-10 h-10 bg-primary rounded-full overflow-hidden hover:bg-transparent hover:ring-2 ring-primary transition-all duration-300">
              <a href="javascript:void(0)">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <form className="ml-auto space-y-4 mb-14">
        <h1 className="text-xl font-general font-bold">Get in Touch</h1>
        <p className="text-sm mt-3 leading-7">
          Got a big idea? Let's bring it to life. Contact me today!
        </p>

        <input
          id="emailInput"
          type="text"
          placeholder="Your Name"
          className="peer w-full rounded border border-[#495057] bg-transparent py-1 px-3 text-base leading-8 text-gray-100 placeholder-gray-400 outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:ring-0 focus:ring-primary"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="peer w-full rounded border border-[#495057] bg-transparent py-1 px-3 text-base leading-8 text-gray-100 placeholder-gray-400 outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:ring-0 focus:ring-primary"
        />

        <input
          type="text"
          placeholder="Your Subject"
          className="peer w-full rounded border border-[#495057] bg-transparent py-1 px-3 text-base leading-8 text-gray-100 placeholder-gray-400 outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:ring-0 focus:ring-primary"
        />

        <textarea
          placeholder="Your Message"
          rows="6"
          className="peer w-full rounded border border-[#495057] bg-transparent py-1 px-3 text-base leading-8 text-gray-100 placeholder-gray-400 outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:ring-0 focus:ring-primary"
        ></textarea>

        <button
          type="button"
          className="text-white bg-primary hover:bg-[#ee2050] font-semibold rounded-md text-sm px-4 py-2.5 w-full"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
