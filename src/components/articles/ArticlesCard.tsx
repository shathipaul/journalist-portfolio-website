import Image from "next/image";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { PiCrownSimpleFill } from "react-icons/pi";
import adminImg from "@/assets/article/admin2.jpg";
import Link from "next/link";

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
  console.log(articleData);
  return (
    <>
      {articleData?.map((data, index) => (
        <Link
          href={`/articles/${data.articleId}`}
          key={index}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-10 border border-lightGray"
        >
          {/* Card Image */}
          <div className="w-full h-full overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={data.blogImage}
              alt="image"
              width={500}
              height={300}
              priority
            />
          </div>
          {/* Card Text */}
          <div className="p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-[50px]">
                  <Image src={adminImg} alt="" />
                </div>
                <div className="">
                  <div className="flex items-center gap-2">
                    <span>Admin</span>
                    <PiCrownSimpleFill />
                  </div>
                  <div>
                    <span>{data.date}</span> {"."} <span>{data.time}</span>
                  </div>
                </div>
              </div>
              <div>
                <HiOutlineDotsVertical />
              </div>
            </div>
            <div>
              <h2 className="capitalize italic text-[12px] md:text-[24px] baskervville-font">
                {data.title}
              </h2>
              <p>{data.shortDes}...</p>
            </div>
            <div></div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ArticlesCard;
