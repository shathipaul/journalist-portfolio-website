import { envConfig } from "@/config/envConfig";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    // const email = envConfig.MAILTO;
    const name = form.fullName.value;
    const subject = form.subject.value;
    const body = form.body.value;

    if (name && subject && body) {
      setTimeout(() => {
        toast.success("Thanks for messaging! I'll get back to you soon.", {
          position: "top-right",
          autoClose: 3000,
        });
      }, 1000);
    } else {
      toast.error("Please fill out all fields", {
        position: "top-right",
        autoClose: 3000,
      });
    }
    form.reset();

    // const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    //   subject
    // )}&body=${encodeURIComponent(body)}`;

    // console.log(mailtoLink);
    // window.location.href = mailtoLink;
    // form.reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-[240px] md:w-[380px] lg:w-[560px]"
      >
        <div>
          {" "}
          <label className="block">Enter your name</label>
          <input
            className="w-full my-2 border px-2 py-2 focus:outline-none"
            placeholder="Name"
            name="fullName"
            required
          />
        </div>
        <div>
          {" "}
          <label className="block">Enter your subject</label>
          <input
            className="w-full my-2 border px-2 py-2 focus:outline-none"
            placeholder="Subject"
            name="subject"
            required
          />
        </div>
        <div className="w-full">
          {" "}
          <label className="block">Enter your message</label>
          <input
            className="w-full my-2 border px-2 pt-2 pb-20 focus:outline-none"
            placeholder="Message"
            name="body"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-black w-full text-white text-center py-2 my-2"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default ContactForm;
