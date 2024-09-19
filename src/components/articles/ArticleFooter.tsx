import Link from "next/link";
import { useState } from "react";
import {
  FaFacebook,
  FaLinkedinIn,
  FaInstagramSquare,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
const ArticleFooter = () => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  const socialData = [
    { icon: <FaFacebook />, link: "https://www.facebook.com/" },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/shathipaul/",
    },
    {
      icon: <FaInstagramSquare />,
      link: "https://www.instagram.com/shathipaul11/",
    },
  ];
  return (
    <div className="mt-10">
      <div className="flex items-center gap-10 py-6 text-2xl border-y-2 border-semiGray ">
        {socialData.map((data, index) => (
          <Link
            key={index}
            href={data.link}
            target="_blank"
            className="text-2xl hover:text-secondary"
          >
            {data.icon}
          </Link>
        ))}
      </div>

      <div className="mt-2 flex justify-between items-center">
        <div className="flex gap-4">
          <p>0 vue</p>
          <p>0 comments</p>
        </div>
        <div className="flex justify-end text-lg text-red">
          <button onClick={toggleLike}>
            {isLiked ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleFooter;
