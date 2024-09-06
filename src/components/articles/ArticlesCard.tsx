import Image from "next/image";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { PiCrownSimpleFill } from "react-icons/pi";
import adminImg from "@/assets/article/admin2.jpg";
import image1 from "@/assets/article/img1.webp";
import image2 from "@/assets/article/img2.webp";
import image3 from "@/assets/article/img3.jpg";
import image4 from "@/assets/article/img4.jpg";
import image5 from "@/assets/article/img5.webp";
import image6 from "@/assets/article/img6.jpg";

const ArticlesCard = () => {
  const articleData = [
    {
      blogImage: image1,
      date: "21 Mar 2023",
      time: "2 mins read",
      title: "Technology of the future",
      shortDes:
        "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
    },
    {
      blogImage: image2,
      date: "21 Mar 2023",
      time: "2 mins read",
      title: "Technology of the future",
      shortDes:
        "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
    },
    {
      blogImage: image3,
      date: "21 Mar 2023",
      time: "2 mins read",
      title: "Technology of the future",
      shortDes:
        "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
    },
    {
      blogImage: image4,
      date: "21 Mar 2023",
      time: "2 mins read",
      title: "Technology of the future",
      shortDes:
        "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
    },
    {
      blogImage: image5,
      date: "21 Mar 2023",
      time: "2 mins read",
      title: "Technology of the future",
      shortDes:
        "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
    },
    {
      blogImage: image6,
      date: "21 Mar 2023",
      time: "2 mins read",
      title: "Technology of the future",
      shortDes:
        "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
    },
  ];
  return (
    <div>
      {articleData.map((data, index) => (
        <div
          key={index}
          className="flex items-center gap-4 m-10 border border-lightGray"
        >
          <div className="w-1/4">
            <Image src={data.blogImage} alt="" />
          </div>
          <div>
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
              <HiOutlineDotsVertical />
            </div>
            <div>
              <h2>{data.title}</h2>
              <p>{data.shortDes}...</p>
            </div>
            <div></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticlesCard;
