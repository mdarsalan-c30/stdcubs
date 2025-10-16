import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import HeroBG from "../assets/images/footerBG.webp";
import { IoIosArrowForward } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <section className="relative w-full h-auto md:h-[500px] xlg:h-[760px] text-white overflow-hidden">
        {/* Background Image */}
        <Image
          src={HeroBG}
          alt="Hero Background"
          fill
          className="object-cover object-center z-0"
          priority
        />

        {/*contact Details */}
        <div className="relative z-10 border-b mt-5 pb-5 md:pb-0 md:mt-0 md:px-48 xlg:px-64">
          <div className="pt-5 pb-3 md:pb-5 relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="hidden md:block absolute top-0 left-1/3 h-full border-l border-white transform -translate-x-1/2"></div>
            <div className="hidden md:block absolute top-0 left-2/3 h-full border-l border-white transform -translate-x-1/2"></div>

            <div className="flex items-start ml-6 md:ml-0 gap-4">
              <div className="border border-white p-3 rounded-full flex items-center justify-center">
                <FaMapMarkerAlt className="text-white text-md" />
              </div>
              <div>
                <p className="text-[10px] uppercase text-[#2AB7CA] ">Find Us</p>
                <p className="text-sm">Pune, Maharashtra, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4 px-6">
              <div className="border border-white p-3 rounded-full flex items-center justify-center">
                <FaPhoneAlt className="text-white text-md" />
              </div>
              <div>
                <p className="text-[10px] uppercase text-[#2AB7CA] ">Phone</p>
                <p className="text-sm">(+91) 8147434014</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pl-6">
              <div className="border border-white p-3 rounded-full flex items-center justify-center">
                <MdEmail className="text-white text-md" />
              </div>
              <div>
                <p className="text-[10px] uppercase text-[#2AB7CA] ">Email</p>
                <p className="text-sm">support@studycubs.com</p>
              </div>
            </div>
          </div>
        </div>

        {/*Company Details */}
        <div className="h-full flex items-start mt-[30px] md:mt-20">
          <div className="relative z-10 container mx-auto px-6 md:px-28 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" passHref>
                <h1 className="text-3xl text-[#0097B2] font-bold font-batangas cursor-pointer">
                  Study<span className="text-[#FFBC36] font-bold">cubs</span>
                </h1>
              </Link>
              <div>
                <p className="text-[12px]">
                  StudyCubs is a skill-building platform that empowers children
                  with confidence and practical knowledge through expert
                  mentoring both online and offline.
                </p>
              </div>
              <div className="flex space-x-4 mt-3">
                <a
                  href="https://www.instagram.com/Studycubs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#4D5756] p-2 rounded-full"
                >
                  <FaInstagram className="text-xl text-[#2AB7CA] cursor-pointer hover:text-gray-300" />
                </a>
                <a
                  href="https://www.facebook.com/Studycubs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#4D5756] p-2 rounded-full"
                >
                  <FaFacebook className="text-xl text-[#2AB7CA] cursor-pointer hover:text-gray-300" />
                </a>
                <a
                  href="https://twitter.com/Studycubs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#4D5756] p-2 rounded-full"
                >
                  <FaTwitter className="text-xl text-[#2AB7CA] cursor-pointer hover:text-gray-300" />
                </a>
                <a
                  href="https://youtube.com/@Studycubs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#4D5756] p-2 rounded-full"
                >
                  <FaYoutube className="text-xl text-[#2AB7CA] cursor-pointer hover:text-gray-300" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl mb-4">Our Courses:</h3>
              <ul className="space-y-2">
                <li
                  className="hover:text-gray-300 text-[14px] cursor-pointer flex items-center gap-3"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  <IoIosArrowForward color="#fff" />
                  Public Speaking
                </li>
                <li
                  className="hover:text-gray-300  text-[14px] cursor-pointer flex items-center gap-3"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  <IoIosArrowForward color="#fff" />
                  Financial Planning
                </li>
                <li
                  className="hover:text-gray-300  text-[14px] cursor-pointer flex items-center gap-3"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  <IoIosArrowForward color="#fff" />
                  Coding
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Policies</h3>
              <ul className="space-y-2">
                <li className="hover:text-gray-300  text-[14px] cursor-pointer">
                  Privacy & Policies
                </li>
                <li className="hover:text-gray-  text-[14px] cursor-pointer">
                  Terms & Conditions
                </li>
                <li className="hover:text-gray-300  text-[14px] cursor-pointer">
                  Cancel & Refund Policy
                </li>
                <li className="hover:text-gray-300  text-[14px] cursor-pointer">
                  Community Guidelines
                </li>
              </ul>
            </div>

            <div className="mb-2">
              <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
              <div className="bg-white px-4 py-2">
                <input
                  placeholder="Enter your email:"
                  className="outline-none text-black  text-[14px]"
                />
              </div>
              <button className="bg-[#00BEAE] mt-4 px-4 py-2  text-[12px] text-white">
                SUBSCRIBE NOW
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className=" mx-auto px-6 py-4 flex justify-center md:px-32 bg-[#222222] text-white">
        <p className="font-inter text-[12px]">
          Copyright © 2025{" "}
          <a href="" className="text-[#2FC7A1]">
            Studycubs ||{" "}
          </a>{" "}
          All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
