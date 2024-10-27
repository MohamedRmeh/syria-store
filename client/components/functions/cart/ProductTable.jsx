// components/ProductTable.js
import ProductRow from "./ProductRow";

const ProductTable = ({ products, quantities, onIncrement, onDecrement, onRemove }) => {
  return (
    <table className="lg:w-[65%] w-full text-right table-fixed">
      <thead>
        <tr className="border-b border-slate-300">
          <th className="pb-3 w-3/4 sm:w-1/2">المنتج</th>
          <th className="pb-3 text-end sm:text-start w-1/4 sm:w-1/3">الكمية</th>
          <th className="pb-3 sm:table-cell hidden w-1/3">المجموع</th>
          <th className="pb-3 sm:table-cell hidden w-[5%]"></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <ProductRow
            key={product.id}
            product={product}
            index={index}
            quantity={quantities[index]}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onRemove={onRemove}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
