const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col gap-10
     justify-center items-center py-10 px-4 my-10"
    >
      <h2 className="capitalize italic text-[28px] md:text-[35px] baskervville-font">
        About me
      </h2>

      <div className="w-full px-4 md:max-w-[580px]">
        <p className=" pb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
          facere iste! Deleniti, ab itaque est maxime quis amet exercitationem
          repellat hic assumenda quibusdam magni minus optio numquam facilis
          voluptate ratione vero labore earum dolore? Rerum eos dignissimos cum
          autem repudiandae.
        </p>
        <p className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad sed dicta
          eligendi fuga! Excepturi mollitia asperiores odit architecto eos.
          Dolorum sed, architecto at quos repudiandae, quis perspiciatis omnis
          quae mollitia praesentium nulla optio sunt doloremque minima corrupti.
          Repellat repudiandae veniam quis cupiditate quo explicabo corporis ab
          voluptatibus non, sapiente ratione.
        </p>
      </div>
    </div>
  );
};

export default About;
