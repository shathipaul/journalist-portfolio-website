import ArticleDetail from "@/components/articles/ArticleDetail";
import Layout from "@/layout/Layout";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";

interface IArticleData {
  articleId: number;
  blogImage: string;
  date: string;
  time: string;
  title: string;
  shortDes: string;
  description: Array<{
    title?: string;
    quote?: string;
    paragraph: string;
  }>;
}

const ArticleDetails = () => {
  const [articleData, setArticleData] = useState<IArticleData[]>([]);
  const [article, setArticle] = useState<IArticleData | null>(null);
  const router = useRouter();
  const { articleId } = router.query;

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data: IArticleData[]) => setArticleData(data));
  }, []);

  useEffect(() => {
    if (articleId) {
      const foundArticle = articleData.find(
        (article) => article.articleId.toString() === articleId
      );
      setArticle(foundArticle || null);
    }
  }, [articleData, articleId]);

  if (!article) {
    return <p className="flex justify-center items-center">Loading...</p>;
  }

  return (
    <div className="max-w-[960px] m-auto border border-lightGray py-16 px-20 my-20">
      <ArticleDetail article={article} />
    </div>
  );
};

export default ArticleDetails;

ArticleDetails.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
