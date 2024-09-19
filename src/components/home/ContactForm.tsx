import { envConfig } from "@/config/envConfig";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = envConfig.MAILTO;
    const subject = form.subject.value;
    const body = form.body.value;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    console.log(mailtoLink);
    window.location.href = mailtoLink;
    form.reset();
  };

  return (
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
          name="name"
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
  );
};

export default ContactForm;
