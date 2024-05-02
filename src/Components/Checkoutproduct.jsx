import Image from "next/image";
import React from "react";
import ShippingRow from "./ShippingRow";
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
    <div className="w-full col-span-full lg:col-span-5">
      <table class="table w-full">
        <thead>
          <tr class="text-left border-b border-black  text-[#747d88] ">
            <th className="text-[1rem] font-[500]">Products</th>
            <th className="text-[1rem] font-[500]">Name</th>
            <th className="text-[1rem] font-[500]">Price</th>
            <th className="text-[1rem] font-[500]">Quantity</th>
            <th className="text-[1rem] font-[500]">Total</th>
          </tr>
        </thead>
        <tbody className="">
          {multipleData?.map((item) => (
            <tr className="border-b border-gray">
              <td scope="flex items-center">
                <img src={item?.image} class="w-20 h-20 rounded-full" alt="" />
              </td>
              <td>
                <p class="w-[100px] py-14 text-[#747d88]">{item?.name}</p>
              </td>
              <td>
                <p class="py-14 text-[#747d88]">{item?.price}</p>
              </td>
              <td>
                <p class="py-14 text-[#747d88]">{item?.quantity}</p>
              </td>
              <td>
                <p class="py-14 text-[#747d88]">{item?.total}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ShippingRow />
    </div>
  );
}

// const ProductRow = ({ imageSrc, name, price, quantity, total }) => (
//   <tr>
//     <th scope="row">
//       <div className="flex items-center mt-2">
//         <img
//           src={imageSrc}
//           className="img-fluid rounded-circle"
//           style={{ width: "90px", height: "90px" }}
//           alt=""
//         />
//       </div>
//     </th>
//     <td className="py-5">{name}</td>
//     <td className="py-5">${price}</td>
//     <td className="py-5">{quantity}</td>
//     <td className="py-5">${total}</td>
//   </tr>
// );

// const ShippingRow = () => (
//   <tr>
//     <th scope="row"></th>
//     <td className="py-5">
//       <p className="mb-0 text-dark py-4">Shipping</p>
//     </td>
//     <td colSpan="3" className="py-5">
//       <div className="form-check text-start">
//         <input
//           type="checkbox"
//           className="form-check-input bg-primary border-0"
//           id="Shipping-1"
//           name="Shipping-1"
//           value="Shipping"
//         />
//         <label className="form-check-label" htmlFor="Shipping-1">
//           Free Shipping
//         </label>
//       </div>
//       <div className="form-check text-start">
//         <input
//           type="checkbox"
//           className="form-check-input bg-primary border-0"
//           id="Shipping-2"
//           name="Shipping-1"
//           value="Shipping"
//         />
//         <label className="form-check-label" htmlFor="Shipping-2">
//           Flat rate: $15.00
//         </label>
//       </div>
//       <div className="form-check text-start">
//         <input
//           type="checkbox"
//           className="form-check-input bg-primary border-0"
//           id="Shipping-3"
//           name="Shipping-1"
//           value="Shipping"
//         />
//         <label className="form-check-label" htmlFor="Shipping-3">
//           Local Pickup: $8.00
//         </label>
//       </div>
//     </td>
//   </tr>
// );

// const TotalRow = ({ total }) => (
//   <tr>
//     <th scope="row"></th>
//     <td className="py-5">
//       <p className="mb-0 text-dark text-uppercase py-3">TOTAL</p>
//     </td>
//     <td className="py-5"></td>
//     <td className="py-5"></td>
//     <td className="py-5">
//       <div className="py-3 border-bottom border-top">
//         <p className="mb-0 text-dark">${total}</p>
//       </div>
//     </td>
//   </tr>
// );

// const Checkoutproduct = () => (
//   <div className="table-responsive">
//     <table className="table">
//       <thead>
//         <tr className="text-left border-b border-black ">
//           <th scope="col">Products</th>
//           <th scope="col">Name</th>
//           <th scope="col">Price</th>
//           <th scope="col">Quantity</th>
//           <th scope="col">Total</th>
//         </tr>
//       </thead>
//       <tbody>
//         <ProductRow
//           imageSrc="single-item.jpg"
//           name="Awesome Brocoli"
//           price="69.00"
//           quantity="2"
//           total="138.00"
//           className="w-20 h-20 rounded-full"
//         />
//         <ProductRow
//           imageSrc="vegetable-item-5.jpg"
//           name="Potatoes"
//           price="69.00"
//           quantity="2"
//           total="138.00"
//         />
//         <ProductRow
//           imageSrc="single-item.jpg"
//           name="Big Banana"
//           price="69.00"
//           quantity="2"
//           total="138.00"
//         />
//         <tr>
//           <th scope="row"></th>
//           <td className="py-5"></td>
//           <td className="py-5"></td>
//           <td className="py-5">
//             <p className="mb-0 text-dark py-3">Subtotal</p>
//           </td>
//           <td className="py-5">
//             <div className="py-3 border-bottom border-top">
//               <p className="mb-0 text-dark">$414.00</p>
//             </div>
//           </td>
//         </tr>
//         <ShippingRow />
//         <TotalRow total="135.00" />
//       </tbody>
//     </table>
//   </div>
// );
