import OpacityAnimation from "@/components/animation/OpacityAnimation";
import ArticlesCard from "@/components/articles/ArticlesCard";
import Layout from "@/layout/Layout";
import React, { ReactElement, useEffect, useState } from "react";

const Articles = () => {
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => setArticleData(data));
  }, []);
  return (
    <OpacityAnimation>
      <div className="py-10 max-w-[980px] mx-auto">
        <h2 className="capitalize italic text-center text-[28px] md:text-[35px] baskervville-font">
          My Articles
        </h2>
        <ArticlesCard articleData={articleData} />
      </div>
    </OpacityAnimation>
  );
};

export default Articles;
Articles.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
