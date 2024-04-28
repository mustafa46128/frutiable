import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const QuantityInput = ({ className = "" }) => {
  const [quantity, setQuantity] = useState(1);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className={`flex ${className}`}>
      <div className="input-group-btn">
        <button
          className=" border rounded-full w-10 h-10 flex items-center justify-center text-[#747d88] font-[900] hover:border-bs-primary "
          onClick={decrementQuantity}
        >
          <FaMinus className=" " />
          {/* <i className="fa fa-minus"></i> */}
        </button>
      </div>
      <input
        type="text"
        className="form-control form-control-sm text-center w-10 border-0 font-[400] text-[#747d88]"
        value={quantity}
        readOnly
      />
      <div className="input-group-btn">
        <button
          className="btn btn-sm border rounded-full w-10 h-10 flex items-center justify-center hover:border-bs-primary text-[#747d88] font-[900]"
          onClick={incrementQuantity}
        >
          <FaPlus className=" " />
        </button>
      </div>
    </div>
  );
};

export default QuantityInput;
