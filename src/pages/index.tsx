import About from "@/components/home/About";
import ArticlesBtn from "@/components/home/ArticlesBtn";
import Education from "@/components/home/Education";
import WorkExperience from "@/components/home/WorkExperience";
import Layout from "@/layout/Layout";
import { ReactElement } from "react";

export default function Home() {
  return (
    <div>
      <About />
      <WorkExperience />
      <Education />
      <ArticlesBtn />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
