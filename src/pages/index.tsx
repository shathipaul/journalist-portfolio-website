import OpacityAnimation from "@/components/animation/OpacityAnimation";
import About from "@/components/home/About";
import ArticlesBtn from "@/components/home/ArticlesBtn";
import Banner from "@/components/home/Banner";
import Contact from "@/components/home/Contact";
import Education from "@/components/home/Education";
import WorkExperience from "@/components/home/WorkExperience";
import Layout from "@/layout/Layout";
import SideNav from "@/shared/navbar/SideNav";
import { ReactElement } from "react";

export default function Home() {
  return (
    <OpacityAnimation>
      <div className="relative">
        <SideNav />
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
    </OpacityAnimation>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
