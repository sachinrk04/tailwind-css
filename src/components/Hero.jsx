import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["BTB", "BTC", "SASS"],
      typeSpeed: 120,
      backSpeed: 140,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, flexible financing for
            <span
              className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
              ref={el}
            ></span>
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          I don't understand what that means. Please help me find the
          solution.Any sort of help would be appreciated. Thank you in advance.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
}
