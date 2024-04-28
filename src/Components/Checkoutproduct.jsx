import Image from "next/image";
import React from "react";

export default function Checkoutproduct() {
  const multipleData = [
    {
      image: "single-item.jpg",
      name: "Awesome Brocoli",
      price: "$69.00",
      quantity: "2",
      total: "$138.00",
    },
    {
      image: "vegetable-item-5.jpg",
      name: "Awesome",
      price: "$69.00",
      quantity: "2",
      total: "$138.00",
    },
    {
      image: "single-item.jpg",
      name: "Awesome",
      price: "$69.00",
      quantity: "2",
      total: "$138.00",
    },
  ];
  return (
    <div className="w-full">
      <table class="table w-full">
        <thead>
          <tr class="text-left border-b border-black">
            <th>Products</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className="">
          {multipleData?.map((item) => (
            <tr className="border-b border-gray">
              <td scope="flex items-center">
                <img src={item?.image} class="w-20 h-20 rounded-full" alt="" />
              </td>
              <td>
                <p class="w-[100px] py-14">{item?.name}</p>
              </td>
              <td>
                <p class="py-14">{item?.price}</p>
              </td>
              <td>
                <p class="py-14">{item?.quantity}</p>
              </td>
              <td>
                <p class="py-14">{item?.total}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
