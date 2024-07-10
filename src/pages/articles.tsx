import Layout from "@/layout/Layout";
import { ReactElement } from "react";

const Articles = () => {
  return <div>Articles</div>;
};

export default Articles;

Articles.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
