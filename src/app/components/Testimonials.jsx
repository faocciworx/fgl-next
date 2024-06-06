import React, { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    text: "Faocci's creative touch transformed our website into a visual masterpiece! His expertise in web design brought our brand to life, and the responsive layout ensures a seamless user experience.",
    name: "Janpros Lusung",
    position: "Customer",
    image: "https://pagedone.io/asset/uploads/1696229969.png",
  },
  {
    id: 2,
    text: "Faocci's graphic design skills are unparalleled. His eye for detail and creativity shine through every project. Our marketing materials now stand out, thanks to his stunning visuals created with precision.",
    name: "Nathaniel Nicdao",
    position: "Customer",
    image: "https://pagedone.io/asset/uploads/1696229994.png",
  },
  {
    id: 3,
    text: "When our office faced a technical crisis, Faocci's swift and efficient troubleshooting saved the day. His expertise as a computer technician is unmatched, providing timely solutions that keep our operations running smoothly.",
    name: "Ashley Joss",
    position: "Customer",
    image: "https://pagedone.io/asset/uploads/1696230027.png",
  },
  {
    id: 4,
    text: "Faocci's commitment to data security is commendable. His backup solutions have given us peace of mind, ensuring our critical information is protected. His security measures have made our digital space resilient against potential threats.",
    name: "Jay Ryan Tiongson",
    position: "Customer",
    image: "https://pagedone.io/asset/uploads/1696230027.png",
  },
  {
    id: 5,
    text: "Faocci's strategic IT insights have been a game-changer for our business. His consulting services not only aligned our technology with our goals but also optimized our operations. Now, we're more efficient and future-ready.",
    name: "Senen Dulu",
    position: "Customer",
    image: "https://pagedone.io/asset/uploads/1696230027.png",
  },
  {
    id: 6,
    text: "Faocci's computer literacy was empowering. His patient guidance helped our team enhance their skills, from basic troubleshooting to mastering new software. Now, we're more confident and proficient in our daily tasks.",
    name: "Arvy Manaloto",
    position: "Customer",
    image: "https://pagedone.io/asset/uploads/1696230027.png",
  },
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonialsRef = useRef(null);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const itemsPerPage = isSmallScreen ? 1 : 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (prevSlide) =>
          (prevSlide + 1) % Math.ceil(testimonials.length / itemsPerPage)
      );
    }, 2500);
    return () => clearInterval(interval);
  }, [isSmallScreen, itemsPerPage]);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const calculateItemWidth = () => {
    if (testimonialsRef.current) {
      const containerWidth = testimonialsRef.current.offsetWidth;
      return `${containerWidth / itemsPerPage}px`;
    }
    return "auto";
  };

  const renderTestimonial = (testimonial) => (
    <div
      key={testimonial.id}
      className={`px-4 ${isSmallScreen ? "w-auto" : "w-full"}`}
      style={{ width: calculateItemWidth() }}
    >
      <div className="group p-1 md:p-4 lg:p-6 transition-all duration-500 font-general text-white">
        <div>
          <blockquote class="text-base leading-6 transition-all italic font-semibold">
            <svg
              class="w-8 h-8 text-primary rotate-180 mb-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <div className="pb-6 text-xl">"{testimonial.text}"</div>
          </blockquote>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <img
            className="h-24 w-24 rounded-full"
            src={testimonial.image}
            alt="avatar"
          />
          <div className="flex flex-col items-center gap-2 mt-4">
            <h5 className="text-sm transition-all duration-500 mb-1 text-center">
              {testimonial.name}
            </h5>
            <span className="text-sm leading-4 text-center">
              {testimonial.position}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="mb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-12">
        <div ref={testimonialsRef} className="mb-16 text-center"></div>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${
                currentSlide *
                (100 / Math.ceil(testimonials.length / itemsPerPage))
              }%)`,
              width: `${100 * Math.ceil(testimonials.length / itemsPerPage)}%`,
            }}
          >
            {testimonials.map((testimonial) => renderTestimonial(testimonial))}
          </div>
          <div className="flex justify-center mt-4">
            {[
              ...Array(Math.ceil(testimonials.length / itemsPerPage)).keys(),
            ].map((index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 w-2 mx-2 rounded-full focus:outline-none transition-colors duration-300 ${
                  currentSlide === index ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

function useMediaQuery(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = () => {
      setMatches(mediaQuery.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}
