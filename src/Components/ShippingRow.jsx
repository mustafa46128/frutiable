import React from "react";

export default function ShippingRow() {
  return (
    <div>
      <div className="flex justify-end gap-6 py-14 border-b items-center ">
        <h1 className="text-[16px] text-[#45595b] font-openSans font-[400]">
          SubTotal
        </h1>
        <p className="border-b border-t text-[#45595b] py-4 text-[16px] font-openSans font-[400]">
          $414.00
        </p>
      </div>
      <div className="flex justify-end gap-6 py-14 border-b ">
        <h1 className="text-[16px] text-[#45595b] font-openSans font-[400]">
          Total
        </h1>
        <p className="border-b border-t text-[#45595b] text-[16px] font-openSans font-[400]">
          $135.00
        </p>
      </div>
      <div className=" border-b py-11">
        <input type="Checkbox" />
        <label
          htmlFor=""
          className="text-[16px] text-[#747d88] font-[400] font-openSans px-1"
        >
          Direct Bank Transfer
        </label>
        <p className="text-[16px] text-[#45595B] font-[400] font-openSans mt-3">
          Make your payment directly into our bank account. Please use your
          Order ID as the payment reference. Your order will not be shipped
          until the funds have cleared in our account.
        </p>
      </div>
      <div className="border-b py-8 ">
        <input type="Checkbox" className="" />
        <label
          htmlFor=""
          className="text-[16px] text-[#747d88] font-openSans font-[400] px-1"
        >
          Check Payments
        </label>
      </div>
      <div className="border-b py-8 ">
        <input type="Checkbox" className="" />
        <label
          htmlFor=""
          className="text-[16px] text-[#747d88] font-openSans font-[400] px-1"
        >
          Cash On Delivery
        </label>
      </div>
      <div className="border-b py-8 ">
        <input type="Checkbox" className="" />
        <label
          htmlFor=""
          className="text-[16px] text-[#747d88] font-openSans font-[400] px-1"
        >
          Paypal
        </label>
      </div>
      <button className="border border-bs-secondary text-[#81c408] font-[600] rounded-lg px-[148px] py-3 mt-6 cursor-pointer hover:text-white hover:bg-bs-secondary">
        PLACE ORDER
      </button>
    </div>
  );
}
