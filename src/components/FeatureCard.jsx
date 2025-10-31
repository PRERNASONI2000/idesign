import React from "react";
import { motion } from "framer-motion";

const FeatureCard = () => {
    const featureData = [
        {
            img: "/assets/img/f1.png",
            title: "Modular Interiors",
            about: "Functional designs for kitchens, wardrobes, and storage spaces.",
        },
        {
            img: "/assets/img/f2.png",
            title: " Luxury Interiors",
            about: "Elegant and tailored interiors that redefine sophistication.",
        },
        {
            img: "/assets/img/f3.png",
            title: "Renovations",
            about: "Expert solutions to upgrade and refresh your existing space.",
        }
    ];
    return (
        <div className="featureCard">
            <h1 className="font-bold max-w-6xl mx-auto text-[42px] sm:text-[42px] md:text-[50px] lg:text-[64px] leading-14 lg:leading-22 md:leading-20 sm:leading-14 text-center mt-0 mb-2">
                One-stop shop for all things interiors
            </h1>
            <p className="text-about text-center max-w-6xl mx-auto text-[20px] lg:text-[24px] md:text-[22px] sm:text-[20px] leading-8 mb-20">
                Be it end-to-end interiors, renovation or modular solutions, we have it  all for your home or office.
                With a wide range of furniture & decor, we have your back from start to finish.
            </p>

            <div className="bg-transparent md:mt-40 mt-15">
                <div className="max-w-6xl mx-auto my-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {featureData.map((feature, index) => (
                            <motion.div
                                // initial={{ y: 0 }}
                                // animate={{ y: [0, -10, 0] }}
                                // transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                key={index} className="flex flex-col items-center w-[90%] sm:w-[80%] md:w-auto mx-auto">
                                <div className="bg-white flex-1 rounded-[20px] shadow-md">
                                    <img src={feature.img} alt={feature.title} className="w-full h-auto mx-auto" />
                                    <div className="bg-white py-12 px-4 text-center flex-1 leading-7 text-black rounded-b-[20px]" >
                                        <h4 className="font-medium mb-5 text-[20px] lg:text-[25px] md:text-[22px] sm:text-[20px]">{feature.title}</h4>
                                        <p className="font-medium text-[18px] lg:text-[20px] md:text-[19px] sm:text-[18px]">{feature.about}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureCard;