import About from "@/components/home/About";
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
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
