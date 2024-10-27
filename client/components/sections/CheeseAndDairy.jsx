import Product from "../functions/productFunctions/Product";
import { cheeseDairy } from "../functions/data";
const CheeseAndDairy = () => {
  return (
    <section className="py-8 p-4 sm:p-6 mt-8 mb-10">
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="sm:text-4xl text-2xl font-semibold text-slate-800">
          أجبان وألبان
        </p>
        <p className="text-slate-700 mb-2 text-center sm:text-[16px] text-sm">
          اجبان والبان طازجة بأجود انواعها, متوفرة يوميا لضمان اعلى معايير الجودة
        </p>
        <hr className="w-full border-t-2 border-gray-300 mb-8" />
      </div>
      <Product data={cheeseDairy} />
    </section>
  );
};

export default CheeseAndDairy;
