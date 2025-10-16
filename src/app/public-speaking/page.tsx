import InternalPage from "@/components/InternalPage";
import React from "react";
import Boy from "../../assets/images/micBoy.webp";
import HeroBG from "../../assets/images/HeroBG2.webp";
import Teaching from "../../assets/images/teaching.webp";
import Writing from "../../assets/images/writing.webp";
import Mobile from "../../assets/images/mobile.webp";

import { PUBLIC_SPEAKING_TESTIMONIALS } from "@/constants/testimonials";
import { PUBLIC_SPEAKING_STATS } from "@/constants/statsData";

const featureData = [
  {
    iconBg: "bg-[#704FE6] border-[#1B75E8]",
    level: "Beginner level",
    list: [
      "Story Telling",
      "Reading Foundation ",
      "Beginning to write",
      "Conversation skills",
      "Grammar & vocabulary",
    ],
    btnColor: "bg-[#704FE6]",
    arrowColor: "bg-[#5843BE]",
    image: Teaching,
  },
  {
    iconBg: "bg-[#704FE6] border-[#FF6881]",
    level: "Intermediate Level",
    list: [
      "Improving my writing ",
      "active listening",
      "Creative performance",
      "Story Writing",
      "Voice& Fluency",
    ],
    btnColor: "bg-[#704FE6]",
    arrowColor: "bg-[#5843BE]",
    image: Writing,
  },
  {
    iconBg: "bg-[#704FE6] border-[#00BC65]",
    level: "Advanced Level",
    list: [
      "Logical & critical thinking",
      "Non fiction writer",
      "Social emotional skills",
      "creative expression",
      "Presentation skills",
    ],
    btnColor: "bg-[#704FE6]",
    arrowColor: "bg-[#5843BE]",
    image: Mobile,
  },
];

const PublicSpeaking = () => {
  return (
    <InternalPage
      heroTitle="Join our Public Speaking Program"
      heroSubtitle="Empowering students with personalized communication experiences."
      heroImage={Boy}
      bgImage={HeroBG}
      bgColor={"bg-[#704FE6]"}
      stats={PUBLIC_SPEAKING_STATS}
      featureData={featureData}
      title="Parents love towards studcubs"
      testimonials={PUBLIC_SPEAKING_TESTIMONIALS}
    />
  );
};

export default PublicSpeaking;
