import Image from "next/image";
import { PiCrownSimpleFill } from "react-icons/pi";
import adminImg from "@/assets/article/admin2.jpg";
import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import SocialIcon from "../common/SocialIcon";

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
const ArticlesCard = ({ articleData }: { articleData: IArticleData[] }) => {
  const [likedArticles, setLikedArticles] = useState<number[]>([]);

  const toggleLike = (articleId: number) => {
    setLikedArticles((prevLiked) =>
      prevLiked.includes(articleId)
        ? prevLiked.filter((id) => id !== articleId)
        : [...prevLiked, articleId]
    );
  };
  return (
    <div>
      {articleData?.map((data, index) => (
        <div
          // href={`/articles/${data.articleId}`}
          key={index}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-10 mx-4 md:mx-10 border border-lightGray"
        >
          {/* Card Image */}
          <Link
            href={`/articles/${data.articleId}`}
            className="w-full h-full overflow-hidden"
          >
            <Image
              className="w-full h-full object-cover"
              src={data.blogImage}
              alt="image"
              width={500}
              height={300}
              priority
            />
          </Link>
          {/* Card Text */}
          <div className="p-4 relative">
            <div className="flex justify-between items-center mb-4 lg:mb-6">
              <div className="flex items-center">
                <div className="w-[50px]">
                  <Image src={adminImg} alt="" />
                </div>
                <div className="">
                  <div className="flex items-center gap-2">
                    <span>Admin</span>
                    <PiCrownSimpleFill />
                  </div>
                  <div className="text-sm">
                    <span>{data.date}</span> {"."} <span>{data.time}</span>
                  </div>
                </div>
              </div>
              <div>
                <SocialIcon />
              </div>
            </div>
            <Link href={`/articles/${data.articleId}`}>
              <h2 className="capitalize italic text-[24px] mb-4 baskervville-font">
                {data.title}
              </h2>
              <p className="mb-4">{data.shortDes}...</p>
            </Link>
            <div className="lg:absolute bottom-4 w-[90%] m-auto">
              <div className="flex justify-between items-center border-t border-semiGray ">
                <div className="flex gap-4 mt-2">
                  <p>0 vue</p>
                  <p>0 comments</p>
                </div>
                <div className="flex justify-end text-lg text-red mt-2">
                  <button onClick={() => toggleLike(data.articleId)}>
                    {likedArticles.includes(data.articleId) ? (
                      <FaHeart />
                    ) : (
                      <FaRegHeart />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticlesCard;
