import Layout from "@/layout/Layout";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";

interface IArticleData {
  articleId: number;
  date: string;
  time: string;
  title?: string;
  shortDes: string;
  quote?: string;
  paragraph?: string;
}

const ArticleDetails = () => {
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => setArticleData(data));
  }, []);
  const router = useRouter();
  const id = router.query.productId;
  return (
    <div>
      {articleData.map((data, index) => (
        <div key={index}>{data.title}</div>
      ))}
    </div>
  );
};

export default ArticleDetails;

ArticleDetails.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
