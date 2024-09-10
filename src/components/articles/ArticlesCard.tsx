import Image from "next/image";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { PiCrownSimpleFill } from "react-icons/pi";
import adminImg from "@/assets/article/admin2.jpg";
import image1 from "@/assets/article/img1.webp";
import image2 from "@/assets/article/img2.webp";
import image3 from "@/assets/article/img3.jpg";
import image4 from "@/assets/article/img4.jpg";
import image5 from "@/assets/article/img5.webp";
import image6 from "@/assets/article/img6.jpg";

const ArticlesCard = () => {
  const articleData = [
    {
      blogImage: image1,
      date: "21 Mar 2023",
      time: "2 mins read",
      title: "My new office",
      shortDes:
        "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
      description: [
        {
          title: "",
          quote: "",
          paragraph:
            "Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.",
        },
        {
          title: "",
          quote:
            "Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone.",
          paragraph:
            "You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow visitors to explore more of what interests them.",
        },
        {
          title: "Create Relevant Content",
          paragraph:
            "Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags (#vacation #dream #summer) throughout your posts to reach more people, and help visitors search for relevant content. ",
        },
        {
          title: "",
          quote: "",
          paragraph:
            "Blogging gives your site a voice, so let your business’ personality shine through. Choose a great image to feature in your post or add a video for extra engagement. Are you ready to get started? Simply create a new post now.",
        },
      ],
    },
    {
      blogImage: image2,
      date: "21 Mar 2023",
      time: "2 mins read",
      title: "5 years after the financial crisis",
      shortDes:
        "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
      description: [
        {
          title: "",
          quote: "",
          paragraph:
            "Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.",
        },
        {
          title: "Design with Ease",
          quote:
            "Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone.",
          paragraph:
            "Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.",
        },
        {
          title: "Create Relevant Content",
          quote: "",
          paragraph:
            "You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow readers to explore more of what interests them. Each category of your blog has its own page that’s fully customizable. Add a catchy title, a brief description and a beautiful image to the category page header to truly make it your own. You can also add tags (#vacation #dream #summer) throughout your posts to reach more people, and help readers search for relevant content. Using hashtags can expand your post reach and help people find the content that matters to them. Go ahead, #hashtag away.",
        },
        {
          title: "Stun Your Readers",
          quote: "Be original, show off your style, and tell your story.",
          paragraph:
            "Blogging gives your site a voice, so let your business’ personality shine through. Are you a creative agency? Go wild with original blog posts about recent projects, cool inspirational ideas, or what your company culture is like. Add images, and videos to really spice it up, and pepper it with slang to keep readers interested. Are you a programmer? Stay on the more technical side by offering weekly tips, tricks, and hacks that show off your knowledge of the industry. No matter what type of business you have, one thing is for sure - blogging gives your business the opportunity to be heard in a way in a different and unconventional way.",
        },
        {
          title: "Get Inspired",
          quote: "",
          paragraph:
            "To keep up with all things Wix, including website building tips and interesting articles, head over to to the Wix Blog. You may even find yourself inspired to start crafting your own blog, adding unique content, and stunning images and videos. Start creating your own blog now. Good luck!",
        },
      ],
    },
    {
      blogImage: image3,
      date: "21 Mar 2023",
      time: "2 mins read",
      title: "Technology of the future",
      shortDes:
        "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
      description: [
        {
          title: "",
          quote: "",
          paragraph:
            "Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.",
        },
        {
          title: "Design with Ease",
          quote:
            "Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone.",
          paragraph:
            "Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.",
        },
        {
          title: "Create Relevant Content",
          quote: "",
          paragraph:
            "You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow readers to explore more of what interests them. Each category of your blog has its own page that’s fully customizable. Add a catchy title, a brief description and a beautiful image to the category page header to truly make it your own. You can also add tags (#vacation #dream #summer) throughout your posts to reach more people, and help readers search for relevant content. Using hashtags can expand your post reach and help people find the content that matters to them. Go ahead, #hashtag away.",
        },
        {
          title: "Stun Your Readers",
          quote: "Be original, show off your style, and tell your story.",
          paragraph:
            "Blogging gives your site a voice, so let your business’ personality shine through. Are you a creative agency? Go wild with original blog posts about recent projects, cool inspirational ideas, or what your company culture is like. Add images, and videos to really spice it up, and pepper it with slang to keep readers interested. Are you a programmer? Stay on the more technical side by offering weekly tips, tricks, and hacks that show off your knowledge of the industry. No matter what type of business you have, one thing is for sure - blogging gives your business the opportunity to be heard in a way in a different and unconventional way.",
        },
        {
          title: "Get Inspired",
          quote: "",
          paragraph:
            "To keep up with all things Wix, including website building tips and interesting articles, head over to to the Wix Blog. You may even find yourself inspired to start crafting your own blog, adding unique content, and stunning images and videos. Start creating your own blog now. Good luck!",
        },
      ],
    },
    {
      blogImage: image4,
      date: "21 Mar 2023",
      time: "2 mins read",
      title: "Technology of the future",
      shortDes:
        "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
      description: [
        {
          title: "",
          quote: "",
          paragraph:
            "Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.",
        },
        {
          title: "",
          quote:
            "Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone.",
          paragraph:
            "You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow visitors to explore more of what interests them.",
        },
        {
          title: "Create Relevant Content",
          quote: "",
          paragraph:
            "Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags (#vacation #dream #summer) throughout your posts to reach more people, and help visitors search for relevant content. ",
        },
        {
          title: "",
          quote: "",
          paragraph:
            "Blogging gives your site a voice, so let your business’ personality shine through. Choose a great image to feature in your post or add a video for extra engagement. Are you ready to get started? Simply create a new post now. ",
        },
      ],
    },
    {
      blogImage: image5,
      date: "21 Mar 2023",
      time: "2 mins read",
      title: "Technology of the future",
      shortDes:
        "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
      description: [
        {
          title: "",
          quote: "",
          paragraph:
            "Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.",
        },
        {
          title: "",
          quote:
            "Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone.",
          paragraph:
            "You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow visitors to explore more of what interests them.",
        },
        {
          title: "Create Relevant Content",
          quote: "",
          paragraph:
            "Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags (#vacation #dream #summer) throughout your posts to reach more people, and help visitors search for relevant content. ",
        },
        {
          title: "",
          quote: "",
          paragraph:
            "Blogging gives your site a voice, so let your business’ personality shine through. Choose a great image to feature in your post or add a video for extra engagement. Are you ready to get started? Simply create a new post now. ",
        },
      ],
    },
    {
      blogImage: image6,
      date: "21 Mar 2023",
      time: "2 mins read",
      title: "Without direction",
      shortDes:
        "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
      description: [
        {
          title: "",
          quote: "",
          paragraph:
            "Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.",
        },
        {
          title: "Design with Ease",
          quote:
            "Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone.",
          paragraph:
            "Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier.",
        },
        {
          title: "Create Relevant Content",
          quote: "",
          paragraph:
            "You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow readers to explore more of what interests them. Each category of your blog has its own page that’s fully customizable. Add a catchy title, a brief description and a beautiful image to the category page header to truly make it your own. You can also add tags (#vacation #dream #summer) throughout your posts to reach more people, and help readers search for relevant content. Using hashtags can expand your post reach and help people find the content that matters to them. Go ahead, #hashtag away.",
        },
        {
          title: "Stun Your Readers",
          quote: "Be original, show off your style, and tell your story.",
          paragraph:
            "Blogging gives your site a voice, so let your business’ personality shine through. Are you a creative agency? Go wild with original blog posts about recent projects, cool inspirational ideas, or what your company culture is like. Add images, and videos to really spice it up, and pepper it with slang to keep readers interested. Are you a programmer? Stay on the more technical side by offering weekly tips, tricks, and hacks that show off your knowledge of the industry. No matter what type of business you have, one thing is for sure - blogging gives your business the opportunity to be heard in a way in a different and unconventional way.",
        },
        {
          title: "Get Inspired",
          quote: "",
          paragraph:
            "To keep up with all things Wix, including website building tips and interesting articles, head over to to the Wix Blog. You may even find yourself inspired to start crafting your own blog, adding unique content, and stunning images and videos. Start creating your own blog now. Good luck!",
        },
      ],
    },
  ];
  return (
    <div className="py-10 max-w-[980px] mx-auto">
      <h2 className="capitalize italic text-center text-[28px] md:text-[35px] baskervville-font">
        My Articles
      </h2>
      {articleData.map((data, index) => (
        <div
          key={index}
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 m-10 border border-lightGray"
        >
          <div className="">
            <Image src={data.blogImage} alt="" />
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-[50px]">
                  <Image src={adminImg} alt="" />
                </div>
                <div className="">
                  <div className="flex items-center gap-2">
                    <span>Admin</span>
                    <PiCrownSimpleFill />
                  </div>
                  <div>
                    <span>{data.date}</span> {"."} <span>{data.time}</span>
                  </div>
                </div>
              </div>
              <HiOutlineDotsVertical />
            </div>
            <div>
              <h2>{data.title}</h2>
              <p>{data.shortDes}...</p>
            </div>
            <div></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticlesCard;
