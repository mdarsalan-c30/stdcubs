"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import icon1 from "../../assets/images/icon1.webp";
import icon2 from "../../assets/images/icon2.webp";
import icon3 from "../../assets/images/icon3.webp";
import icon4 from "../../assets/images/icon4.webp";
import icon5 from "../../assets/images/icon5.webp";
import icon6 from "../../assets/images/icon6.webp";
import icon7 from "../../assets/images/icon7.webp";
import icon8 from "../../assets/images/icon8.webp";
import icon9 from "../../assets/images/icon9.webp";
import Image from "next/image";
import { StatItem } from "../../../types/data";

const boxData = [
  [
    {
      icon: icon1,
      text: "Logical & critical thinking",
      iconColor: "bg-[rgba(27,117,232,0.2)] border-[#1B75E8]",
      BgColor: "bg-[#EAF6FF]",
    },
    {
      icon: icon2,
      text: "Conversation skills",
      iconColor: "bg-[rgba(255,104,129,0.2)] border-[#FF6881]",
      BgColor: "bg-[#FEF2F4]",
    },
    {
      icon: icon3,
      text: "Personal Development",
      iconColor: "bg-[rgba(0,188,101,0.2)] border-[#00BC65]",
      BgColor: "bg-[#EEFBF5]",
    },
  ],
  [
    {
      icon: icon4,
      text: "Grammar & vocabulary",
      iconColor: "bg-[rgba(242,167,0,0.2)] border-[#F2A700]",
      BgColor: "bg-[#FFFAEF]",
    },
    {
      icon: icon5,
      text: "Story writing",
      iconColor: "bg-[rgba(69,0,208,0.2)] border-[#4500D0]",
      BgColor: "bg-[#F7F3FF]",
    },
    {
      icon: icon6,
      text: "Excellent Reading",
      iconColor: "bg-[rgba(187,0,100,0.2)] border-[#BB0064]",
      BgColor: "bg-[#FFF0F8]",
    },
  ],
  [
    {
      icon: icon7,
      text: "Creative performance",
      iconColor: "bg-[rgba(0,17,187,0.2)] border-[#0011BB]",
      BgColor: "bg-[#F3F4FE]",
    },
    {
      icon: icon8,
      text: "Creative Expression ",
      iconColor: "bg-[rgba(209,105,0,0.2)] border-[#D16900]",
      BgColor: "bg-[#FFF7EF]",
    },
    {
      icon: icon9,
      text: "Content creation",
      iconColor: "bg-[rgba(0,169,237,0.2)] border-[#00A9ED]",
      BgColor: "bg-[#F1FBFF]",
    },
  ],
];

// Utility: extract the number for animation, and suffix (K, +, etc)
function parseStatTitle(title: string) {
  const match = title.match(/^([\d,.]+)([a-zA-Z+]+)?/); // e.g. "10K+" => ["10K+", "10", "K+"]
  if (!match) return { number: null, suffix: title };
  const number = parseFloat(match[1].replace(/,/g, ''));
  const suffix = match[2] || "";
  return { number, suffix };
}

const Stats = ({
  bgColor,
  stats,
}: {
  bgColor: string;
  stats: StatItem[];
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Animate when 20% in view
  });

  return (
    <section className="relative w-full py-20 h-auto text-black overflow-hidden">
      {/* Section Heading */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 flex flex-col items-center text-center mb-10">
        <h2 className="text-2xl">What your child will learn</h2>
      </div>

      {/* Grid Boxes */}
      <div className="container mx-auto px-6 md:px-10 space-y-8">
        {boxData.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {row.map((item, colIndex) => (
              <div
                key={colIndex}
                className={`${item.BgColor} p-6 flex items-center space-x-4`}
              >
                <div
                  className={`w-14 h-14 flex items-center justify-center ${item.iconColor} border-2 border-dotted  text-white p-4 rounded-full text-xl`}
                >
                  <Image
                    src={item.icon}
                    alt={item.text}
                    width={20}
                    height={20}
                  />
                </div>
                <p className="text-base font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Stats Section - Responsive */}
      <div
        ref={ref}
        className={`${bgColor} rounded-lg sm:rounded-full mt-20 mx-4 sm:mx-8 md:mx-[120px] xlg:mx-[170px]`}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-10 py-6 sm:py-8">
          <div className="flex flex-wrap justify-between items-center gap-y-6">
            {stats.map((item: StatItem, idx: number) => {
              // If it's a numeric stat, animate it
              const { number, suffix } = parseStatTitle(item.title);

              return (
                <div
                  key={idx}
                  className="text-white flex flex-col sm:flex-row items-center sm:gap-4 text-center sm:text-left min-w-[180px]"
                >
                  <div className="bg-white h-12 w-12 sm:h-14 sm:w-14 flex justify-center items-center rounded-full mb-2 sm:mb-0">
                    <Image src={item.icon} alt="icon" width={20} height={20} />
                  </div>
                  <div className="flex flex-col text-black">
                    <h2 className="text-xl sm:text-2xl font-semibold flex items-center justify-center sm:justify-start">
                      {number != null && !isNaN(number) ? (
                        <>
                          <CountUp
                            end={inView ? number : 0}
                            duration={1.5}
                            separator=","
                          />
                          {suffix}
                        </>
                      ) : (
                        item.title
                      )}
                    </h2>
                    <p className="text-xs sm:text-sm">{item.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Stats };
