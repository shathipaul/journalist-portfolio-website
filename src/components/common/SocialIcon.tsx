import { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import {
  FaFacebook,
  FaLinkedinIn,
  FaInstagramSquare,
  FaLink,
} from "react-icons/fa";
import Link from "next/link";

const SocialIcon = () => {
  const [showIcons, setShowIcons] = useState(false);

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };
  return (
    <div>
      <div className="relative">
        {/* Dots Icon */}
        <HiOutlineDotsVertical
          onClick={toggleIcons}
          className="cursor-pointer"
        />

        {/* Social Icons */}
        {showIcons && (
          <div className="absolute right-0 mt-2 bg-white shadow-md p-2 md:p-4 rounded-md">
            <div className="flex gap-2 md:gap-4 text-lg">
              <Link href={""} target="_blank">
                <FaFacebook className="hover:text-secondary" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/shathipaul/"}
                target="_blank"
              >
                <FaLinkedinIn className="hover:text-secondary" />
              </Link>
              <Link
                href={"https://www.instagram.com/shathipaul11/"}
                target="_blank"
              >
                <FaInstagramSquare className="hover:text-secondary" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialIcon;
