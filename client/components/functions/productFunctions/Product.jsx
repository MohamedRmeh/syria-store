"use client";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Product = (data) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 50 }, // الهواتف
        640: { slidesPerView: 2, spaceBetween: 15 }, // الهواتف المتوسطة
        768: { slidesPerView: 3, spaceBetween: 20 }, // الأجهزة اللوحية
        1224: { slidesPerView: 4, spaceBetween: 20 }, // سطح المكتب
      }}
      navigation
    >
      {data.data?.map((product) => (
        <SwiperSlide key={product.id}>
          <Link href={`/api/product/${product.id}`}>
            <div className="bg-white flex flex-col justify-center items-center relative shadow-lg mb-5 ">
              <div className="relative w-full h-[300px] overflow-hidden">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  fill
                  loading="eager"
                  priority
                  className="rounded-t-md object-cover"
                />
                {product?.weight && (
                  <div className="absolute top-0 right-0 bg-red-600 text-white py-1 px-5 text-sm rounded-tr-md">
                    {product.weight}
                  </div>
                )}
              </div>
              <div className="py-2 items-center flex flex-col gap-2 w-full bg-white ">
                <p className="text-lg text-slate-800 font-semibold font-sans">
                  {product.name}
                </p>
                <p className="text-lg text-slate-700">{product.price}</p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Product;
