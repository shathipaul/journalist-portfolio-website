import Layout from "@/layout/Layout";
import { ReactElement } from "react";

export default function Home() {
  return <div>Home</div>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
