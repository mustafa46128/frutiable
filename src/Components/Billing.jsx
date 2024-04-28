import React from "react";

export default function Billing() {
  return (
    <div className="w-full">
      <h1 className="text-[40px] font-raleway font-[600] text-[#45595b]">
        Billing details
      </h1>
      <div className="w-full flex items-center gap-5">
        <div className="w-full flex flex-col">
          <label htmlFor="">First Name *</label>
          <input
            type="text"
            className="border rounded-lg px-3 py-1 w-full focus:outline-none mt-3"
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="">First Name *</label>
          <input
            type="text"
            className="border rounded-lg px-3 py-1 w-full focus:outline-none mt-3"
          />
        </div>
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="">First Name *</label>
        <input
          type="text"
          className="border rounded-lg px-3 py-1 w-full focus:outline-none mt-3"
        />
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="">First Name *</label>
        <input
          type="text"
          className="border rounded-lg px-3 py-1 w-full focus:outline-none mt-3"
        />
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="">First Name *</label>
        <input
          type="text"
          className="border rounded-lg px-3 py-1 w-full focus:outline-none mt-3"
        />
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="">First Name *</label>
        <input
          type="text"
          className="border rounded-lg px-3 py-1 w-full focus:outline-none mt-3"
        />
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="">First Name *</label>
        <input
          type="text"
          className="border rounded-lg px-3 py-1 w-full focus:outline-none mt-3"
        />
      </div>
      <div className="my-3 flex gap-2 items-center">
        <input
          type="checkbox"
          id="checkbox-1"
          className="!accent-bs-primary bg-bs-primary text-bs-primary"
        />
        <label htmlFor="" className="text-[#747d88] font-[400] text-[1rem]">
          Create an account
        </label>
      </div>
      <hr />
      <div className="my-3 flex gap-2 items-center">
        <input type="CHeckbox" className="accent-green-600" />
        <label htmlFor="" className="text-[#747d88] font-[400] text-[1rem]">
          Ship to a different address?
        </label>
      </div>

      <div className="mt-5">
        <textarea
          name=""
          id=""
          cols=""
          rows="10"
          placeholder="Order Notes (optional)"
          className="border border-bs-gray rounded-lg w-full px-2 py-1"
        ></textarea>
      </div>
    </div>
  );
}
