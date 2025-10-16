"use client";
import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import Star from "../assets/images/star.webp";
import { HOME_STATS } from "@/constants/statsData";

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // adjust how much visible before triggering
  });

  return (
    <div ref={ref} className="relative container mx-auto px-6 py-20 bg-white">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:divide-x md:divide-dotted md:divide-black text-center">
        {HOME_STATS.map((stat, index) => {
          const number = parseInt(stat.count);
          const suffix = stat.count.includes("+") ? "+" : "";

          return (
            <div key={index} className="px-4 flex flex-col items-center gap-3">
              <div className="relative w-20 h-20 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-dotted border-black p-2" />
                <div className="z-10 bg-[#FFBC36] w-12 h-12 flex items-center justify-center rounded-full">
                  <Image src={stat.icon} alt="icon" width={25} height={25} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#17254E]">
                {inView ? (
                  <CountUp end={number} duration={2} suffix={suffix} />
                ) : (
                  "0" + suffix
                )}
              </h3>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </div>
          );
        })}
      </div>
      <div className="absolute top-10 right-6">
        <Image src={Star} alt="star" width={40} height={40} />
      </div>
    </div>
  );
};

export default Stats;
