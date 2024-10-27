"use client";
import React from "react";
import Select from "react-select";
import ProductCateg from "@/components/functions/productFunctions/ProductCateg";
import { usePathname } from "next/navigation";

const Page = () => {
  const router = usePathname();
  const category = router.split("/").pop();

  const sortOptions = [
    { value: "latest", label: "الأحدث" },
    { value: "lowest_price", label: "الأدنى سعرًا" },
    { value: "highest_price", label: "الأعلى سعرًا" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      minHeight: "sm:50px",
      fontSize: "16px",
      borderColor: "#ddd",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#bbb",
      },
    }),
    menu: (provided) => ({
      ...provided,
      fontSize: "16px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#f0f0f0" : "#fff",
      color: "#333",
      "&:hover": {
        backgroundColor: "#f8f8f8",
      },
    }),
  };
  return (
    <section className="mt-44 sm:mt-72 md:mt-44 mb-40">
      <div className="flex flex-col">
        <div className="flex justify-between items-center px-4 md:px-10 py-5">
          <p className="sm:text-2xl text-lg font-semibold font-sans">
            {category === "dietetics"
              ? "غذائيات"
              : category === "chickens"
              ? "سوق الدواجن"
              : category === "vegetablesAndfruits"
              ? "خضار وفواكه"
              : category === "cheeseDairy"
              ? "اجبان والبان"
              : ""}
          </p>
          <div className="sm:w-64">
            <Select
              instanceId={sortOptions}
              options={sortOptions}
              placeholder="اختر ترتيب المنتجات"
              styles={customStyles}
            />
          </div>
        </div>
        <ProductCateg />
      </div>
    </section>
  );
};

export default Page;
