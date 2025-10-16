"use client";
import Image from "next/image";
import React from "react";
import TestimonialBG from "../assets/images/TestimonialBG.webp";
import { FaBook, FaStar } from "react-icons/fa";
import { HOME_TESTIMONIALS } from "@/constants/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="relative w-full py-20 h-auto md:h-[580px] xlg:h-[650px] text-black overflow-hidden">
      <Image
        src={TestimonialBG}
        alt="Hero Background"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Section Heading */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 flex flex-col items-center text-center mb-10">
        <div className="flex items-center gap-3 mb-2">
          <FaBook color="#FFBC36" />
          <h2 className="text-[#FFBC36] font-semibold">WHY CHOOSE US</h2>
        </div>
        <h1 className="text-3xl font-bold text-[#17254E]">What Parents Say</h1>
      </div>

      {/* Carousel */}
      <div className="relative z-10 container mx-auto px-6 md:px-28">
        <Swiper
          modules={[Autoplay, Pagination, A11y]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="!pb-10"
        >
          {HOME_TESTIMONIALS.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-between h-full min-h-[250px] border border-dotted border-[#FFBC36] p-6 rounded-md bg-white bg-opacity-90 shadow-md">
                {/* Stars */}
                <div className="flex gap-1 text-[#FFBC36] mb-4">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                {/* Text */}
                <p className="text-sm text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
                  {testimonial.text}
                </p>
                {/* User Info */}
                <div className="flex items-center gap-4 mt-auto">
                  <div>
                    <p className="text-base font-semibold text-[#17254E]">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-[#2AB7CA]">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
