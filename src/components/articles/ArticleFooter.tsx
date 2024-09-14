import { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaLink,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
const ArticleFooter = () => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className="mt-10">
      <div className="flex items-center gap-10 py-6 text-2xl border-y-2 border-semiGray ">
        <FaFacebookF className="hover:text-gray" />
        <FaLinkedinIn className="hover:text-gray" />
        <FaTwitter className="hover:text-gray" />
        <FaLink className="hover:text-gray" />
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
