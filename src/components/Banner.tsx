import Image from "next/image";
import React from "react";
import PatternBG from "../assets/images/patternBG.webp";
import TigerBoy from "../assets/images/tigerBoy.webp";

const Banner = () => {
  return (
    <section className="relative w-full h-[200px] md:h-[380px] xlg:h-[480px] overflow-hidden bg-red-500">
      {/* Background Pattern Image - Full coverage */}
      <Image
        src={PatternBG}
        alt="Hero Background"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Tiger Boy Image - Centered */}
      <div className="absolute bottom-[-70px] top-[80] xlg:top-[180] inset-0 flex items-center justify-center z-10">
        <Image
          src={TigerBoy}
          alt="Tiger Boy"
          className="object-contain w-[400px] h-[260px] md:w-[800px] md:h-[350px] xlg:w-[800px] xlg:h-[450px]"
          priority
        />
      </div>
    </section>
  );
};

export default Banner;
