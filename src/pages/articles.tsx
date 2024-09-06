import ArticlesCard from "@/components/articles/ArticlesCard";
import Layout from "@/layout/Layout";
import { ReactElement } from "react";

const Articles = () => {
  return (
    <div>
      <ArticlesCard />
    </div>
  );
};

export default Articles;

Articles.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
