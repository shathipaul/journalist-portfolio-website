import Link from "next/link";
import { Fade as Hamburger } from "hamburger-react";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const menuData = [
    { name: "Home", link: "/" },
    { name: "Articles", link: "/articles" },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      document.body.insertAdjacentHTML(
        "beforeend",
        '<div id="overlay" class="fixed inset-0 bg-black bg-opacity-50 z-40"></div>'
      );
    } else {
      document.body.classList.remove("overflow-hidden");
      const overlay = document.getElementById("overlay");
      if (overlay) overlay.remove();
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      const overlay = document.getElementById("overlay");
      if (overlay) overlay.remove();
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="container bg-secondary relative">
      <div className="hidden md:block py-6 md:ps-20 lg:ps-48">
        {menuData.map((data, index) => (
          <Link
            key={index}
            href={data.link}
            className={`px-4 font-medium ${
              router.pathname === data.link ? "text-primary" : "text-gray"
            }`}
          >
            {data.name}
          </Link>
        ))}
      </div>
      <div className="md:hidden">
        <div className="flex justify-end pe-4">
          <Hamburger size={26} toggled={isOpen} toggle={setOpen} />
        </div>
        <div
          ref={menuRef}
          id="mobile-menu"
          className={`bg-white fixed top-0 z-50 pt-10 flex flex-col w-3/4 h-screen ${
            isOpen ? "left-0" : "-left-full"
          } duration-700 ease-in-out`}
        >
          {menuData.map((data, index) => (
            <Link
              key={index}
              href={data.link}
              className="py-4 px-10 text-base font-medium"
              onClick={() => setOpen(false)}
            >
              {data.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
