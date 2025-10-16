import Image from "next/image";
import React from "react";
import AboutBg from "../assets/images/AboutBG.webp";
import BookFreeTrialButton from "./BookFreeTrialButton";
import SmallGirl from "../assets/images/smallGirl.webp";
import BigGirl from "../assets/images/bigGirl.webp";
import Students from "../assets/images/students.webp";
import SmallRing from "../assets/images/smallRing.webp";
import BigRing from "../assets/images/bigRing.webp";
import { FaBook, FaCheckCircle } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="relative w-full h-auto md:h-[580px] xlg:h-[650px] text-black overflow-hidden py-10 md:py-0">
      {/* Background Image */}
      <Image
        src={AboutBg}
        alt="About Background"
        fill
        className="object-cover object-center z-0"
        priority
      />

      <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between h-full gap-10">
        {/* Image Columns */}
        <div className="md:w-1/2 flex gap-6 justify-center items-center relative">
          {/* Column 1 - Boy */}
          <div className="relative top-10 md:top-20 w-[100px] h-[180px] md:w-[120px] md:h-[220px]">
            {/* Yellow background shape */}
            <Image
              src={SmallRing}
              alt="Yellow Shape"
              layout="fill"
              objectFit="cover"
            />
            {/* Boy image */}
            <div className="absolute -top-1 -left-[-3] w-full h-full">
              <Image
                src={SmallGirl}
                alt="Boy"
                layout="fill"
                objectFit="cover"
              />
            </div>
            {/* Bottom label */}
            <div className="absolute -top-[80px] md:-top-[100px] left-6 md:left-10 z-30 flex items-center bg-white px-3 py-1.5 rounded-full shadow-[0px_0px_11px_1px_rgba(0,_0,_0,_0.1)] text-xs text-[#FFBC36] w-[120px] md:w-[140px]">
              <div className="flex flex-col mr-2 leading-tight">
                <span className="font-bold">Happy</span>
                <span className="text-black">Student</span>
              </div>
              <Image
                src={Students}
                alt="students"
                className="object-contain"
                width={50}
                height={50}
              />
            </div>
          </div>

          {/* Column 2 - Girl */}
          <div className="relative w-[130px] h-[240px] md:w-[170px] md:h-[308px]">
            <Image
              src={BigRing}
              alt="Blue Shape"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute -top-[2px] -left-[-5px] w-full h-full">
              <Image src={BigGirl} alt="Girl" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="md:w-1/2 text-center md:text-left" id="about">
          <div className="flex justify-center md:justify-start items-center gap-3">
            <FaBook color="#FFBC36" />
            <h2 className="text-[#FFBC36] font-semibold">ABOUT US</h2>
          </div>
          <h2 className="max-w-full md:w-[500px] text-lg text-[#17254E] md:text-5xl font-bold leading-snug md:leading-[1.3] mt-2">
            we are building future cubs at
            <span className="text-3xl md:text-4xl ml-2 text-[#0097B2] font-bold cursor-pointer">
              Study<span className="text-[#FFBC36] font-bold">cubs</span>
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-md font-inter max-w-full md:w-[500px]">
            Our vision is to create a skilled and empowered society that drives
            meaningful impact across the world. We aim to equip individuals with
            fast-evolving, future-ready skills that not only keep pace with
            changing times but also inspire innovation, growth, and lasting
            success.
          </p>

          {/* Features */}
          <div className="w-full md:w-[500px] flex flex-col sm:flex-row gap-4 mt-6">
            <div className="flex items-center gap-3 bg-[#F3F5F5] px-4 py-3 rounded-md w-full">
              <FaCheckCircle color="#0097B2" size={20} />
              <h3 className="text-sm font-semibold text-[#17254E]">
                QUALITY EDUCATORS
              </h3>
            </div>
            <div className="flex items-center gap-3 bg-[#F3F5F5] px-4 py-3 rounded-md w-full">
              <FaCheckCircle color="#0097B2" size={20} />
              <h3 className="text-sm font-semibold text-[#17254E]">
                PLAY TO LEARN
              </h3>
            </div>
          </div>
          <div className="w-full md:w-[500px] flex flex-col sm:flex-row gap-4 mt-2">
            <div className="flex items-center gap-3 bg-[#F3F5F5] px-4 py-3 rounded-md w-full">
              <FaCheckCircle color="#0097B2" size={20} />
              <h3 className="text-sm font-semibold text-[#17254E]">
                PERSONALIZED
              </h3>
            </div>
            <div className="flex items-center gap-3 bg-[#F3F5F5] px-4 py-3 rounded-md w-full">
              <FaCheckCircle color="#0097B2" size={20} />
              <h3 className="text-sm font-semibold text-[#17254E]">
                STUDY ENVIRONMENT
              </h3>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-5 hidden md:flex sm:hidden">
            <BookFreeTrialButton className="flash-button bg-[#FFBC36] px-10 py-3 rounded-full text-white text-sm hover:shadow-[0px_0px_11px_1px_#ffd930]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
