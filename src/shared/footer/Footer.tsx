import footerLogo from "@/assets/footer/logo.png";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="container flex flex-col justify-center items-center gap-4 text-sm py-4 px-4">
      <div>
        <Image width={20} src={footerLogo} alt="" />
      </div>
      © 2024 by Jessica Priston. All rights are reserved
    </div>
  );
};

export default Footer;
