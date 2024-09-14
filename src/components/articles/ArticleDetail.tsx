import Image from "next/image";
import adminImg from "@/assets/article/admin2.jpg";
import { PiCrownSimpleFill } from "react-icons/pi";
import { HiOutlineDotsVertical } from "react-icons/hi";

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

const ArticleDetail = ({ article }: { article: IArticleData }) => {
  return (
    <div>
      {/* Admin part */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="w-[50px]">
            <Image src={adminImg} alt="" />
          </div>
          <div className="flex items-center gap-1">
            <span>Admin</span>
            <PiCrownSimpleFill />
            {"."}
          </div>
          <span>{article.date}</span> {"."}
          <span>{article.time}</span>
        </div>
        <div>
          <HiOutlineDotsVertical />
        </div>
      </div>
      {/* Title and Image */}
      <div>
        <h2 className="capitalize italic text-[12px] md:text-[40px] baskervville-font mb-6">
          {article.title}
        </h2>
        <p className="mb-4 text-base font-semibold">{article.shortDes}</p>
        <div className="w-full h-full overflow-hidden">
          {" "}
          <Image
            className="w-full h-full object-cover"
            src={article.blogImage}
            width={500}
            height={500}
            alt=""
          />
        </div>
      </div>
      {/* Paragraph */}
      {article.description.map((data, index) => (
        <div key={index} className="flex flex-col gap-4 text-lg">
          <div className="italic text-2xl mt-4 border-l-4 border-gray pl-2">
            {" "}
            {data.quote}
          </div>
          <div className="font-semibold">{data.title}</div>
          <div className=""> {data.paragraph}</div>
        </div>
      ))}
    </div>
  );
};

export default ArticleDetail;
