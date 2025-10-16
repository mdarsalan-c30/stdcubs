import InternalPage from "@/components/InternalPage";
import React from "react";
import Boy from "../../assets/images/academics_boy.png"; // Replace with your relevant hero image
import HeroBG from "../../assets/images/greenBG.webp";
import Teaching from "../../assets/images/teaching.webp";
import Writing from "../../assets/images/writing.webp";
import Mobile from "../../assets/images/mobile.webp";

import { ACADEMICS_TESTIMONIALS } from "@/constants/testimonials";
import { ACADEMICS_STATS } from "@/constants/statsData";


const featureData = [
    {
        iconBg: "bg-[#FF6F61] border-[#E25850]",
        level: "Grades 1 to 4",
        list: [
            "Basic Mathematics",
            "English Reading & Writing",
            "Environmental Science",
            "Introduction to Hindi",
            "General Knowledge",
        ],
        btnColor: "bg-[#FF6F61]",
        arrowColor: "bg-[#E25850]",
        image: Teaching,
    },
    {
        iconBg: "bg-[#FFAA5C] border-[#FF8C00]",
        level: "Grades 5 to 7",
        list: [
            "Mathematics Problem Solving",
            "Advanced English Grammar",
            "Science & Social Studies",
            "Hindi Literature",
            "Creative Writing & Projects",
        ],
        btnColor: "bg-[#FFAA5C]",
        arrowColor: "bg-[#FF8C00]",
        image: Writing,
    },
    {
        iconBg: "bg-[#6FCF97] border-[#27AE60]",
        level: "Grades 8 to 10",
        list: [
            "Algebra & Geometry",
            "English Literature & Composition",
            "Physics, Chemistry, Biology",
            "History & Civics",
            "Exam Preparation & Study Skills",
        ],
        btnColor: "bg-[#6FCF97]",
        arrowColor: "bg-[#27AE60]",
        image: Mobile,
    },
];

const Academics = () => {
    return (
        <InternalPage
            heroTitle="Join our Academic Program"
            heroSubtitle="Empowering students with personalized learning experiences."
            heroImage={Boy}
            bgImage={HeroBG}
            bgColor={"bg-[#FF6F61]"}
            stats={ACADEMICS_STATS}
            featureData={featureData}
            title="Parents trust our tutors to build strong academic foundations."
            testimonials={ACADEMICS_TESTIMONIALS}
        />
    );
};

export default Academics;
