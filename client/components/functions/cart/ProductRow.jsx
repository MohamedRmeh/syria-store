// components/ProductRow.js
import Image from "next/image";
import QuantityControl from "./QuantityControl";

const ProductRow = ({ product, index, quantity, onIncrement, onDecrement, onRemove }) => {
  const calculateTotal = (price, quantity) => price * quantity;

  return (
    <tr key={product.id} className="border-b border-slate-300 ">
      <td className="py-4">
        <div className="flex items-center sm:gap-1">
          <div className="sm:hidden">
            <button onClick={() => onRemove(index)}>
              <Image
                src="/icons/delone.png"
                width={20}
                height={40}
                alt="حذف"
              />
            </button>
          </div>
          <div className="bg-[#f2f2f2] p-2 w-[25%]">
            <Image
              src={product.imageSrc}
              width={1000}
              height={100}
              alt={product.name}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="flex flex-col gap-0.5 w-[80%]">
            <p className="font-semibold  sm:text-lg text-slate-900 ">
              {product.name}
            </p>
            <p className="text-slate-600">
              {product.price.toLocaleString()} ل.س
            </p>
          </div>
        </div>
      </td>

      <td className="whitespace-nowrap">
        <div className="flex justify-end sm:justify-start">
          <QuantityControl
            quantity={quantity}
            onIncrement={() => onIncrement(index)}
            onDecrement={() => onDecrement(index)}
          />
        </div>
      </td>

      <td className="select-none whitespace-nowrap sm:table-cell hidden">
        <p className="text-slate-800">
          {calculateTotal(product.price, quantity).toLocaleString()} ل.س
        </p>
      </td>

      <td className="whitespace-nowrap sm:table-cell hidden">
        <button onClick={() => onRemove(index)} className="">
          <Image
            src="/icons/delone.png"
            width={25}
            height={40}
            alt="حذف"
          />
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
