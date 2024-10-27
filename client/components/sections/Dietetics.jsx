import Product from "../functions/productFunctions/Product";
import { dietetics } from "../functions/data";
const Dietetics = () => {
  return (
    <section className="py-8 p-4 sm:p-6 mt-12 mb-10">
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="sm:text-4xl text-2xl font-semibold text-slate-800">المواد الغذائية</p>
        <p className="text-slate-700 mb-2 text-center sm:text-[16px] text-sm">
          تسوق المواد الغذائية الخاصة بمنزلك بنفس أسعار السوق مع ضمان الجودة
          وتوصيل سريع إلى باب بيتك
        </p>
        <hr className="w-full border-t-2 border-gray-300 mb-8" />
      </div>
      <Product data={dietetics} />
    </section>
  );
};

export default Dietetics;
