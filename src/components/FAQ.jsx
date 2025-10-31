import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaqsList } from "./FaqData";

const Faq = () => {

  const [openIndex, setopenIndex] = useState(null);
  const toggleFaq = (index) => {
    setopenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  return (
    <div className="faq">
      <h1 className="font-bold text-white text-[42px] sm:text-[42px] md:text-[50px] lg:text-[64px]
 leading-12 text-center mt-5 mb-15">FAQs About Home Interior Design</h1>
      {FaqsList.map((faq, index) => (
        <div
          key={index}
          className={`py-4 px-2 bg text-center flex item-center justify-center ${index === FaqsList.length - 1 ? "mb-10" : "mb-0"
            }`}
        >
          <div className="bg-white py-4 px-[1.5rem] w-full md:w-3/4 shadow-lg">
            <div className="flex justify-between items-center"
              role="button"   // tells screen reader this is clickable
              tabIndex={0}   // makes div focusable for keyboard users
              aria-expanded={openIndex === index}  // true if open, false if closed
              aria-controls={`faq-answer-${index}`}  // associates button with answer// ID of controlled element
              onClick={() => toggleFaq(index)}
              onKeyDown={(e) => {  //allows Enter or Space to toggle the FAQ
                if (e.key === "Enter" || e.key === " ") toggleFaq(index);
              }}
            >
              <h4 className="font-semibold w-[350px] md:w-auto md:text-[24px] sm:text-[22px] xs:text-[20px] text-left">{faq.question}</h4>
              <span
                // onClick={toggleFaq}
                onClick={(e) => {
                  e.stopPropagation(); // optional but safe
                  toggleFaq(index);
                }}
                onKeyDown={(e) => {
                  // in case keyboard navigation focuses the span
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFaq(index);
                  }
                }}
                className="w-[50px] h-[50px] text-black flex items-center justify-center rounded-full border-black border-2 cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={openIndex === index ? "Collapse answer" : "Expand answer"}
              >
                <span className="text-2xl">{openIndex === index ? "-" : "+"}</span>
              </span>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  //Add ID to answer to match aria-controls //id links the question (via aria-controls) to its answer.
                  id={`faq-answer-${index}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="mt-2 font-regular md:text-[19px] sm:text-[18px] xs:text-[16px] text-left ml-5 mr-11 leading-8 mb-3">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
  )

}

export default Faq;






//AnimatePresence → jab koi element hide/show hota hai (FAQ ka answer part),
// to uska smooth exit animation handle karta hai.
//AnimatePresence ensures exit animation jab FAQ close hota hai.
//motion.div me height & opacity animate karte hain taaki smooth expand/collapse ho.
//transition se animation slow aur natural lagta hai.