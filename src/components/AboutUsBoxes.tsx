import React from "react";
import ABC from "../assets/images/abc.webp";
import School from "../assets/images/school.webp";
import Teacher from "../assets/images/teacher.webp";
import Image from "next/image";

const AboutUsBoxes = () => {
  return (
    <div className="container mx-auto px-6 py-20 bg-white">
      <div className="flex flex-col md:flex-row gap-2 md:gap-3 justify-between items-stretch">
        {/* Box 1 */}
        <div className="flex-1 bg-[#F3F5F5] p-6 rounded-3xl">
          <div className="w-14 h-14 bg-[#2AB7CA] text-white flex items-center justify-center rounded-full mb-4">
            <Image
              src={ABC}
              alt="abc"
              className="object-contain w-[35px] h-[35px]"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-[#17254E]">
            START COURSE
          </h3>
          <p className="text-sm text-gray-600">
            Engaging students with practical skills in a playful, intuitive
            environment.It’s not just a course it’s your entry into the Cubs’
            world, where every skill is an investment in a bold, confident
            future. Start your journey with StudyCubs today
          </p>
        </div>

        {/* Box 2 */}
        <div className="flex-1 bg-[#2AB7CA] p-6 rounded-3xl">
          <div className="w-14 h-14 bg-[#fff] text-[#2AB7CA] flex items-center justify-center rounded-full mb-4">
            <Image
              src={Teacher}
              alt="school"
              className="object-contain w-[35px] h-[35px]"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-[#fff]">
            EXPERT TEACHERS
          </h3>
          <p className="text-sm text-white">
            We don’t just hire top educators,we shape them into mentors, trained
            to deliver personalized, child focused learning that sparks
            confidence and growth.
          </p>
        </div>

        {/* Box 3 */}
        <div className="flex-1 bg-[#F3F5F5] p-6 rounded-3xl">
          <div className="w-14 h-14 bg-[#2AB7CA] text-white flex items-center justify-center rounded-full mb-4">
            <Image
              src={School}
              alt="teacher"
              className="object-contain w-[35px] h-[35px]"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-[#17254E]">
            STRATEGIC LOCATION
          </h3>
          <p className="text-sm text-gray-600">
            We’re creating the world’s first skill building hub combining
            offline centers and online learning for a school-like,
            growth-focused experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBoxes;
