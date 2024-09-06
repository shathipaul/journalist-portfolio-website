import { useEffect, useState } from "react";
import { FaCircle, FaRegCircle } from "react-icons/fa";

const SideNav = () => {
  const [activeSection, setActiveSection] = useState("");

  const sideMenuData = [
    { name: "About", link: "#about" },
    { name: "Work", link: "#work" },
    { name: "Education", link: "#education" },
    { name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let active = "";

      sideMenuData.forEach((data) => {
        const section = document.querySelector(data.link);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            active = data.name;
          }
        }
      });

      // Detect if we're on the banner
      const banner = document.querySelector("#banner");
      if (banner) {
        const rect = banner.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= window.innerHeight / 2) {
          active = ""; // No section active when on the banner
        }
      }

      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount to set the correct active section

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="hidden xl:block fixed top-1/2 right-6 transform -translate-y-1/2">
      <div className="flex flex-col justify-center gap-1 w-[90px]">
        {sideMenuData.map((data, index) => (
          <div key={index} className="flex items-center justify-between">
            <div
              className={`duration-700 ${
                activeSection === data.name
                  ? "opacity-100 mr-2"
                  : "opacity-0 w-0"
              }`}
            >
              {data.name}
            </div>
            {activeSection === data.name ? (
              <FaCircle size={14} />
            ) : (
              <FaRegCircle size={12} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
