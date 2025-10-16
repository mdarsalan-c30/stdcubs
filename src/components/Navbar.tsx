"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import BookFreeTrialButton from "./BookFreeTrialButton";
import { trackNavigation } from "@/utils/trackCustomEvent";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const locations = ["Pune Center", "Bidar Center", "Bhalki Center"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % locations.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="bg-[#0097B2] text-white py-2 px-6 flex justify-center items-center text-sm">
        {/* Working Hours */}
        <div className="flex items-center space-x-2">
          <FaClock />
          <span className="text-xs">Mon - Sat: 10:00 AM - 9:00 PM</span>
        </div>

        {/* Separator */}
        <div className="mx-4 border-l border-white h-5"></div>

        {/* Location with vertical scroll effect */}
        <div className="flex items-center space-x-2 overflow-hidden h-5 relative">
          <FaMapMarkerAlt />

          {/* Animated scroll container */}
          <div className="relative h-5 overflow-hidden w-[120px]">
            <div
              className="flex flex-col transition-transform duration-700 ease-in-out"
              style={{ transform: `translateY(-${currentIndex * 1.25}rem)` }} // 1.25rem = 20px
            >
              {locations.map((location, index) => (
                <span
                  key={index}
                  className="h-5 leading-5 text-white text-sm text-left"
                >
                  {location}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-[#fff] text-black p-2">
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" passHref>
            <h1 className="text-3xl text-[#0097B2] font-Batangas cursor-pointer">
              Study<span className="text-[#FFBC36] font-bold">cubs</span>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-16 uppercase">
            <Link
              href="/"
              className="hover:text-gray-300 text-xs font-regular"
              onClick={() => trackNavigation.home()}
            >
              Home
            </Link>
            <Link
              href="/#our-courses"
              className="hover:text-gray-300 text-xs font-regular"
              onClick={() => trackNavigation.courses()}
            >
              Courses
            </Link>
            {/* <Link
              href="/contact"
              className="hover:text-gray-300 text-xs font-regular"
              onClick={() => trackNavigation.contact()}
            >
              Contact
            </Link> */}
            <Link
              href="/#about"
              className="hover:text-gray-300 text-xs font-regular"
              onClick={() => trackNavigation.about()}
            >
              About
            </Link>
          </div>

          <div className="hidden md:flex sm:hidden">
            <BookFreeTrialButton className="flash-button bg-[#FFBC36] px-10 py-3 rounded-full text-white text-sm hover:shadow-[0px_0px_11px_1px_#ffd930]" />
          </div>

          <div className="md:hidden flex items-center space-x-4 ">
            <BookFreeTrialButton className="bg-[#FFBC36] px-3 py-2 rounded-full text-white hover:bg-[#007a90] sm:hidden max-[415px]:hidden" />
            <button onClick={() => setIsOpen(!isOpen)}>
              <GiHamburgerMenu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col items-center bg-[#fff] space-y-4 py-4">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/#our-courses" className="hover:text-gray-300">
              Courses
            </Link>
            {/* <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link> */}
            <Link href="/#about" className="hover:text-gray-300">
              About
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
