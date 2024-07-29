import Image from "next/image";
import image from "@/assets/banner/img3.jpg";

const Banner = () => {
  return (
    <div className="bg-secondary lg:h-screen flex flex-col-reverse lg:flex-row  items-center justify-center gap-4 lg:gap-0 py-8 lg:py-0">
      <div className="flex flex-col items-center lg:items-end relative lg:-mr-20">
        <h1 className="text-end uppercase italic text-4xl md:text-6xl baskervville-font">
          Jessica <br /> Priston
        </h1>
        <p className="italic md:text-xl mr-4">Aspiring Journalist</p>
      </div>
      <div className="md:w-[700px]">
        {" "}
        <Image src={image} alt="" />
      </div>
    </div>
  );
};

export default Banner;
