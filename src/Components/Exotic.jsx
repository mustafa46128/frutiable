import React from "react";
import Image from "next/image";

export default function Exotic() {
  return (
    // <div className="bg-bs-secondary w-[100%] mx-auto flex justify-between px-28 mb-20 ">
    //   <div className="w-[50%] pt-16">
    //     <h1 className="w-[70%] text-white text-[60px] font-extrabold font-raleway">
    //       Fresh exotic guice
    //     </h1>
    //     <p className="text-[rgb(69,89,91)] font-normal text-7xl mt-8">
    //       in Our Store
    //     </p>
    //     <p className="mt-8  text-[#45595b]  text-[16px] font-openSans">
    //       The generated Lorem Ipsum is therefore always free from repetition
    //       <br />
    //       injected humour, or non-characteristic words etc.
    //     </p>
    //     <button className="border-white rounded-full px-10 py-4 font-[600] mt-5 border-2">
    //       BUY
    //     </button>
    //   </div>
    //   <div className="w-[50%] relative pt-12">
    //     <Image
    //       src="/baner-1.png"
    //       alt=" "
    //       width={200}
    //       height={200}
    //       className="w-[90%]"
    //     />
    //     <div className="flex bg-white rounded-full w-[140px] h-[140px] text-center justify-center items-center absolute">
    //       <h className="text-[100px] font-[600] font-raleway">1</h>
    //       <div className="flex flex-col">
    //         <span className="text-[28px] font-[600] font-raleway">50$</span>
    //         <span className="text-[#6c757d] text-[24px] font-[600] font-raleway">
    //           kg
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-bs-secondary my-5">
      <div className="w-[80%] mx-auto py-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <div className="py-3">
            <h1 className="text-white text-5xl lg:text-[4rem] font-extrabold">
              Fresh Exotic Fruits
            </h1>
            <p className="font-normal text-[#45595b] text-5xl lg:text-6xl mb-5 mt-3">
              in Our Store
            </p>
            <p className="text-[#45595b] mb-4">
              The generated Lorem Ipsum is therefore always free from repetition
              injected humour, or non-characteristic words etc.
            </p>
            <div className="py-6">
              <a
                href="#"
                className="btn border-2 border-white rounded-full text-[#45595b] 
              py-4 px-12 font-[600] hover:bg-bs-primary "
              >
                BUY
              </a>
            </div>
          </div>
          <div className="relative">
            <img src="/baner-1.png" className="w-full rounded" alt="" />
            <div
              className="absolute inset-0 flex items-center justify-center bg-white rounded-full"
              style={{ width: "140px", height: "140px" }}
            >
              <h1 className="text-[100px] font-[600] text-[#343a40] font-raleway">
                1
              </h1>
              <div className="flex flex-col tracking-wide">
                <span className="text-[2rem] mb-0 text-[#343a40] font-[600] font-raleway">
                  50$
                </span>
                <span className="text-[1.5rem] mb-0 text-[#6c757d] font-[600] font-raleway">
                  kg
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
