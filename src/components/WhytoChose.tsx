import Image from "next/image";
import React from "react";
import chooseUsBG from "../assets/images/ChooseUsBG.webp";
import SchoolGirl from "../assets/images/schoolGirl.webp";
import { FaBook, FaCheck } from "react-icons/fa";
import FindEventsButton from "./FindEventsButton";

const WhytoChose = () => {
  return (
    <section className="relative w-full h-auto md:h-[520px] xlg:h-[650px] text-black overflow-hidden py-10 md:py-0">
      {/* Background Image */}
      <Image
        src={chooseUsBG}
        alt="Hero Background"
        fill
        className="object-cover object-center z-0"
        priority
      />

      <div className="relative z-20 container mx-auto px-6 md:px-28 flex flex-col-reverse md:flex-row items-center justify-between gap-10 h-full">
        {/* Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center gap-3">
            <FaBook color="#FFBC36" />
            <h2 className="text-[#FFBC36] font-semibold">WHY CHOOSE US</h2>
          </div>

          <h2 className="max-w-full md:w-[500px] text-lg md:text-5xl font-bold text-[#17254E] leading-snug md:leading-[1.3] mt-2">
            New Approach To Learning
          </h2>

          <p className="max-w-full md:w-[500px] mt-4 text-sm md:text-md font-inter text-gray-700">
            We believe every child has hidden talent we nurture and shape it for
            a brighter future with our expert mentors.
          </p>

          {/* Features */}
          <div className="w-full md:w-[500px] flex flex-col sm:flex-row gap-4 mt-6">
            <div className="flex items-center gap-3 w-full">
              <FaCheck color="#FFBC36" size={20} />
              <h3 className="text-sm font-semibold text-[#17254E]">
                Personalized
              </h3>
            </div>
            <div className="flex items-center gap-3 w-full">
              <FaCheck color="#FFBC36" size={20} />
              <h3 className="text-sm font-semibold text-[#17254E]">
                Best curriculum
              </h3>
            </div>
          </div>

          <div className="w-full md:w-[500px] flex flex-col sm:flex-row gap-4 mt-2">
            <div className="flex items-center gap-3 w-full">
              <FaCheck color="#FE543D" size={20} />
              <h3 className="text-sm font-semibold text-[#17254E]">
                Expert Tutor
              </h3>
            </div>
            <div className="flex items-center gap-3 w-full">
              <FaCheck color="#FE543D" size={20} />
              <h3 className="text-sm font-semibold text-[#17254E]">
                Affordable
              </h3>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-5 hidden md:flex sm:hidden">
            <FindEventsButton className="flash-button bg-[#2AB7CA] px-6 py-3 rounded-full text-white text-sm hover:shadow-[0px_0px_11px_1px_#2AB7CA]" />
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-[50%] flex justify-center">
          <Image
            src={SchoolGirl}
            alt="girl"
            className="object-contain w-auto h-auto max-w-[300px] md:w-[500px] lg:max-w-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default WhytoChose;
