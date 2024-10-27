import React from "react";

const QuantitySelector = ({ quantity, onIncrease, onDecrease }) => (
  <div className="flex items-center whitespace-nowrap">
    <div className="border border-slate-400 sm:px-1.5 inline-block">
      <button
        className="border-l border-slate-400 px-2 select-none py-1.5"
        onClick={onDecrease}
      >
        -
      </button>
      <span className="select-none px-3">{quantity}</span>
      <button
        onClick={onIncrease}
        className="border-r border-slate-400 px-2 select-none"
      >
        +
      </button>
    </div>
  </div>
);

export default QuantitySelector;
