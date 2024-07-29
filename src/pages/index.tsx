import About from "@/components/home/About";
import ArticlesBtn from "@/components/home/ArticlesBtn";
import Banner from "@/components/home/Banner";
import Contact from "@/components/home/Contact";
import Education from "@/components/home/Education";
import WorkExperience from "@/components/home/WorkExperience";
import Layout from "@/layout/Layout";
import { ReactElement } from "react";

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <WorkExperience />
      <div className="border border-secondary w-20 m-auto rotate-[270deg]"></div>
      <Education />
      <div className="border border-secondary w-20 m-auto rotate-[270deg]"></div>
      <ArticlesBtn />
      <div className="border border-secondary w-20 m-auto rotate-[270deg]"></div>
      <Contact />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
