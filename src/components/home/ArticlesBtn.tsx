import Link from "next/link";

const ArticlesBtn = () => {
  return (
    <div className="max-w-[280px] m-auto my-10">
      <Link
        href={"/articles"}
        className="capitalize hover:text-white px-20 py-4 bg-secondary"
      >
        View my articles
      </Link>
    </div>
  );
};

export default ArticlesBtn;
