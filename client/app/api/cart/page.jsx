'use client';
import React, { useState, useEffect } from "react";
import ProductTable from "@/components/functions/cart/ProductTable";
import Summary from "@/components/functions/cart/Summary";
import Link from "next/link";
import Image from "next/image";

const Page = () => {

  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  const [minimumOrderValue, setMinimumOrderValue] = useState(14700 * 40);

  const loadProductsFromLocalStorage = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productData = cart.map(item => ({
      id: item.id || Math.random(),
      name: item.productName,
      price: parseInt(item.price.replace(/[^0-9]/g, ''), 10),
      imageSrc: item.imageSrc,
    }));
    const quantitiesData = cart.map(item => item.quantity);

    setProducts(productData);
    setQuantities(quantitiesData);
    setIsCartEmpty(productData.length === 0);
  };

  useEffect(() => {
    loadProductsFromLocalStorage();
  }, []);

  const incrementQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
    updateLocalStorage(newQuantities);
  };

  const decrementQuantity = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
      updateLocalStorage(newQuantities);
    }
  };

  const removeProduct = (index) => {
    const newProducts = [...products];
    const newQuantities = [...quantities];
    newProducts.splice(index, 1);
    newQuantities.splice(index, 1);
    setProducts(newProducts);
    setQuantities(newQuantities);
    setIsCartEmpty(newProducts.length === 0);
    updateLocalStorage(newQuantities, newProducts);
  };

  const updateLocalStorage = (newQuantities, newProducts = products) => {
    const updatedCart = newProducts.map((product, index) => ({
      productName: product.name,
      productWeight: "",
      price: `${product.price.toLocaleString()} ل.س`,
      quantity: newQuantities[index],
      imageSrc: product.imageSrc
    }));
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const total = products.reduce((acc, product, index) => {
      return acc + product.price * quantities[index];
    }, 0);
    setTotalAmount(total);
  }, [quantities, products]);

  const remainingAmount = Math.max(minimumOrderValue - totalAmount, 0);

  return (
    <section className="mt-44 sm:mt-72 md:mt-44 mb-40 py-8 flex justify-center items-center">
      <div className="sm:w-[98%] p-3 sm:p-8">
        {isCartEmpty ? (
          <div className="flex justify-center items-center mt-10">
            <div className="flex flex-col items-center gap-4">
             <Image
             src='/icons/logo.png'
             width={130}
             height={100}
             className="ml-6"
             alt="logo"
             priority
             />
             <div className="flex flex-col gap-2 items-center">
             <p className="text-lg font-semibold text-slate-800">تبحث عن منتج محدد ؟</p>
             <p className=" text-slate-700">.أضف منتجاتك المفضلة إلى سلة التسوق</p>
             </div>
             <Link href='/' className="bg-black text-white py-2 rounded-md text-center w-full">استمر بالتسوق</Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-20">
            <ProductTable
              products={products}
              quantities={quantities}
              onIncrement={incrementQuantity}
              onDecrement={decrementQuantity}
              onRemove={removeProduct}
            />
            <Summary totalAmount={totalAmount} remainingAmount={remainingAmount} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Page;
