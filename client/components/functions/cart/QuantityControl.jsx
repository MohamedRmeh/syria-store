// components/QuantityControl.js
const QuantityControl = ({ quantity, onIncrement, onDecrement }) => {
    return (
      <div className="border border-slate-400 sm:px-1.5 inline-block">
        <button
          onClick={onDecrement}
          className="border-l border-slate-400 px-2 select-none"
        >
          -
        </button>
        <span className="select-none px-3">{quantity}</span>
        <button
          onClick={onIncrement}
          className="border-r border-slate-400 px-2 select-none"
        >
          +
        </button>
      </div>
    );
  };
  
  export default QuantityControl;
  