import React from "react";
import { motion } from "framer-motion";

const WhyChooseCard = () => {
  const row1 = [
    { img: "/assets/img/guarantee.png", text: "Flat 10-year warranty" },
    { img: "/assets/img/easy.png", text: "Easy EMIs" },
    { img: "/assets/img/security.png", text: "45-day move-in guarantee" },
    { img: "/assets/img/reliability.png", text: "146 quality checks" },
    { img: "/assets/img/home-sweet-home.png", text: "1,00,000+ happy homes" },
  ];

  const row2 = [
    { img: "/assets/img/landmark.png", text: "100+ cities" },
    { img: "/assets/img/placeholder.png", text: "3 countries" },
    { img: "/assets/img/interior-design.png", text: "3,500+ designers" },
    { img: "/assets/img/idea.png", text: "Personalized design solutions" },
    { img: "/assets/img/product-development.png", text: "20 lakh catalogue products" },
  ];

  // Animation variants
  const marqueeLeft = {
    animate: { x: ["0%", "-50%"] },
    transition: { repeat: Infinity, duration: 20, ease: "linear" },
  };

  const marqueeRight = {
    animate: { x: ["-50%", "0%"] }, // reverse direction
    transition: { repeat: Infinity, duration: 20, ease: "linear" },
  };

  const renderBoxes = (data) =>
    data.map((choose, index) => (
      <div
        key={index}
        className="carousel-box w-[230px] h-[258px] bg-[rgba(233,203,183,0.5)] border-b-[5px] border-t-[5px] border-[#A1826C] rounded-[20px] flex flex-col items-center justify-center flex-shrink-0"
      >
        <img
          src={choose.img}
          alt={choose.text}
          className="mt-7 mb-5 w-1/2 h-auto object-contain"
        />
        <p className="text-center text-[18px] lg:text-[23px]">{choose.text}</p>
      </div>
    ));

  return (
    <div className="Whychoosebg bg-[#FDF7E4] pt-13 pb-20">
      <h1 className="font-bold text-[42px] sm:text-[42px] md:text-[50px] lg:text-[64px] leading-12 text-center mt-0 mb-10">
        Why Choose us
      </h1>
      <p className="text-about text-center text-[20px] lg:text-[24px] md:text-[22px] sm:text-[20px] leading-8 mb-20">
        Give your home a new look with these interior design ideas curated for you
      </p>

      {/* Upper Row - left marquee */}
      <div className="overflow-hidden pt-6" role="list" aria-label="Why Choose Us features">
        <motion.div
          className="flex gap-6"
          animate={marqueeLeft.animate}
          transition={marqueeLeft.transition}
        >
          {[...row1, ...row1].map((choose, index) => (
            <div key={index} role="listitem"
              aria-label={choose.text} className="carousel-box w-[230px] h-[258px] bg-[rgba(233,203,183,0.5)] border-b-[5px] border-t-[5px] border-[#A1826C] rounded-[20px] flex flex-col items-center justify-center flex-shrink-0">
              <img src={choose.img} alt={choose.text} className="mt-7 mb-5 w-1/2 h-auto object-contain" />
              <p className="text-center text-[18px] lg:text-[23px]">{choose.text}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lower Row - right marquee */}
      <div className="overflow-hidden mt-8 mb-8" role="list" aria-label="Additional features">
        <motion.div
          className="flex gap-6"
          animate={marqueeRight.animate}
          transition={marqueeRight.transition}
        >
          {[...row2, ...row2].map((choose, index) => (
            <div key={index} role="listitem"
              aria-label={choose.text} className="carousel-box w-[230px] h-[258px] bg-[rgba(233,203,183,0.5)] border-b-[5px] border-t-[5px] border-[#A1826C] rounded-[20px] flex flex-col items-center justify-center flex-shrink-0">
              <img src={choose.img} alt={choose.text} className="mt-7 mb-5 w-1/2 h-auto object-contain" />
              <p className="text-center text-[18px] lg:text-[23px]">{choose.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseCard;
