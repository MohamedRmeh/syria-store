import Image from "next/image";
import Link from "next/link";

const categories = [
  { src: "/images/4g7sm9vl.png", label: "فواكه وخضروات", link: "/" },
  { src: "/images/36shfl5y.png", label: "لحوم ودواجن", link: "/" },
  {
    src: "/images/pl6tfq0u.png",
    label: "الارز والمعكرونة والبقوليات",
    link: "/",
  },
  { src: "/images/cfazbrqd.png", label: "مكونات الطبخ", link: "/" },
  { src: "/images/z9sywbij.png", label: "اطعمة مجمدة", link: "/" },
  { src: "/images/4dnzrz2o.png", label: "منتجات التنظيف", link: "/" },
  { src: "/images/087zhz29.png", label: "البيض والألبان", link: "/" },
  { src: "/images/hi8ysmrv.png", label: "وجبات خفيفة", link: "/" },
];

const Categories = () => {
  return (
    <section className="py-8 sm:px-16 mt-6">
      <div className="flex flex-col justify-center px-16 sm:px-0 items-center gap-2">
        <p className="sm:text-4xl text-2xl font-semibold text-slate-800">
          تسوق الآن
        </p>
        <p className="text-slate-700 mb-2 text-center sm:text-[16px] text-sm">
          استكشف الفئات المتنوعة لدينا واكتشف كل ما تحتاجه في مكان واحد
        </p>
        <hr className="w-full border-t-2 border-gray-300 mb-8" />
      </div>
      <div className="flex flex-wrap justify-around gap-y-10 sm:gap-x-20 sm:justify-center items-center p-4 gap-3">
        {categories.map((category, index) => (
          <Link
            className="flex flex-col justify-center items-center gap-1 "
            key={index}
            href={category.link}
          >
            <Image src={category.src} width={125} height={125} alt="category" />
            <p>{category.label}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
