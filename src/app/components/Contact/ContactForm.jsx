"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const ContactForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));

    // Real-time validation
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };

    if (name === "name" && !value.trim()) {
      newErrors.name = "Name is required";
    } else if (name === "name") {
      delete newErrors.name;
    }

    if (name === "email" && !value.trim()) {
      newErrors.email = "Email is required";
    } else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      newErrors.email = "Email is invalid";
    } else if (name === "email") {
      delete newErrors.email;
    }

    if (name === "subject" && !value.trim()) {
      newErrors.subject = "Subject is required";
    } else if (name === "subject") {
      delete newErrors.subject;
    }

    if (name === "message" && !value.trim()) {
      newErrors.message = "Message is required";
    } else if (name === "message") {
      delete newErrors.message;
    }

    setErrors(newErrors);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch("https://formspree.io/f/mleqdlzk", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setFormStatus("Thank you! Your message has been sent.");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setErrors({});

          // Delay the redirection by 5 seconds
          setTimeout(() => {
            router.push("/"); // Redirect to the main page
          }, 5000);
        } else {
          setFormStatus("Oops! Something went wrong. Please try again.");
        }
      } catch (error) {
        setFormStatus("Oops! Something went wrong. Please try again.");
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="grid sm:grid-cols-2 items-start gap-8 mx-auto max-w-7xl font-general">
      <div>
        <h1 className="text-xl font-general font-bold">Let's Talk</h1>
        <p className="text-sm mt-3 leading-7">
          Have some big idea or brand to develop and need help? Then reach out,
          we'd love to hear about your project and provide help.
        </p>
        <div className="mt-7 md:mt-12 xl:mt-12 2xl:mt-12">
          <h2 className="text-xl font-general font-bold">Email</h2>
          <ul className="mt-3">
            <li className="flex items-center">
              <div className="flex items-center justify-center ml-1 w-10 h-10 bg-primary rounded-full overflow-hidden hover:bg-transparent hover:ring-2 ring-primary transition-all duration-300">
                <FaEnvelope />
              </div>
              <a
                href="mailto:faocciworx@gmail.com"
                className="text-white text-sm ml-3"
              >
                <small className="block text-primary">Mail</small>
                <strong>faocciworx@gmail.com</strong>
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-7 md:mt-12 xl:mt-12 2xl:mt-12">
          <h2 className="text-xl font-general font-bold">Socials</h2>
          <ul className="flex mt-3 space-x-4">
            <li className="flex items-center justify-center ml-1 w-10 h-10 bg-primary rounded-full overflow-hidden hover:bg-transparent hover:ring-2 ring-primary transition-all duration-300">
              <a
                href="https://www.facebook.com/faocci/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="flex items-center justify-center ml-1 w-10 h-10 bg-primary rounded-full overflow-hidden hover:bg-transparent hover:ring-2 ring-primary transition-all duration-300">
              <a
                href="https://www.linkedin.com/in/faocci/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="flex items-center justify-center ml-1 w-10 h-10 bg-primary rounded-full overflow-hidden hover:bg-transparent hover:ring-2 ring-primary transition-all duration-300">
              <a
                href="https://github.com/faocciworx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="w-full ml-auto space-y-4 mb-14">
        <h1 className="text-xl font-general font-bold">Get in Touch</h1>
        <p className="text-sm mt-3 leading-7">
          Got a big idea? Let's bring it to life. Contact me today!
        </p>

        <div>
          <input
            id="nameInput"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={`peer w-full rounded border border-[#495057] bg-transparent py-1 px-3 text-base leading-8 text-gray-100 placeholder-gray-400 outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:ring-0 focus:ring-primary`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={`peer w-full rounded border border-[#495057] bg-transparent py-1 px-3 text-base leading-8 text-gray-100 placeholder-gray-400 outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:ring-0 focus:ring-primary`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="subject"
            placeholder="Your Subject"
            value={formData.subject}
            onChange={handleChange}
            className={`peer w-full rounded border border-[#495057] bg-transparent py-1 px-3 text-base leading-8 text-gray-100 placeholder-gray-400 outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:ring-0 focus:ring-primary`}
          />
          {errors.subject && (
            <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
          )}
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            className={`peer w-full rounded border border-[#495057] bg-transparent py-1 px-3 text-base leading-8 text-gray-100 placeholder-gray-400 outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:ring-0 focus:ring-primary`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="text-white bg-primary hover:bg-[#ee2050] font-semibold rounded-md text-sm px-4 py-2.5 w-full"
        >
          Send
        </button>

        {formStatus && (
          <p className="mt-4 text-sm text-center text-white">{formStatus}</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
