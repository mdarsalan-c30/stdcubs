import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";

export const metadata = {
  title: "Studycubs | Learn Smarter",
  description:
    "Studycubs offers personalized online learning for grades 3-10 in subjects like public speaking, English, and creative writing.",
  keywords:
    "online learning, personalized classes, public speaking, English grammar, creative writing, study platform, kids education, grade 3 to 10, personal growth, confidence building",
  og: {
    title: "Studycubs - Learning Made Simple!",
    description:
      "Studycubs offers personalized online classes for students in grades 3 to 10, covering essential academic and life skills. Join our community today!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studycubs - Learning Made Simple!",
    description:
      "Studycubs offers personalized online classes for students in grades 3 to 10, covering essential academic and life skills. Join our community today!",
  },
  social: {
    instagram: "https://www.instagram.com/Studycubs/",
    twitter: "https://twitter.com/Studycubs",
  },
  favicon: "/favicon.ico",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=685442414285952&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Studycubs",
              url: "https://Studycubs.com",
              description:
                "Empowering students with essential skills in public speaking, coding, and financial planning through personalized learning.",
              publisher: {
                "@type": "Organization",
                name: "Studycubs",
                logo: "https://Studycubs.com/logo.png",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Studycubs",
              url: "https://Studycubs.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pune",
                addressRegion: "Maharashtra",
                addressCountry: "India",
              },
              sameAs: [
                "https://www.facebook.com/Studycubs",
                "https://www.instagram.com/Studycubs",
                "https://www.linkedin.com/company/Studycubs",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://Studycubs.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Courses",
                  item: "https://Studycubs.com/courses",
                },
                // {
                //   "@type": "ListItem",
                //   position: 3,
                //   name: "Contact",
                //   item: "https://Studycubs.com/contact",
                // },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Courses at Studycubs",
              itemListElement: [
                {
                  "@type": "Course",
                  name: "Public Speaking",
                  description:
                    "Develop confidence in speaking, reading, and writing.",
                  provider: {
                    "@type": "EducationalOrganization",
                    name: "Studycubs",
                  },
                },
                {
                  "@type": "Course",
                  name: "Financial Planning",
                  description:
                    "Master finance and make smart investment choices.",
                  provider: {
                    "@type": "EducationalOrganization",
                    name: "Studycubs",
                  },
                },
                {
                  "@type": "Course",
                  name: "Website Development",
                  description: "Learn to build websites from scratch.",
                  provider: {
                    "@type": "EducationalOrganization",
                    name: "Studycubs",
                  },
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Will this learning platform have the same impact as regular classes?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! Studycubs provides interactive sessions that engage students just like regular classes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How will the courses offered benefit students?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our courses help students gain real-world skills in public speaking, coding, and financial literacy.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are There Live Tutoring Sessions Available?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we offer live tutoring sessions to ensure personalized learning.",
                  },
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Review",
              itemReviewed: {
                "@type": "EducationalOrganization",
                name: "Studycubs",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              author: {
                "@type": "Person",
                name: "Sangeeta Jain",
              },
              reviewBody:
                "Studycubs seems to be a promising platform for young kids to learn and grow. The teachers are great at keeping children engaged.",
            }),
          }}
        />
      </Head>
      <body className="bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>

        <Footer />
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '685442414285952');
              fbq('track', 'PageView');
            `,
          }}
        />
      </body>
    </html>
  );
}
