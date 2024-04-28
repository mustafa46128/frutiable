import React from "react";

export default function Additional() {
  return (
    <div className="w-full">
      <h1 className="text-[1.5rem] text-[#45595b] font-[600] font-raleway">
        Additional
      </h1>
      <div className="flex py-2">
        <input
          type="radio"
          className="me-2"
          id="Categories-1"
          name="Categories-1"
          value="Beverages"
        />
        <p className="text-[#747d88] font-[400] text-[1rem] font-openSans">
          Organic
        </p>
      </div>
      <div className="flex">
        <input
          type="radio"
          className="me-2"
          id="Categories-1"
          name="Categories-1"
          value="Beverages"
        />
        <p className="text-[#747d88] font-[400] text-[1rem] font-openSans">
          Fresh
        </p>
      </div>
      <div className="flex py-2">
        <input
          type="radio"
          className="me-2"
          id="Categories-1"
          name="Categories-1"
          value="Beverages"
        />
        <p className="text-[#747d88] font-[400] text-[1rem] font-openSans">
          Sales
        </p>
      </div>
      <div className="flex">
        <input
          type="radio"
          className="me-2"
          id="Categories-1"
          name="Categories-1"
          value="Beverages"
        />
        <p className="text-[#747d88] font-[400] text-[1rem] font-openSans">
          Discount
        </p>
      </div>
      <div className="flex py-2">
        <input
          type="radio"
          className="me-2"
          id="Categories-1"
          name="Categories-1"
          value="Beverages"
        />
        <p className="text-[#747d88] font-[400] text-[1rem] font-openSans">
          Expired
        </p>
      </div>
    </div>
  );
}
