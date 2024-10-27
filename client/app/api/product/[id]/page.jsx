"use client";
import QuantitySelector from "@/components/functions/productFunctions/SingleProduct/QuantitySelector";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getProductById } from "@/components/functions/data";
import { alert_msg } from "@/public/script/public";

const Page = ({ params }) => {
  const id = params.id
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setProduct(getProductById(id));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const isLoggedIn = () => true; // قم بإضافة منطق تسجيل الدخول هنا إذا لزم الأمر

  const addToCart = () => {
    if (!isLoggedIn()) {
      alert_msg("يرجى تسجيل الدخول للإضافة إلى السلة", "error");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex(
      (item) => item.ProductId == product.id
    );

    if (existingProductIndex > -1) {
      cart[existingProductIndex].quantity += quantity;
    } else {
      cart.push({
        ProductId: id,
        productName: product.name,
        productWeight: product.weight || "غير محدد",
        price: product.price,
        quantity: quantity,
        imageSrc: product.imageSrc,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert_msg(`تمت إضافة ${product.name} إلى السلة`, "success");
  };

  return (
    <section className="mt-44 sm:mt-72 md:mt-44 font-sans">
      <div className="px-3 sm:px-6 xl:px-16 py-10 flex flex-col lg:flex-row gap-6">
        <div className="relative w-full sm:w-[540px] flex h-[330px] sm:h-[500px] lg:h-auto lg:w-[480px] mx-auto">
          <Image
            src={product.imageSrc}
            fill
            alt="bandora"
            className="rounded-t-lg shadow-md object-cover"
          />
          <div className="absolute top-0 right-0 bg-red-600 text-white py-1 px-5 text-sm rounded-tr-lg">
            1 كغ
          </div>
        </div>


        <div className="flex flex-col flex-1 gap-3 sm:w-[540px] w-full mx-auto ">
          <div className="flex flex-col gap-2 bg-white w-full h-fit px-6 sm:px-10 py-6 rounded-lg shadow-md">
            <p className="text-slate-600 text-sm sm:text-[16px]">{product.categ}</p>
            <p className="text-slate-800 text-xl sm:text-3xl font-bold">{product.name}</p>
          </div>

          <div className="flex flex-col gap-2.5 bg-white w-full h-fit p-4 sm:p-6 rounded-lg shadow-md ">
            <p className="text-slate-700">
              <strong className=" text-slate-800 ">الوزن :</strong> {product?.weight || 'غير محدد'}
            </p>
            <p className="text-slate-700">
              <strong className=" text-slate-800">الحالة :</strong> متاح
            </p>
            <p className="text-slate-700">
              <strong className=" text-slate-800">وصف المنتج : </strong>
              {product.des}
            </p>

            
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="flex flex-col gap-2.5 bg-white w-full p-2 sm:p-6 rounded-lg shadow-md items-center sm:place-items-stretch">
              <div>
                <div className="flex items-center justify- gap-32">
                  <p className="text-slate-800 sm:text-lg font-bold">السعر :</p>
                  <p className="text-slate-700 sm:text-lg">{product.price}</p>
                </div>
                <hr className="border-t-2 border-gray-300 mt-4" />
              </div>
              <div className="flex flex-col w-fit gap-4 pb-3 lg:pb-0">
                <div className="flex items-center  gap-16">
                  <QuantitySelector
                    quantity={quantity}
                    onIncrease={() => setQuantity((prev) => prev + 1)}
                    onDecrease={() =>
                      setQuantity((prev) => Math.max(prev - 1, 1))
                    }
                  />
                  <div>
                    <button onClick={addToCart} className="text-white text-sm sm:text-[16px] bg-black font-normal flex items-center gap-2 rounded-md sm:px-3 px-1.5 whitespace-nowrap py-2 shadow-black shadow-md">
                      <Image
                        src="/icons/cartButtWhite.png"
                        alt="Cart"
                        width={23}
                        height={24}
                        className="inline-block"
                      />
                      اضافة الى السلة
                    </button>
                  </div>
                </div>

                <div className="relative group">
                  <button className="bg-slate-300 w-full flex items-center justify-center py-3 rounded-md shadow-lg">
                    <Image
                      src="/icons/heart.png"
                      width={20}
                      height={20}
                      alt="heart"
                    />
                  </button>
                  <span className="absolute w-auto p-2 min-w-max left-1/2 transform -translate-x-1/2 translate-y-2 text-black bg-white shadow-lg rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    سيتم اضافة صفحة المفضلة قريبا...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Page;

// سيتم جعل الصورة تأخذ عرض نصف الصفحة مع هامش عرضي كبير من ثم توسيطها بالصفحة
// سيتم جعل المحتوى الباقي لصفحة المنتج بالنصف الاخر من الصفحة بجانب الصورة وايضا يأخذ نفس العرض تبع الصورة
// محتوى المنتج هو : الفئة تبع المنتج - اسم المنتج - الحالة متاح او غير متاح - التوصيل في نفس اليوم - الوزن - وصف بسيط للمنتج - السعر - الكمية - اضافة للسلة - زر وفيه قلب للاضافة للمفضلة لكن لن يتم اضافتها الان سيتم اضافة ملاحظة ان سيتم اضافة صفحة المفضلة قريبا
// تصميم الهاتف سيكون اسم المنتج فوق بالمنتصف ثم تحته الصورة
// ثم الخصائص المذكورة
// يعني نفس تصميم تارغيت ماركت تبع الهاتف
