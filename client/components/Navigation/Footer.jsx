"use client";
import Link from "next/link";
import { SiWhatsapp, SiGmail, SiInstagram, SiFacebook } from "react-icons/si";
import { FiArrowLeft } from "react-icons/fi"; // أيقونة السهم

const Footer = () => {
  return (
      <footer className="bg-[#f8f8f8]">
        <div className="flex items-center justify-center border-2 border-b-slate-300 border-t-slate-300 p-6 lg:justify-between">
          <div className="hidden lg:block font-semibold text-slate-900 text-lg">
            <span className="text-slate-900">
              تواصل معنا على مواقع التواصل الاجتماعي:
            </span>
          </div>
          <div className="flex justify-center items-center gap-5">
            <SiWhatsapp name="whatsapp" className="w-5 h-5" />
            <SiFacebook name="facebook" className="w-5 h-5" />
            <SiInstagram name="instagram" className="w-5 h-5" />
            <SiGmail name="gmail" className="w-5 h-5" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 py-10 lg:px-20 gap-7 md:gap-10 lg:gap-0">
          <div className="flex flex-col items-center lg:items-start gap-1">
            <h1 className="text-xl font-semibold text-slate-900">التسجيل</h1>
            <ul className="flex flex-col gap-1 items-center lg:items-start text-slate-700">
              <li><Link href="/">تسجيل الدخول</Link></li>
              <li><Link href="/">تسجيل الاشتراك</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-1">
            <h1 className="text-xl font-semibold text-slate-900">الخدمات</h1>
            <ul className="flex flex-col gap-1 items-center lg:items-start text-slate-700">
              <li><Link href="/">خدماتنا</Link></li>
              <li><Link href="/">الدعم الفني</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-1">
            <h1 className="text-xl font-semibold text-slate-900">المساعدة</h1>
            <ul className="flex flex-col gap-1 items-center lg:items-start text-slate-700">
              <li><Link href="/">تواصل معنا</Link></li>
              <li><Link href="/">الأسئلة الشائعة</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-2">
            <span className="text-slate-700 text-lg">
              أدخل بريدك الإلكتروني ليصلك آخر الأخبار:
            </span>
            <form className="flex items-center gap-">
              <input
                className="bg-[#f8f8f8] shadow-lg lg:w-[250px] h-[50px] outline-none p-3 border-[0.5px] border-slate-300"
                type="text"
                placeholder="أدخل بريدك الإلكتروني"
              />
              <button aria-label="send" name="arrow" className="bg-black text-white px-3 h-[50px] border-[0.5px] border-black">
                <FiArrowLeft name="arrow" className="w-6 h-6" />
              </button>
            </form>
            <span className="text-slate-500 text-sm">
              اضغط على السهم لإرسال البريد الإلكتروني
            </span>
          </div>
        </div>

        <div className="bg-[#f2f2f2] p-6 text-center text-slate-900 font-semibold sm:text-[17px] border-2 border-t-slate-300">
          <span className="">© 2024 Copyright:</span>
          <Link href="/" className="font-bold">
            Syria-Store
          </Link>
        </div>
      </footer>
    )
};

export default Footer;
