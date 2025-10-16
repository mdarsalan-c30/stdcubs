import Image, { StaticImageData } from "next/image";
import React from "react";

interface HeroProps {
  bgImage: StaticImageData | string;
  heroImage: StaticImageData | string;
  title?: string;
  subtitle?: string;
}

const Hero: React.FC<HeroProps> = ({ heroImage, bgImage, title, subtitle }) => {
  return (
    <section className="relative w-full h-[550px] md:h-[300px] py-2 text-black overflow-hidden">
      <Image
        src={bgImage}
        alt="Hero Background"
        fill
        className="object-cover object-center z-0"
        priority
      />

      <div className="text-white relative z-20 mx-auto flex flex-col md:flex-row items-center justify-center min-h-[200px] h-full">
        <div className="relative md:left-[-55px] xlg:left-[-180px] text-center md:text-left">
          <h2 className="md:w-[450px] text-2xl text-[#fff] md:text-2xl font-bold leading-[1.3]">
            {title}
          </h2>
          <p className="mt-4 text-md md:text-md font-inter">
            {subtitle}
          </p>
        </div>
        <div className="relative md:right-[-150px] bottom-[-50px]">
          <Image
            src={heroImage}
            alt="boy"
            height={300}
            className="w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
