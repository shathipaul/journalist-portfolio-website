import Link from "next/link";
import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const menuData = [
    { name: "Home", link: "/" },
    { name: "Articles", link: "/articles" },
  ];
  return (
    <div className="bg-secondary py-4 ps-10 md:ps-20 lg:ps-40">
      {menuData.map((data, index) => (
        <Link
          key={index}
          href={data.link}
          className="px-4 text-base font-medium"
        >
          {data.name}
        </Link>
      ))}
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </div>
  );
};

export default Navbar;
