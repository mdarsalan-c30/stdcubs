import Head from "next/head";

import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Public Speaking Course - Studycubs",
  description:
    "Master the art of public speaking with our expert-led course. Improve your confidence and speaking skills today!",
  keywords: [
    "Public Speaking",
    "Speaking Skills",
    "Confidence Building",
    "Studycubs",
  ],
  openGraph: {
    title: "Public Speaking Course - Studycubs",
    description:
      "Master the art of public speaking with our expert-led course. Improve your confidence and speaking skills today!",
    url: "https://Studycubs.com/public-speaking",
    type: "website",
    images: [
      {
        url: "https://Studycubs.com/images/public-speaking.png",
        width: 1200,
        height: 630,
        alt: "Public Speaking Course",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Public Speaking Course - Studycubs",
    description:
      "Master the art of public speaking with our expert-led course.",
    images: ["https://Studycubs.com/images/public-speaking.png"],
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
            name: "Public Speaking Course",
            description:
              "Master the art of public speaking with our expert-led course.",
            provider: {
              "@type": "Organization",
              name: "Studycubs",
              url: "https://Studycubs.com",
            },
          })}
        </script>
      </Head>
      {children}
    </>
  );
}
