import React from "react";

export default function StatusCard({ iconSrc, count, label }) {
  return (
    <div class="flex items-center w-[252px] h-[66px] rounded-[16px] border border-[#B4D5F9] bg-white/60 opacity-100 rotate-0">
      <div class="flex flex-row items-center ml-[15px] w-[40px] h-[40px] rounded-[12px] bg-[linear-gradient(135deg,rgba(33,131,237,0.2)_0%,rgba(90,162,242,0.05)_100%)]">
        <img
          src={iconSrc}
          alt={`${label} icon`}
          className="w-[24px] h-[24px] m-[8px] object-contain"
        />
      </div>
      <p className="font-inter ml-[15px] whitespace-nowrap font-bold text-[20px]  leading-[20px] tracking-normal text-[#060606] mb-[12px]">
        {count} {label}
      </p>
    </div>
  );
}
