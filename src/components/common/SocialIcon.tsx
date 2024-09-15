import { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaLink } from "react-icons/fa";

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
              <FaFacebookF className="hover:text-secondary" />
              <FaLinkedinIn className="hover:text-secondary" />
              <FaTwitter className="hover:text-secondary" />
              <FaLink className="hover:text-secondary" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialIcon;
