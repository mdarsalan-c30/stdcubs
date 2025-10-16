import InternalPage from "@/components/InternalPage";
import React from "react";
import Boy from "../../assets/images/writingBoy.webp";
import HeroBG from "../../assets/images/yellowBG.webp";
import Teaching from "../../assets/images/teaching.webp";
import Writing from "../../assets/images/writing.webp";
import Mobile from "../../assets/images/mobile.webp";

import { FINANCIAL_TESTIMONIALS } from "@/constants/testimonials";
import { FINANCIAL_STATS } from "@/constants/statsData";


const featureData = [
  {
    iconBg: "bg-[#FFBC36] border-[#1B75E8]",
    level: "Beginner level",
    list: [
      "Story Telling",
      "Reading Foundation ",
      "Beginning to write",
      "Conversation skills",
      "Grammar & vocabulary",
    ],
    btnColor: "bg-[#FFBC36]",
    arrowColor: "bg-[#F0B235]",
    image: Teaching,
  },
  {
    iconBg: "bg-[#FFBC36] border-[#FF6881]",
    level: "Intermediate Level",
    list: [
      "Improving my writing ",
      "active listening",
      "Creative performance",
      "Story Writing",
      "Voice& Fluency",
    ],
    btnColor: "bg-[#FFBC36]",
    arrowColor: "bg-[#F0B235]",
    image: Writing,
  },
  {
    iconBg: "bg-[#FFBC36] border-[#00BC65]",
    level: "Advanced Level",
    list: [
      "Logical & critical thinking",
      "Non fiction writer",
      "Social emotional skills",
      "creative expression",
      "Presentation skills",
    ],
    btnColor: "bg-[#FFBC36]",
    arrowColor: "bg-[#F0B235]",
    image: Mobile,
  },
];

const FinancialPlanning = () => {
  return (
    <InternalPage
      heroTitle="Join our Financial Planning Program"
      heroSubtitle="Empowering students with personalized financial literacy experiences."
      heroImage={Boy}
      bgImage={HeroBG}
      bgColor={"bg-[#FFBC36]"}
      stats={FINANCIAL_STATS}
      featureData={featureData}
      title="Creating A Community Of Life Long Learners."
      testimonials={FINANCIAL_TESTIMONIALS} // Pass testimonials here
    />
  );
};

export default FinancialPlanning;
