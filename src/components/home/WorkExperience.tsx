const WorkExperience = () => {
  const workData = [
    {
      timeLine: "2021-Today",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur cum obcaecati aperiam odit libero repellendus ducimus vel ipsa et ratione.",
    },
    {
      timeLine: "2019-2021",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur cum obcaecati aperiam odit libero repellendus ducimus vel ipsa et ratione.",
    },
    {
      timeLine: "2016-2019",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur cum obcaecati aperiam odit libero repellendus ducimus vel ipsa et ratione.",
    },
  ];
  return (
    <div className="max-w-[280px] md:max-w-[560px] lg:max-w-[880px] m-auto mb-10">
      <div
        className="flex flex-col gap-10
     justify-center items-center py-10 px-4 border-4 border-secondary"
      >
        <h2 className="capitalize italic text-[28px] md:text-[35px] baskervville-font">
          Work experience
        </h2>
        {workData.map((data, index) => (
          <div key={index} className="md:max-w-[440px]">
            <p className="text-center pb-4 font-semibold">{data.timeLine}</p>
            <p className="text-center">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
