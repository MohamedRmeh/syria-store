"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CountrySelector from "@/components/functions/CountrySelector";
import UserTypeSelector from "@/components/functions/UserTypeSelector";
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const loggedIn = false;

  const [data, setData] = useState({
    email: "",
    username: "",
    phone: "",
    country: "سوريا",
    password: "",
    confirmPassword: "",
    userType: "مستفيد",
  });

  const [showHelp, setShowHelp] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCountryCodeChange = (name) => {
    setData((prevData) => ({
      ...prevData,
      country: name,
    }));
  };

  const handleUserTypeChange = (type) => {
    setData((prevData) => ({
      ...prevData,
      userType: type,
    }));
  };

  const handleHelpClick = (type) => {
    setShowHelp(type === showHelp ? null : type);
  };





  useEffect(() => {
    if (loggedIn) {
      router.replace("/");
    }
    document.title = "تسجيل الاشتراك";
  }, [loggedIn]);

  return (
    <section className="flex justify-center items-center py-64 sm:py-72">
      <div className="bg-white w-[98%] sm:w-[75%] xl:w-[50%] py-10 px-5 sm:p shadow-xl">
        <div className="flex flex-col gap-8">
          <p className="text-center font-semibold text-lg font-sans">
            انشاء حساب جديد
          </p>
          <form
            className="flex flex-col items-center justify-center gap-7"
            
          >
            <input
              name="email"
              value={data.email}
              onChange={handleChange}
              className="outline-none px-3 py-3 rounded-md w-full sm:w-[80%] shadow-md placeholder:text-slate-500 border border-slate-300"
              placeholder="عنوان البريد الإلكتروني"
              type="email"
              required
            />
            <input
              name="username"
              value={data.username}
              onChange={handleChange}
              className="outline-none px-3 py-3 rounded-md w-full sm:w-[80%] shadow-md placeholder:text-slate-500 border border-slate-300"
              placeholder="الاسم"
              type="text"
              required
            />
            <div className="relative flex items-center w-full sm:w-[80%] gap-2">
              <input
                name="phone"
                value={data.phone}
                onChange={handleChange}
                className="outline-none px-3 py-3 w-full sm:w-[80%] rounded-md flex-1 shadow-md placeholder:text-slate-500 border border-slate-300"
                placeholder="رقم الهاتف"
                type="number"
                required
              />
            </div>

            <div className="relative flex items-center w-full sm:w-[80%] gap-2">
              <CountrySelector
                selectedCode={data.country}
                onSelectCode={handleCountryCodeChange}
                userType={data.userType}
                choseCountry
              />
            </div>

            <input
              name="password"
              value={data.password}
              onChange={handleChange}
              className="outline-none px-3 py-3 rounded-md w-full sm:w-[80%] shadow-md placeholder:text-slate-500 border border-slate-300"
              placeholder="كلمة المرور"
              type="password"
              required
              min={12}
            />
            <input
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={handleChange}
              className="outline-none px-3 py-3 rounded-md w-full sm:w-[80%] shadow-md placeholder:text-slate-500 border border-slate-300"
              placeholder="تأكيد كلمة المرور"
              type="password"
              required
              min={12}
            />
            <UserTypeSelector
              userType={data.userType}
              setUserType={handleUserTypeChange}
              handleHelpClick={handleHelpClick}
              showHelp={showHelp}
            />
            <div className="w-full sm:w-[80%]">
              <p>
                لديك حساب بالفعل ؟{" "}
                <Link className="text-blue-700" href="/api/auth/login">
                  تسجيل الدخول
                </Link>{" "}
              </p>
            </div>
            <button
              type="submit"
              className="bg-zinc-800 text-white w-full sm:w-[80%] py-3 rounded-md font-semibold font-sans"
            >
              التسجيل
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;
