import Image from "next/image";

const Hero = () => {
  // مصفوفة تحتوي على المعلومات المختلفة لكل عنصر
  const shippingInfo = [
    {
      imgSrc: "/icons/truck.png",
      title: "الشحن مجاني",
      description: "على جميع الطلبات التي قيمتها أكثر من 180 دولار",
    },
    {
      imgSrc: "/icons/money-back.png", // استبدل بصورة مختلفة
      title: "ضمان استعادة الأموال",
      description: "سدد فواتير احبائك وتسوق بدون قلق",
    },
    {
      imgSrc: "/icons/fast-delivery.png", // استبدل بصورة مختلفة
      title: "توصيل سريع",
      description: "توصيل خلال 1-3 أيام عمل لجميع المدن الرئيسية",
    },
    {
      imgSrc: "/icons/custmer-support.png", // استبدل بصورة مختلفة
      title: "دعم على مدار الساعة",
      description: "خدمة العملاء متاحة على مدار 24/7 للإجابة على استفساراتكم",
    },
  ];

  return (
    <section className="p-2 sm:p-8 mt-40 lg:mt-40 sm:mt-64">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        <div className="flex-1 flex flex-col px-10 gap-5 sm:gap-8 text-center items-center sm:text-start sm:items-start">
          <h1 className="text-3xl sm:text-5xl font-semibold leading-snug text-slate-900">
            يمكنك الآن تسديد فواتير أحبائك أو شراء احتياجاتهم الخاصة!
          </h1>
          <p className="text-xs sm:text-lg leading-relaxed text-slate-800">
            تسعى شركة Syria Store إلى دعم الأسر في الوطن من خلال توفير خدمات
            متميزة لتسديد فواتير مشتريات أحبائكم أو شراء احتياجاتهم وإرسال
            الهدايا لهم، مما يجعل رعاية أحبائكم من بعيد أكثر سهولة وراحة.
          </p>
          <div className="flex gap-5 items-center">
            <button className="bg-black text-white sm:text-lg px-4 py-2 rounded-lg">
              استكشف المنتجات
            </button>
            <button className="border border-red-600 sm:text-lg px-6 py-2 rounded-lg font-semibold">
              خدماتنا
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/heroImage.png"
            alt="Hero Image"
            width={650}
            height={650}
            loading="eager"
            priority
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* عرض أقسام الشحن المجاني بجانب بعض */}
      <div className="flex justify-center items-center mt-8 gap-7 p-5 rounded-full flex-wrap">
        {shippingInfo.map((item, index) => (
          <div className="flex items-center gap-5" key={index}>
            <Image src={item.imgSrc} width={50} height={60} alt={item.title} />
            <div className="flex flex-col">
              <h1 className="font-semibold text-slate-800">{item.title}</h1>
              <p className="leading-relaxed w-[200px] text-sm">
                {item.description}
              </p>
            </div>
            {index < shippingInfo.length - 1 && (
              <div className="h-[60px] w-px bg-slate-300 mx-4 hidden 2xl:block"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
