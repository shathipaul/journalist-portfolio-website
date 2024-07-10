const ContactForm = () => {
  return (
    <div className="w-[240px] md:w-[380px] lg:w-[560px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
        <div>
          {" "}
          <label className="block">Enter your name</label>
          <input
            className="w-full my-2 border px-2 py-2 focus:outline-none"
            placeholder="Name"
            required
          />
        </div>
        <div>
          {" "}
          <label className="block">Enter your email *</label>
          <input
            className="w-full my-2 border px-2 py-2 focus:outline-none"
            placeholder="Email"
            required
          />
        </div>
      </div>
      <div>
        {" "}
        <label className="block">Enter your subject</label>
        <input
          className="w-full my-2 border px-2 py-2 focus:outline-none"
          placeholder="Subject"
          required
        />
      </div>
      <div className="w-full">
        {" "}
        <label className="block">Enter your message</label>
        <input
          className="w-full my-2 border px-2 pt-2 pb-20 focus:outline-none"
          placeholder="Message"
          required
        />
      </div>
      <button className="bg-black w-full text-white text-center py-2 my-2">
        Submit
      </button>
    </div>
  );
};

export default ContactForm;
