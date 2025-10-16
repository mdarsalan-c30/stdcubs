import {
  FaLightbulb,
  FaBrain,
  FaUsers,
  FaBook,
  FaPencilAlt,
  FaFlask,
  FaRobot,
  FaPython,
  FaDatabase,
  FaShieldAlt,
  FaChartLine,
  FaPiggyBank,
  FaBalanceScale,
  FaGraduationCap,
  FaCalculator,
} from "react-icons/fa";
import { GiSpellBook, GiGrowth } from "react-icons/gi";
import {
  MdModelTraining,
  MdAttachMoney,
  MdOutlineCalculate,
} from "react-icons/md";
import { IoSchool, IoBarChartSharp, IoWallet } from "react-icons/io5";
import icon1 from "../assets/images/icon1.webp";
import icon2 from "../assets/images/icon2.webp";
import icon3 from "../assets/images/icon3.webp";
import icon4 from "../assets/images/icon4.webp";
import icon5 from "../assets/images/icon5.webp";
import icon6 from "../assets/images/icon6.webp";
import icon7 from "../assets/images/icon7.webp";
import icon8 from "../assets/images/icon8.webp";
import icon9 from "../assets/images/icon9.webp";
import Stud from "../assets/images/stud.webp";

const publicSpeakingBoxData = [
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
// --- DATA FOR PUBLIC SPEAKING ---
const publicSpeakingHighlights = {
  title: "Skills You'll Master in Public Speaking",
  statsBgColor: "bg-[#704FE6]",
  boxData: publicSpeakingBoxData,
  stats: [
    { icon: GiGrowth, title: "300%+", subtitle: "Confidence Boost" },
    { icon: FaUsers, title: "5k+", subtitle: "Students Trained" },
    { icon: MdModelTraining, title: "50+", subtitle: "Expert Mentors" },
  ],
};

// --- DATA FOR ARTIFICIAL INTELLIGENCE ---
const aiHighlights = {
  title: "What You'll Learn in Artificial Intelligence",
  statsBgColor: "bg-[#2AB7CA]",
  boxData: [
    [
      {
        icon: FaRobot,
        text: "Core AI & Machine Learning Concepts",
        iconColor: "bg-[rgba(42,183,202,0.2)] border-[#2AB7CA]",
        bgColor: "bg-[#F0FAFB]",
      },
      {
        icon: FaPython,
        text: "Python Programming for AI",
        iconColor: "bg-[rgba(42,183,202,0.2)] border-[#2AB7CA]",
        bgColor: "bg-[#F0FAFB]",
      },
      {
        icon: FaDatabase,
        text: "Data Analysis & Interpretation",
        iconColor: "bg-[rgba(42,183,202,0.2)] border-[#2AB7CA]",
        bgColor: "bg-[#F0FAFB]",
      },
    ],
    [
      {
        icon: FaBrain,
        text: "Building Neural Networks",
        iconColor: "bg-[rgba(42,183,202,0.2)] border-[#2AB7CA]",
        bgColor: "bg-[#F0FAFB]",
      },
      {
        icon: FaLightbulb,
        text: "Creative Problem Solving with AI",
        iconColor: "bg-[rgba(42,183,202,0.2)] border-[#2AB7CA]",
        bgColor: "bg-[#F0FAFB]",
      },
      {
        icon: FaShieldAlt,
        text: "Understanding AI Ethics & Safety",
        iconColor: "bg-[rgba(42,183,202,0.2)] border-[#2AB7CA]",
        bgColor: "bg-[#F0FAFB]",
      },
    ],
  ],
  stats: [
    { icon: FaRobot, title: "20+", subtitle: "Projects Built" },
    { icon: FaLightbulb, title: "100+", subtitle: "Innovative Ideas" },
    { icon: FaPython, title: "10k+", subtitle: "Lines of Code" },
  ],
};

// --- DATA FOR ACADEMICS (1st - 10th) ---
const academicsHighlights = {
  title: "Foundational Skills for Academic Excellence",
  statsBgColor: "bg-[#FF6F61]",
  boxData: [
    [
      {
        icon: MdOutlineCalculate,
        text: "Core Mathematics & Algebra",
        iconColor: "bg-[rgba(255,111,97,0.2)] border-[#FF6F61]",
        bgColor: "bg-[#FFF4F3]",
      },
      {
        icon: FaBook,
        text: "English Reading & Grammar",
        iconColor: "bg-[rgba(255,111,97,0.2)] border-[#FF6F61]",
        bgColor: "bg-[#FFF4F3]",
      },
      {
        icon: FaFlask,
        text: "Science & Social Studies Fundamentals",
        iconColor: "bg-[rgba(255,111,97,0.2)] border-[#FF6F61]",
        bgColor: "bg-[#FFF4F3]",
      },
    ],
    [
      {
        icon: FaPencilAlt,
        text: "Creative & Expository Writing",
        iconColor: "bg-[rgba(255,111,97,0.2)] border-[#FF6F61]",
        bgColor: "bg-[#FFF4F3]",
      },
      {
        icon: FaBrain,
        text: "Critical Thinking & Problem Solving",
        iconColor: "bg-[rgba(255,111,97,0.2)] border-[#FF6F61]",
        bgColor: "bg-[#FFF4F3]",
      },
      {
        icon: GiSpellBook,
        text: "Effective Study & Exam Skills",
        iconColor: "bg-[rgba(255,111,97,0.2)] border-[#FF6F61]",
        bgColor: "bg-[#FFF4F3]",
      },
    ],
  ],
  stats: [
    { icon: IoSchool, title: "10", subtitle: "Grades Covered" },
    { icon: FaUsers, title: "10k+", subtitle: "Students Enrolled" },
    { icon: Stud, title: "95%", subtitle: "Parent Satisfaction" },
  ],
};

// --- DATA FOR FINANCIAL PLANNING ---
const financialPlanningHighlights = {
  title: "Essential Skills for Financial Literacy",
  statsBgColor: "bg-[#FFBC36]",
  boxData: [
    [
      {
        icon: FaPiggyBank,
        text: "Effective Budgeting & Saving",
        iconColor: "bg-[rgba(255,188,54,0.2)] border-[#FFBC36]",
        bgColor: "bg-[#FFF9F0]",
      },
      {
        icon: IoWallet,
        text: "Understanding Needs vs. Wants",
        iconColor: "bg-[rgba(255,188,54,0.2)] border-[#FFBC36]",
        bgColor: "bg-[#FFF9F0]",
      },
      {
        icon: FaChartLine,
        text: "Introduction to Smart Investing",
        iconColor: "bg-[rgba(255,188,54,0.2)] border-[#FFBC36]",
        bgColor: "bg-[#FFF9F0]",
      },
    ],
    [
      {
        icon: FaCalculator,
        text: "The Power of Compound Interest",
        iconColor: "bg-[rgba(255,188,54,0.2)] border-[#FFBC36]",
        bgColor: "bg-[#FFF9F0]",
      },
      {
        icon: MdAttachMoney,
        text: "Creating Financial Goals",
        iconColor: "bg-[rgba(255,188,54,0.2)] border-[#FFBC36]",
        bgColor: "bg-[#FFF9F0]",
      },
      {
        icon: FaBalanceScale,
        text: "Basics of Credit & Debt",
        iconColor: "bg-[rgba(255,188,54,0.2)] border-[#FFBC36]",
        bgColor: "bg-[#FFF9F0]",
      },
    ],
  ],
  stats: [
    { icon: FaPiggyBank, title: "50%", subtitle: "Increase in Savings" },
    { icon: IoBarChartSharp, title: "5+", subtitle: "Investment Strategies" },
    { icon: FaGraduationCap, title: "100%", subtitle: "Life-Long Skills" },
  ],
};

export {
  publicSpeakingHighlights,
  aiHighlights,
  academicsHighlights,
  financialPlanningHighlights,
};
