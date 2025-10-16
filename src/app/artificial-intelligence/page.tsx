import InternalPage from "@/components/InternalPage";
import React from "react";
import Boy from "../../assets/images/codingBoy.webp";
import HeroBG from "../../assets/images/greenBG.webp";
import Teaching from "../../assets/images/teaching.webp";
import Writing from "../../assets/images/writing.webp";
import Mobile from "../../assets/images/mobile.webp";
import { AI_TESTIMONIALS } from "@/constants/testimonials";
import { AI_STATS } from "@/constants/statsData";

const featureData = [
  {
    iconBg: "bg-[#2AB7CA] border-[#1B75E8]",
    level: "Beginner level",
    list: [
      "Story Telling",
      "Reading Foundation ",
      "Beginning to write",
      "Conversation skills",
      "Grammar & vocabulary",
    ],
    btnColor: "bg-[#2AB7CA]",
    arrowColor: "bg-[#0097B2]",
    image: Teaching,
  },
  {
    iconBg: "bg-[#2AB7CA] border-[#FF6881]",
    level: "Intermediate Level",
    list: [
      "Improving my writing ",
      "active listening",
      "Creative performance",
      "Story Writing",
      "Voice& Fluency",
    ],
    btnColor: "bg-[#2AB7CA]",
    arrowColor: "bg-[#0097B2]",
    image: Writing,
  },
  {
    iconBg: "bg-[#2AB7CA] border-[#00BC65]",
    level: "Advanced Level",
    list: [
      "Logical & critical thinking",
      "Non fiction writer",
      "Social emotional skills",
      "creative expression",
      "Presentation skills",
    ],
    btnColor: "bg-[#2AB7CA]",
    arrowColor: "bg-[#0097B2]",
    image: Mobile,
  },
];

const AI = () => {
  return (
    <InternalPage
      heroTitle="Empower Your Child with AI Skills"
      heroSubtitle="Join our AI course to equip your child with the skills of the future."
      heroImage={Boy}
      bgImage={HeroBG}
      bgColor={"bg-[#2AB7CA]"}
      stats={AI_STATS}
      featureData={featureData}
      title="Creating A Community Of Life Long Learners."
      testimonials={AI_TESTIMONIALS}
    />
  );
};

export default AI;
