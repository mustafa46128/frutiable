import Image from "next/image";
import React from "react";
import QuantityInput from "./Inputgroupbtn";
// import Review from "./Review";
import { IoCloseSharp } from "react-icons/io5";

export default function Cart() {
  const tableData = [
    {
      image: "/vegetable-item-3.png",
      name: "Big Banana",
      Price: "2.99 $",
      quantity: "Sheikh",
      total: "2.99 $",
      handle: "Deisale",
    },
    {
      image: "/vegetable-item-5.jpg",
      name: "potatoes",
      Price: "2.99 $",
      quantity: "Sheikh",
      total: "2.99 $",
      handle: "Deisale",
    },
    {
      image: "/single-item.jpg",
      name: "Awesome Brocoli",
      Price: "2.99 $",
      quantity: "Sheikh",
      total: "2.99 $",
      handle: "Deisale",
    },
  ];
  return (
    <div class="w-[80%] mx-auto py-5">
      <table class="table w-full mt-20">
        <thead>
          <tr class="text-left text-[#747d88] ">
            <th className="text-[1rem] font-[500]">Products</th>
            <th className="text-[1rem] font-[500]">Name</th>
            <th className="text-[1rem] font-[500]">Price</th>
            <th className="text-[1rem] font-[500]">Quantity</th>
            <th className="text-[1rem] font-[500]">Total</th>
            <th className="text-[1rem] font-[500]">Handle</th>
          </tr>
        </thead>

        <tbody>
          {tableData?.map((item) => (
            <tr className="border-b border-gray">
              <th scope="row">
                <div class="flex items-center">
                  <img
                    src={item?.image}
                    class="w-20 h-20 rounded-full"
                    alt=""
                  />
                </div>
              </th>
              <td>
                <p class="py-10 text-[#747d88] font-[400] font-openSans text-[1rem]">
                  {item?.name}
                </p>
              </td>
              <td>
                <p class=" py-10 text-[#747d88] font-[400] font-openSans text-[1rem]">
                  {item?.Price}
                </p>
              </td>
              <td>
                <div class="flex items-center mt-4">
                  <QuantityInput className="" />
                </div>
              </td>
              <td>
                <p class=" py-10 text-[#747d88] font-[400] text-[1rem] font-openSans">
                  2.99 $
                </p>
              </td>
              <td>
                <button class="btn rounded-full bg-light border mt-4 py-2 px-2 bg-[#f4f6f8]">
                  <i class="fas fa-times text-danger  ">
                    <IoCloseSharp className="text-[#dc3545] font-[600] text-[20px]" />
                  </i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className=" md:flex flex-wrap gap-y-6 mt-10 mb-5 flex gap-16">
        <input
          type="text"
          placeholder="Coupon Code"
          className=" border-b-[#dee2e6]  outline-none  rounded-lg border-b w-[186px] py-4"
        />
        <button className="rounded-full border border-bs-secondary px-5 py-4 hover:bg-bs-secondary text-bs-primary text-[16px] font-openSans font-[600] hover:text-bs-white">
          {" "}
          Apply Coupon
        </button>
      </div>
      <div className="w-full flex justify-end">
        <div className="w-[356px] bg-[#F4F6F8] rounded-lg">
          <div className="mt-6 px-[1.5rem] py-4">
            <h1 className="text-[40px] font-raleway font-[800] text-[#45595b]">
              Cart <span className="font-[600]">Total</span>
            </h1>
          </div>
          <div className="flex justify-between px-[1.5rem] ">
            <h5 className="text-[20px] font-raleway text-[#45595B] font-[600]">
              Subtotal:
            </h5>
            <p className="text-[16px] font-openSans text-[#747d88] font-[400]">
              $96.00
            </p>
          </div>
          <div className="flex justify-between mt-3 px-[1.5rem]">
            <h5 className="text-[20px] font-raleway text-[#45595B] font-[600]">
              Shipping:
            </h5>
            <p className="text-[16px] font-openSans text-[#747d88] font-[400]">
              Flat rate: $3.00
            </p>
          </div>
          <div className="text-end">
            <p className="text-[16px] font-openSans text-[#747d88] font-[400] border-b-2 px-[1.5rem] pb-5">
              Shipping to Ukraine.
            </p>
          </div>
          <div className="flex justify-between border-b-2 py-4">
            <h5 className="text-[20px] font-raleway text-[#45595B] font-[600] px-[1.5rem]">
              Total:
            </h5>
            <p className="text-[16px] font-openSans text-[#747d88] font-[400] px-[1.5rem] ">
              $99.00
            </p>
          </div>
          <div className="px-[1.5rem] py-5">
            <button className="rounded-full border border-bs-secondary px-5 py-4 hover:bg-bs-secondary text-bs-primary text-[16px] font-openSans font-[600] hover:text-bs-white">
              {" "}
              PROCEED CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="w-[80%] mx-auto">
<div className="flex justify-between items-center px-10 border-b border-black py-4">
     <h1>Mustafa</h1>
     <h1>Michael</h1>
     <div className="flex items-center gap-20">
       <h1>Ghayas</h1>
       <h1>Ghayas</h1>     </div>
     <div className="flex items-center gap-20">
       <h1>Ikram</h1>
       <h1>Ikram</h1>
     </div>
   </div>
   <div>
     {tableData?.map((e, index) => (
       <div
         key={index}
         className="flex justify-between items-center px-10 border-b border-black py-5"
       >
         <Image
           src={e?.image}           alt=""
           width={30}
           height={30}
          className="w-[80px] rounded-full"
         />
         <h1 className="">{e?.name}</h1>
         <div className="flex items-center gap-20 ">
           <h1 className="pl-8">{e?.Price}</h1>
           <QuantityInput className="" />
         </div>
         <div className="flex items-center gap-20">
           <h1>{e?.total}</h1>
           <h1>{e?.handle}</h1>
         </div>
       </div>
     ))}
  </div>
  <div className="mt-10 mb-5 flex gap-16">
     <input
       type="text"
       placeholder="Coupon Code"
       className=" border-b-[#dee2e6]  outline-none  rounded-lg border-b w-[186px] py-4"
    />
     <button className="rounded-full border border-bs-secondary px-5 py-4 hover:bg-bs-secondary text-bs-primary text-[16px] font-openSans font-[600] hover:text-bs-white">
       {" "}
       Apply Coupon
     </button>
   </div>
   <div className="w-[356px] bg-[#F4F6F8] rounded-lg justify-end">
     <div className="mt-6 px-[1.5rem] py-4">
       <h1 className="text-[40px] font-raleway font-[800] text-[#45595b]">
         Cart <span className="font-[600]">Total</span>
       </h1>
     </div>
     <div className="flex justify-between px-[1.5rem] ">
       <h5 className="text-[20px] font-raleway text-[#45595B] font-[600]">
         Subtotal:
       </h5>
       <p className="text-[16px] font-openSans text-[#747d88] font-[400]">
         $96.00
       </p>
     </div>
     <div className="flex justify-between mt-3 px-[1.5rem]">
       <h5 className="text-[20px] font-raleway text-[#45595B] font-[600]">
         Shipping:
       </h5>
       <p className="text-[16px] font-openSans text-[#747d88] font-[400]">
         Flat rate: $3.00
       </p>
     </div>
     <div className="text-end ">
       <p className="text-[16px] font-openSans text-[#747d88] font-[400] border-b-2 px-[1.5rem]">
         Shipping to Ukraine.
       </p>
     </div>
     <div className="flex justify-between border-b-2 py-4">
       <h5 className="text-[20px] font-raleway text-[#45595B] font-[600] px-[1.5rem]">
         Total:
       </h5>
       <p className="text-[16px] font-openSans text-[#747d88] font-[400] px-[1.5rem] ">
         $99.00
       </p>
     </div>
    <div className="px-[1.5rem] py-5">
      <button className="rounded-full border border-bs-secondary px-5 py-4 hover:bg-bs-secondary text-bs-primary text-[16px] font-openSans font-[600] hover:text-bs-white">
         {" "}
        PROCEED CHECKOUT
       </button>
     </div>
   </div>
 </div> */
}
