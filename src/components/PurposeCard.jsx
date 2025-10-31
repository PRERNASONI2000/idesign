import React from "react";
import {motion} from "framer-motion";

const PurposeCard = () => {
    const CardData =[
        {img: "/assets/img/p1.png", idea: "Client-Centric Approach",},
        {img: "/assets/img/p2.png", idea: "Innovative Designs",},
        {img: "/assets/img/p3.png", idea: "Sustainable Interiors",},
        {img: "/assets/img/p4.png", idea: "Seamless Execution",},
        {img: "/assets/img/p5.png", idea: "Attention to Detail",},
        {img: "/assets/img/p6.png", idea: "Timely Delivery",},
    ];
    return (
        <div className="bg-[#FDF7E4] pt-16 border-t-[40px] border-[#5A3E2B] mt-[-2px]">
            <h1 className="font-bold text-[42px] sm:text-[42px] md:text-[50px] lg:text-[64px] leading-12 text-center mt-0 mb-5 md:mb-10">
                Purpose - build trust
            </h1>
            <p className="text-about text-center text-[20px] lg:text-[24px] md:text-[22px] sm:text-[20px] leading-8 mb-10">
                We started with a passion for transforming <br className="md:block none" />
                ordinary rooms into dream spaces
            </p>
            <div className="md:max-w-7xl max-w-6xl mx-auto p-4">
                <div role="list" className="flex flex-wrap flex-row gap-10 items-center justify-center p-2">
                   {CardData.map((card, index) => (
                     <div aria-label={card.idea} role="listitem" key={index} className="md:w-[229px] md:h-[256px] w-[180px] h-[220px] rounded-[10px] border-[#5A3E2B]/50 flex items-center justify-center flex-col border-2">
                      <motion.img 
                    //   animate={{rotate: [0, 360, 0]}}
                    // animate={{ rotate: [0, 10, -10, 0], y: [0, -10, 0] }}
                    whileInView={{ rotate: [0, 10, -10, 0], y: [0, -10, 0] }}
                      transition={{duration: 3, repeat: Infinity, ease: "easeInOut",repeatType: "mirror",}}
                      src={card.img} 
                      alt={card.idea} 
                      viewport={{ once: false }}
                      className="block h-auto mx-auto  w-[120px] " />
                      <p className="text-black leading-8 text-center mt-4 font-medium text-[20px] lg:text-[24px] md:text-[22px] sm:text-[20px]">
                        {card.idea}
                      </p>
                    </div>
                   ))}
                </div>
            </div>
            <div className="bg-[#5A3E2B] h-[110px] mt-20"></div>
        </div>
    )
};

export default PurposeCard;