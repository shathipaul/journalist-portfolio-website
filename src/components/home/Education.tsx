const Education = () => {
  const educationData = [
    {
      timeLine: "2014/ December",
      institution: "University Of Northwestern",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum numquam dolore maxime, odit praesentium autem enim eligendi totam aliquid ad!",
    },
    {
      timeLine: "2014/ December",
      institution: "Rutgers University",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum numquam dolore maxime, odit praesentium autem enim eligendi totam aliquid ad!",
    },
  ];
  return (
    <div className="max-w-[280px] md:max-w-[600px] m-auto mb-20">
      <div
        className="flex flex-col gap-10
     justify-center items-center py-10 px-4 border-4 border-secondary"
      >
        <h2 className="capitalize italic text-[28px] md:text-[35px] baskervville-font">
          Education
        </h2>
        {educationData.map((data, index) => (
          <div key={index} className="md:max-w-[440px]">
            <p className="text-center font-semibold">{data.timeLine}</p>
            <p className="text-center pb-4">{data.institution}</p>
            <p className="text-center">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
