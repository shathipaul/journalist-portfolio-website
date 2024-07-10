import About from "@/components/home/About";
import Layout from "@/layout/Layout";
import { ReactElement } from "react";

export default function Home() {
  return (
    <div>
      <About />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
