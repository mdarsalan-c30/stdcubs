import React from "react";
import Hero from "./common/Hero";
import { Stats } from "./common/Stats";
import Journey from "./common/Journey";
import Features from "./common/Features";
import Testimonials from "./common/Testimonials";
import { InternalPageProps } from "../../types/data";

const InternalPage: React.FC<InternalPageProps> = ({
  heroImage,
  bgImage,
  bgColor,
  stats,
  featureData,
  title,
  testimonials,
  heroTitle,
  heroSubtitle
}) => {
  return (
    <>
      <Hero bgImage={bgImage} heroImage={heroImage} title={heroTitle} subtitle={heroSubtitle} />
      <Stats bgColor={bgColor} stats={stats} />
      <Journey />
      <Features featureData={featureData} />
      <Testimonials title={title} testimonials={testimonials} />
    </>
  );
};

export default InternalPage;
