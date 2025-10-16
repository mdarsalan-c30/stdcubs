import React from "react";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";
import TigerBoy from "../../assets/images/TigerAndboy.webp";
import { FeaturesProps } from "../../../types/data";

const Features: React.FC<FeaturesProps> = ({ featureData }) => {
  return (
    <section className="relative bg-[#fff] w-full py-20 text-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 md:px-10 flex flex-col items-center text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold max-w-xl leading-tight">
          Check Out Educate Features Win Any Exam
        </h2>
      </div>

      <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-28">
        {featureData.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-[#F3F5F5] flex flex-col items-center text-center"
          >
            <div
              className={`w-16 h-16 ${item.iconBg} flex items-center justify-center rounded-full mb-4`}
            >
              <Image src={item.image} alt="icon" width={30} height={30} />
            </div>

            <h3 className="text-xl font-semibold mb-4">{item.level}</h3>

            <ul className="space-y-2 mb-6 w-full">
              {item.list.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-left">
                  <IoIosArrowForward className="text-[#000]" />
                  <span className="text-base">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`flex items-center justify-between rounded-full text-white w-full max-w-xs ${item.btnColor}`}
            >
              <span className="flex items-center gap-2  px-4 py-2">
                Download
              </span>
              <span className={`ml-2 p-4 rounded-full ${item.arrowColor}`}>
                <IoIosArrowRoundForward className="text-white text-sm" />
              </span>
            </button>
          </div>
        ))}
      </div>

      {/* Two Column Section Below Features */}
      <div className=" container mx-auto px-6 md:px-10 mt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Text Column */}
          <div className="space-y-6">
            <h2 className="md:w-[500px] w-[260px] text-3xl md:text-4xl font-semibold leading-snug">
              Quality learning at an affordable price
            </h2>
            <p className="md:w-[500px] w-[300px] text-base text-gray-700">
              You&apos;re not just paying for classes you&apos;re investing in your
              child’s confidence, communication skills, and future success with
              expert mentors and a proven curriculum at Studycubs.
            </p>
            <div className="md:w-[500px] w-[200px] flex flex-row flex-wrap gap-3">
              <button className="bg-[#704FE6] hover:bg-[#1558b0] text-white px-6 py-3 rounded-full text-sm transition">
                Just @ 1499/-
              </button>
              <button
                className={`w-[100px] flex items-center bg-[#17254E] justify-between rounded-full text-white w-full max-w-xs`}
              >
                <span className="flex items-center gap-2 px-4 py-1">
                  Download
                </span>
                <span className={`ml-2 p-4 rounded-full bg-[#1F3061]`}>
                  <IoIosArrowRoundForward className="text-white text-sm" />
                </span>
              </button>
            </div>
          </div>

          {/* Image Column */}
          <div className="flex justify-center">
            <Image
              src={TigerBoy}
              alt="Teaching illustration"
              width={600}
              height={500}
              className="relative bottom-[-80px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
