import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { chickens, dietetics, vegetablesAndfruits, cheeseDairy } from "../data";

const ProductCateg = () => {
  const router = usePathname();
  const category = router.split("/").pop();

  const dataMap = {
    chickens,
    dietetics,
    vegetablesAndfruits,
    cheeseDairy,
  };

  const products = dataMap[category] || [];

  
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-3 p-4">
      {products.map((product) => (
        <Link key={product.id} href={`/api/product/${product.id}`}>
          <div className="bg-white flex flex-col justify-center items-center relative shadow-lg mb-5">
            <div className="relative w-full h-[300px] overflow-hidden">
              <Image
                src={product.imageSrc}
                alt={product.name}
                fill
                loading="lazy"
                className="rounded-t-md object-cover"
              />
              {product?.weight && (
                <div className="absolute top-0 right-0 bg-red-600 text-white py-1 px-5 text-sm rounded-tr-md">
                  {product.weight}
                </div>
              )}
            </div>
            <div className="py-2 items-center flex flex-col gap-2 w-full bg-white">
              <p className="text-lg text-slate-800 font-semibold font-sans">
                {product.name}
              </p>
              <p className="text-lg text-slate-700">{product.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductCateg;
