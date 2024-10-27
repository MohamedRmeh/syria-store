import { alert_msg } from "@/public/script/public";
import Link from "next/link";

const Summary = ({ totalAmount, remainingAmount }) => {
  const role = "مستفيد"; // يمكنك تغيير القيمة للاختبار

  const handleClick = () => {
    if (remainingAmount !== 0) {
      const message =
        role === "معين"
          ? "الطلب غير مكتمل لعدم الوصول للحد الأدنى لقيمة الطلب"
          : "لا يمكن مشاركة الفاتورة لعدم الوصول للحد الادنى من قيمة الطلب";
      alert_msg(message, "error");
    } else if (role === "مستفيد") {
      alert_msg("تمت مشاركة الفاتورة بنجاح", "success");
    }
  };

  const isOrderComplete = remainingAmount === 0;
  const buttonText = role === "مستفيد" ? "مشاركة الفاتورة" : "اتمام الطلب";
  const buttonClass = isOrderComplete ? "bg-black" : "bg-neutral-600";

  return (
    <div className="p-5 border border-slate-300 flex flex-col flex-1 gap-5 h-fit w-full">
      <p className="text-xl font-bold">ملخص</p>
      <div className="flex justify-between items-center">
        <p className="whitespace-nowrap text-sm sm:text-[16px]">
          الفرق إلى الحد الأدنى لقيمة الطلب:
        </p>
        <p
          className={`${
            isOrderComplete ? "text-black" : "text-red-600"
          } whitespace-nowrap text-sm sm:text-[16px] transition-all`}
        >
          {remainingAmount.toLocaleString()} ل.س
        </p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-slate-800 font-bold">المجموع الاجمالي</p>
        <p className="font-bold">{totalAmount.toLocaleString()} ل.س</p>
      </div>
      {isOrderComplete && role === "معين" ? (
        <Link
          className="py-2 bg-black text-white rounded-md transition-all block text-center"
          href="/api/payment"
        >
          اتمام الطلب
        </Link>
      ) : (
        <button
          onClick={handleClick}
          className={`py-2 ${buttonClass} text-white rounded-md text-center transition-all`}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Summary;
