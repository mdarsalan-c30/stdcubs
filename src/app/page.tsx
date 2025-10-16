import AboutUs from "@/components/AboutUs";
import AboutUsBoxes from "@/components/AboutUsBoxes";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import SuperCubs from "@/components/SuperCubs";
import Testimonials from "@/components/Testimonials";
import TopCourses from "@/components/TopCourses";
import WhytoChose from "@/components/WhytoChose";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUsBoxes />
      <AboutUs />
      <Banner />
      <Stats />
      <WhytoChose />
      <Testimonials />
      <TopCourses />
      <SuperCubs />
    </>
  );
}
