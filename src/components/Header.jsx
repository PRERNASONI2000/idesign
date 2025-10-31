import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, scale } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imgData = [
    { img: "/assets/img/headerimg2.png", alt: "Header Image 2" },
    { img: "/assets/img/headerimg3.png", alt: "Header Image 3" },
    { img: "/assets/img/headerimg4.png", alt: "Header Image 4" },
    { img: "/assets/img/headerimg5.png", alt: "Header Image 5" },
    { img: "/assets/img/headerimg6.png", alt: "Header Image 6" },
  ];

  const [currentSlide, setcurrentSlide] = useState(0);

  //auto slide effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setcurrentSlide((prev) => (prev + 1) % imgData.length);
    }, 4000); // Change slide every 3 seconds
    return () => clearInterval(slideInterval);
  }, [imgData.length]);

  return (
    <header
      // className="bg-cream/90 backdrop-blur-sm sticky top-0 z-40"
      className="bg-[#FDF7E4] h-[100vh]"
    >
      <div className="max-w-full mx-auto flex flex-col">

        {/* img slide container */}
        <div className="w-full relative h-[100vh] overflow-hidden">
          {imgData.map((img, index) => (
            <img
              src={img.img}
              alt={img.alt}
              key={index}
              className={`absolute z-10 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          {/* overlay content */}

          <div className="flex z-20 absolute flex-col inset-0 text-center txt-body bg-[#000000]/30">
            <div  className={`flex items-center justify-center px-10 w-full gap-10 fixed top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0c0b09]/50 backdrop-blur-md shadow-lg py-6"
          : "bg-transparent py-6"
      }`}>
              {/* Left: Logo */}
            

              {/* Right: Navigation Links */}
              <nav className="flex items-center gap-10 text-[20px] text-[#f3e3d8]">
                  <Link to="/" className="flex items-center absolute left-10">
                {/* <img src="./assets/img/logo.png" alt="logo" className="w-12 h-12 mr-2" /> */}
                <span className="gradient-text michroma-regular text-[40px] mt-[-10px]">iDesign</span>
              </Link>

                <div className={`hidden md:flex flex-row gap-10 ${scrolled ? "flex" : ""}`}>
                <Link
                  to="/projects"
                  className="transition-all duration-200 ease-in-out font-normal"
                >
                  Projects
                </Link>
                  <a
                  href="#services"
                  className="transition-all duration-200 ease-in-out font-normal"
                >
                  Designs
                </a>
                <a
                  href="#showcase"
                  className="transition-all duration-200 ease-in-out font-normal"
                >
                  Showroom
                </a>
                <a
                  href="#products"
                  className="transition-all duration-200 ease-in-out font-normal"
                >
                  Products
                </a>
                </div>
                  <motion.button
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: .9, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute right-10 cursor-pointer w-[100px] h-[30px] text-black text-[24px] flex items-center justify-center whitespace-nowrap bg-[#E9CBB7]/100 rounded-[46px] hover:scale-3d-105 transition-transform duration-300 font-semibold shadow-md" style={{ fontSize: "12px", fontWeight: "500" }}>
                  Log in<img src="/assets/img/arrow.png" alt="img" width="20px" className="block ml-2" />
                </motion.button>
              </nav>
            </div>
            <div className="flex justify-center items-center flex-col h-full px-4">
              <h1 className="uppercase font-bold text-[42px] sm:text-[42px] md:text-[50px] lg:text-[64px] leading-[1.2] text-center mt-0 mb-5 md:mb-10 text-[#E9CBB7] [text-shadow:0_4px_10px_rgba(0,0,0,0.9)]">
                idesign gives your dream home
              </h1>

              {/* <p className="text-about text-center text-[20px] lg:text-[24px] md:text-[22px] sm:text-[20px] leading-8 mb-10">
                Get Yuor Dream Home with Us
            </p> */}
              <motion.button
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: .9, repeat: Infinity, ease: "easeInOut" }}
                className="cursor-pointer w-[330px] h-[60px] mt-6 px-6 py-3 text-black text-[24px] flex items-center justify-center bg-[#E9CBB7]/100 rounded-[46px] hover:scale-3d-105 transition-transform duration-300 font-semibold shadow-md">
                Explore Now <img src="/assets/img/arrow.png" alt="img" className="block ml-2" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
