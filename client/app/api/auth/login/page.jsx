import Link from "next/link";

const Page = () => {
  return (
    <section className="flex justify-center items-center py-52 sm:py-80 md:py-60">
      <div className="bg-white w-[98%] sm:w-[75%] xl:w-[50%] px-5 py-10 shadow-xl">
        <div className="flex flex-col gap-8">
          <p className="text-center font-semibold text-lg font-sans">
            مرحبا بعودتك !
          </p>
          <form
            className="flex flex-col items-center justify-center gap-7"
            action=""
          >
            <input
              className="outline-none px-3 py-3 rounded-md w-full sm:w-[80%] shadow-md placeholder:text-slate-500 border border-slate-300"
              placeholder="البريد الإلكتروني او الأسم"
              type="email"
              required
            />

            <input
              className="outline-none px-3 py-3 rounded-md w-full sm:w-[80%] shadow-md placeholder:text-slate-500 border border-slate-300"
              placeholder="كلمة المرور"
              type="password"
              required
            />
            <div className="w-full sm:w-[80%] flex flex-col gap-2.5">
              <div className="">
                <p>
                  ليس لديك حساب ؟{" "}
                  <Link className="text-blue-700" href="/api/auth/register">
                    انشاء حساب
                  </Link>{" "}
                </p>
              </div>
              <div className="w-full sm:w-[80%]">
                <Link href="/" className="text-blue-800 ">
                  هل نسيت كلمة المرور ؟
                </Link>
              </div>
            </div>
            <button className="bg-zinc-800 text-white w-full sm:w-[80%] py-3 rounded-md font-semibold font-sans">
              تسجيل الدخول
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;
