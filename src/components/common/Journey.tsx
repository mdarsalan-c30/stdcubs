import React from "react";
import Earth from "../../assets/images/earth.webp";
import Image from "next/image";

const steps = [
  {
    number: "01",
    bgColor: "bg-[#2AB7CA]",
    class: "Class : 15hrs",
    activity: "Activity : 1 Class",
    batch: "Batch size : 1:5",
    level: "Beginner Level",
    btnBG: "bg-[#0097B2]",
  },
  {
    number: "02",
    bgColor: "bg-[#FFBC36]",
    class: "Class : 20hrs",
    activity: "Activity : 2 Classes",
    batch: "Batch size : 1:4",
    level: "Intermediate Level",
    btnBG: "bg-[#FFAA00]",
  },
  {
    number: "03",
    bgColor: "bg-[#7150E4]",
    class: "Class : 30hrs",
    activity: "Activity : 3 Classes",
    batch: "Batch size : 1:3",
    level: "Advanced Level",
    btnBG: "bg-[#5843BE]",
  },
];

const Journey = () => {
  return (
    <section className="relative bg-[#F3F5F4] w-full py-20 text-black overflow-hidden">
      {/* Section Heading */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 flex flex-col items-center text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold max-w-xl leading-tight">
          Start your confidence boosting journey
        </h2>
      </div>

      {/* Three Columns */}
      <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-36">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`${step.bgColor} text-white rounded-xl p-6 flex flex-col items-start text-left shadow-md`}
          >
            <h2 className="text-7xl font-bold text-[#fff] mb-4">
              {step.number}
            </h2>
            <div className="space-y-1 mb-6">
              <p className="text-base">{step.class}</p>
              <p className="text-base">{step.activity}</p>
              <p className="text-base">{step.batch}</p>
            </div>
            <button
              className={`${step.btnBG} text-white px-4 py-2 rounded-full text-sm transition`}
            >
              {step.level}
            </button>
          </div>
        ))}
      </div>
      <Image
        src={Earth}
        alt="earth"
        className="relative top-[-80px] w-20 h-20 left-5"
      />
    </section>
  );
};

export default Journey;
