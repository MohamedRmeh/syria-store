import Image from "next/image";
import Link from "next/link";
const Cart = () => {
  const count = 0;
  return (
    <Link href="/api/cart">
      <div className="relative cursor-pointer">
        <Image src="/icons/cart.png" width={35} height={35} alt="cart" />
        {count > 0 && (
          <div className="absolute top-0 right-0 bg-red-500 select-none text-white rounded-full w-[16px] h-[16px] flex items-center justify-center text-xs">
            {count}
          </div>
        )}
      </div>
    </Link>
  );
};

export default Cart;
