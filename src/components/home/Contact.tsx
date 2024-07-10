import Link from "next/link";
import { FaFacebook, FaLinkedinIn, FaInstagramSquare } from "react-icons/fa";
import ContactForm from "./ContactForm";
const Contact = () => {
  const contactData = [
    {
      street: "500 Terry Francine St.",
      road: "San Francisco, CA 94158",
      email: "info@mysite.com",
      tel: "Tel: 123-456-7890",
    },
  ];
  const socialData = [
    { icon: <FaFacebook />, link: "https://www.facebook.com/" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
    { icon: <FaInstagramSquare />, link: "https://www.instagram.com/" },
  ];
  return (
    <div className="max-w-[280px] md:max-w-[560px] lg:max-w-[880px] m-auto my-10">
      <div className="flex flex-col gap-10 items-center py-10 px-4 border-4 border-secondary">
        <h2 className="capitalize italic text-[28px] md:text-[35px] baskervville-font">
          Contact me
        </h2>
        {contactData.map((data, index) => (
          <div key={index}>
            <p className="text-center">{data.street}</p>
            <p className="text-center pb-4">{data.road}</p>
            <p className="text-center">{data.email}</p>
            <p className="text-center">{data.tel}</p>
          </div>
        ))}
        <div className="flex gap-6 justify-center ">
          {socialData.map((data, index) => (
            <Link key={index} href={data.link} className="text-2xl">
              {data.icon}
            </Link>
          ))}
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
