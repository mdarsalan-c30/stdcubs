import Image from "next/image";
import HeroBG from "../assets/images/HeroBG.webp";
import BookFreeTrialButton from "./BookFreeTrialButton";
import BlueShape from "../assets/images/BlueShape.webp";
import YellowShape from "../assets/images/YellowShape.webp";
import Boy from "../assets/images/boy.webp";
import Girl from "../assets/images/girl.webp";
import Students from "../assets/images/students.webp";

const Hero = () => {
  return (
    <section className="relative w-full h-[700px] md:h-[600px] py-16 text-black overflow-hidden">
      {/* Background Image */}
      <Image
        src={HeroBG}
        alt="Hero Background"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/*Content section */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-center min-h-[600px] h-full">
        {/* Text Content */}
        <div className="md:w-1/2 text-center relative top-[50px] md:top-0 md:text-left">
          <h2 className="font-Batangas md:w-[450px] text-2xl text-[#17254E] md:text-5xl font-bold leading-[1.3]">
            The Best Place To Learn, Play and Grow
          </h2>
          <p className="mt-4 text-md md:text-md font-inter">
            Empowering students with essential skills in public speaking,
            coding, and more. Unlock your potential with personalized learning
            at StudyCubs!
          </p>
          <div className="mt-5 hidden md:flex sm:hidden">
            <BookFreeTrialButton className="flash-button bg-[#FFBC36] px-10 py-3 rounded-full text-white text-sm hover:shadow-[0px_0px_11px_1px_#ffd930]" />
          </div>
        </div>

        {/* Image Columns */}
        <div className="md:w-1/2 -top-40 md:top-0 flex gap-6 justify-center items-center relative">
          {/* Column 1 - Boy */}
          <div className="relative top-[40px] md:top-[-60px] left-[10px] md:left-[10px] w-[140px] md:w-[160px] h-[190px] md:h-[210px]">
            {/* Yellow background shape */}
            <Image
              src={YellowShape}
              alt="Yellow Shape"
              layout="fill"
              objectFit="cover"
            />
            {/* Boy image */}
            <div className="absolute -top-7 -left-0 w-[160px] h-[240px]">
              <Image src={Boy} alt="Boy" layout="fill" objectFit="cover" />
            </div>
            {/* Bottom label */}
            <div className="absolute -bottom-[100] left-[-20px] top-[250px] flex bg-white px-6 py-3 rounded-full shadow-[0px_0px_11px_1px_rgba(0,_0,_0,_0.1)] text-xs text-[#2AB7CA]">
              <p className="flex-col mr-2">
                1k+
                <span className="flex text-black">Student</span>
              </p>
              <Image
                src={Students}
                alt="students"
                className="object-contain"
                width={100}
                height={40}
              />
            </div>
          </div>

          {/* Column 2 - Girl */}
          <div className="relative top-[180px] md:top-[60px] left-[-10px] md:left-[-10px] w-[140px] md:w-[160px] h-[170px] md:h-[190px]">
            {/* Blue background shape */}
            <Image
              src={BlueShape}
              alt="Blue Shape"
              layout="fill"
              objectFit="cover"
            />
            {/* Girl image */}
            <div className="absolute -top-12 -left-11 w-[210px] h-[240px]">
              <Image src={Girl} alt="Girl" layout="fill" objectFit="cover" />
            </div>
            {/* Top label */}
            <div className="absolute bottom-[250px] -top-[130] flex-col bg-white px-6 py-3 rounded-full shadow-[0px_0px_11px_1px_rgba(0,_0,_0,_0.1)] text-xs text-[#FF9E0E]">
              100+
              <span className="flex text-black">Public Speakers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
