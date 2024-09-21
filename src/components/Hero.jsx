import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-2 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-midium text-sm   md:text-base">
              OUR BESTSELLERS
            </p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed py-4 px-6">
            Welcome to PuppySpot, where you can browse our adorable,
            ready-for-love puppies from top breeders, enjoy three delivery
            options, a 10-year health commitment, and complimentary
            consultations with our Puppy Concierges when you’re ready
          </h1>
          <div className="flex items-center gap2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      <img src={assets.hero_img} className="w-full sm:w-1/2" alt="" />
    </div>
  );
};

export default Hero;
