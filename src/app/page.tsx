import { HomeContent } from "@/components/home/HomeContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Truong Hoang Anh — Backend Engineer",
  description:
    "Backend Engineer with 4+ years of experience in Node.js, NestJS, Ruby on Rails, GCP, and AWS. Available for freelance projects.",
};

export default function Home() {
  return <HomeContent />;
}
