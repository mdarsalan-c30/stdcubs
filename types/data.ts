import { StaticImageData } from "next/image";
import { Timestamp } from "firebase/firestore";

export interface Comment {
  name: string;
  email: string;
  comment: string;
  createdAt: Timestamp;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  author: string;
  createdAt: Timestamp;
  tags: string[];
  imageUrl: string;
  comments: Comment[];
  status: "published" | "draft";
  seoTitle: string;
  seoDescription: string;
  canonicalUrl: string;
  ogImageUrl: string;
}

export interface PricingData {
  bgImage: StaticImageData;
  textColor: string;
  title: string;
  boyImage: StaticImageData;
  listItems: string[][];
  buttons: string[];
  buttonLabels: string[];
  bulletColor: string;
  buttonLabelColor: string;
}

export interface BoxItem {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
  hasExtraContent?: boolean;
  hasBorder?: boolean;
  classes?: number;
  activity?: number;
  imageBorder?: boolean;
  textAboveImage?: boolean;
  textDesc?: string;
  classesText?: string;
}

export interface JourneyBoxItem {
  image: StaticImageData;
  alt: string;
  text: string;
  bgColorLight: string;
  bgColorDark: string;
}

export interface Student {
  id: number;
  name: string;
  grade: string;
  imgSrc: StaticImageData;
}

export interface StatItem {
  title: string;
  subtitle: string;
  icon: StaticImageData;
}

// Define the type for a single feature item
export interface FeatureItem {
  iconBg: string;
  level: string;
  list: string[];
  btnColor: string;
  arrowColor: string;
  image: StaticImageData;
}

export interface FeaturesProps {
  featureData: FeatureItem[];
}

// Define the props for InternalPage
export interface InternalPageProps {
  heroImage: StaticImageData;
  bgImage: StaticImageData;
  bgColor: string;
  stats: StatItem[];
  featureData: FeatureItem[];
  title: string;
  testimonials: Array<{
    name: string;
    title: string;
    text: string;
  }>;
  heroTitle: string;
  heroSubtitle: string;
}
