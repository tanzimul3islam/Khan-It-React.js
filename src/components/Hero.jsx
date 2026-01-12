import React from "react";
import Container from "./Container";
import StatusCard from "./StatusCard";

const statsData = [
  {
    id: 1,
    iconSrc: "/icons/clients-icon.png",
    count: "500+",
    label: "Clients",
  },
  { id: 2, iconSrc: "/icons/success-icon.png", count: "98%", label: "Success" },
  { id: 3, iconSrc: "/icons/support-icon.png", count: "24h", label: "Support" },
];

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#f0fafc] to-[#fff8f7] w-full md:w-[1920px] min-h-screen md:h-[967px] overflow-x-hidden">
      <Container className="pt-[100px] md:pt-[234px]">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full md:w-[1398px] md:h-[567px] gap-[40px] md:gap-[56px] opacity-100 px-4 md:px-0">
          <div className="w-full md:w-[718px] md:h-[523px] text-center lg:text-left">
            <div className="flex flex-col gap-[20px] md:gap-[24px] w-full md:w-[718px] md:h-[417px]">
              <h1 className="font-['DM_Sans'] font-extrabold text-[40px] sm:text-[56px] md:text-[80px] leading-[120%] md:leading-[130%] tracking-[-0.18px]">
                <span>Digital Marketing</span> <br />
                <span>Agency in</span>
                <br /> Bangladesh
              </h1>
              <p className="w-full md:w-[609px] font-['Inter'] font-normal text-[16px] md:text-[18px] leading-[150%] tracking-normal text-gray-600 mx-auto lg:mx-0">
                Khan IT (led by SEO expert Md Faruk Khan) helps businesses get
                150% more leads and 2.5x higher conversions through integrated
                digital marketing and web design.
              </p>
              <div className="pt-[8px] flex justify-center lg:justify-start">
                <button className="w-full sm:w-[320px] h-[50px] py-[12px] px-[24px] rounded-[8px] bg-[#0271E8E8] transition-transform active:scale-95 flex items-center justify-center">
                  <span className="text-[#FFFFFF] font-['Inter'] font-medium text-[16px] md:text-[20px] leading-[26px]">
                    Book Your Free Consultation
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row w-full md:w-[624px] md:h-[567px] gap-[24px] items-center justify-center">
            <div className="flex flex-col gap-[24px]">
              <div className="w-[300px] h-[241px] rounded-[24px] border border-[#C7D2FE4D] bg-gradient-to-br from-[#F1F1FD] to-[#F5E9FB] shadow-sm">
                <div className="p-[24px]">
                  <div className="w-[64px] h-[64px] mb-[10px]">
                    <img
                      src="/icons/Frame.png"
                      alt="Rocket"
                      className="w-[56px] h-[56px] object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <span className="text-[#060606] font-inter font-bold text-[48px] leading-[54px]">
                        200%
                      </span>
                      <img
                        src="/icons/Conversions-Arrow.png"
                        alt="Up"
                        className="w-[40px] h-[40px] object-contain"
                      />
                    </div>
                    <p className="font-inter font-semibold text-[16px] text-[#060606]/80">
                      More Conversions
                    </p>
                    <p className="font-inter font-normal text-[14px] text-[#060606]/70">
                      Than Industry Average
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-[300px] h-[230px]">
                <img
                  src="video-image.png"
                  alt="video"
                  className="w-full h-full rounded-[24px] object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-[24px]">
              <div
                className="w-[300px] h-[306px] rounded-[24px] border border-[#B4D5F9] md:mt-[37px]"
                style={{
                  background:
                    "linear-gradient(136.04deg, rgba(196, 219, 245, 0.9) 0%, rgba(236, 241, 248, 0.9) 107.36%)",
                }}
              >
                <div className="p-[24px]">
                  <p className="font-inter font-bold text-[18px] text-[#060606] mb-[12px]">
                    Our Track Record
                  </p>
                  <div className="flex flex-col gap-[12px]">
                    {statsData.map((stat) => (
                      <StatusCard
                        key={stat.id}
                        iconSrc={stat.iconSrc}
                        count={stat.count}
                        label={stat.label}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative w-[300px] h-[241px] rounded-[24px] border border-[#C7D2FE4D] bg-[#FDE1BF]">
                <div className="absolute flex items-center justify-center h-[56px] w-[56px] bg-[#F459250F] top-0 right-0 rounded-bl-[16px] rounded-tr-[18px]">
                  <img
                    src="/icons/quote-icon.png"
                    alt="Quote"
                    className="w-[32px] h-[32px] object-contain"
                  />
                </div>
                <div className="p-[24px] flex flex-col gap-[20px]">
                  <img
                    src="/icons/walton-icon.png"
                    alt="Walton"
                    className="w-[62px] h-[41px] object-contain"
                  />
                  <div className="flex flex-col gap-[12px]">
                    <img
                      src="/icons/stars-icon.png"
                      alt="stars"
                      className="w-[132px] h-[20px] object-contain"
                    />
                    <p className="font-inter font-normal text-[14px] leading-[20px] text-[#060606]">
                      "Their marketing strategies <br /> are simply outstanding"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
