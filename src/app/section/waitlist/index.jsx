import React from "react";
import Box from "@/app/asset/svg/boxes.svg";
function WaitList() {
  return (
    <div
      className=" flex flex-col items-center justify-center pt-10 pb-20 relative bg-cover bg-center w-full px-6"
      style={{ backgroundImage: `url(${Box.src})` }}
    >
      {" "}
      <div className="relative flex flex-col items-center text-center bg-[#F3F3F3] text-black gap-6 rounded-lg mt-10 p-8 lg:mx-16">
        <div>
          <h2 className="text-[20px] lg:text-[30px] font-medium text-center">
            Join the Waitlist + FREE BONUS
          </h2>
          <p className="max-w-[533px] text-[14px] lg:text-[18px] font-medium">
            Sign up for an early notification upon launch and get a Free ebook
            on product management resources
          </p>
        </div>
        <div className="w-full flex flex-col items-center gap-4 pb-6 text-[#545454] ">
              <input
                placeholder="Enter your best Email"
                className="w-full lg:w-[408px] h-auto lg:h-[50px] outline-none p-4 bg-[#F8F8F8] rounded-lg"
              />
              <button className="flex flex-col justify-center bg-black text-white w-full lg:w-[408px] h-[63px] rounded-lg text-[18px]">
                <span className="block leading-[24px]">
                  {" "}
                  Sign up for Waitlist{" "}
                </span>
                <span className="text-[12px]">Free ebook inclusive</span>
              </button>
            </div>
      </div>
    </div>
  );
}

export default WaitList;
