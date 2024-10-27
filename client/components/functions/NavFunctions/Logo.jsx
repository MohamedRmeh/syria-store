import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center flex-row-reverse">
      <Image
        src="/icons/logo.png"
        width={60}
        height={60}
        alt="logo"
        loading="eager"
        priority
        className="w-[55px] md:w-[60px]"
      />
      <div className="sm:flex flex-col w-[90px] hidden">
        <p className="gradient-logo tracking-[-0.5px]">Syria Store</p>
        <p className="gradient-logo tracking-[1.9px]">سوق سوريا</p>
      </div>
    </Link>
  );
};

export default Logo;