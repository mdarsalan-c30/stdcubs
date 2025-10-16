import Head from "next/head";

export const metadata = {
  title: "Website Development for Students | Studycubs",
  description:
    "Empower students with hands-on website development skills. Learn HTML, CSS, JavaScript, and build real projects. Perfect for 7th grade to UG students.",
  keywords: [
    "Website Development for students",
    "Learn Web Development",
    "HTML CSS JavaScript for kids",
    "Web Design for beginners",
    "Coding for students",
  ],
  authors: [{ name: "Studycubs", url: "https://Studycubs.com" }],
  openGraph: {
    title: "Website Development for Students | Studycubs",
    description:
      "Our interactive course helps students master website development with hands-on projects in HTML, CSS, and JavaScript.",
    url: "https://Studycubs.com/website-development",
    siteName: "Studycubs",
    images: [
      {
        url: "https://Studycubs.com/website-development.png",
        width: 1200,
        height: 630,
        alt: "Website Development Course - Studycubs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development for Students | Studycubs",
    description:
      "Engaging website development course for students to build confidence in coding and web design.",
    images: ["https://Studycubs.com/website-development.png"],
  },
  alternates: {
    canonical: "https://Studycubs.com/website-development",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Website Development for Students",
            description:
              "Empower students with hands-on website development skills. Learn HTML, CSS, JavaScript, and build real projects. Perfect for 7th grade to UG students.",
            provider: {
              "@type": "Organization",
              name: "Studycubs",
              url: "https://Studycubs.com",
            },
            educationalLevel: "7th Grade - UG",
            offers: {
              "@type": "Offer",
              price: "1999",
              priceCurrency: "INR",
              url: "https://Studycubs.com/website-development",
              availability: "https://schema.org/InStock",
            },
          })}
        </script>
      </Head>
      {children}
    </>
  );
}
