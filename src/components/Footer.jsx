import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            At PuppySpot, we have the widest selection of puppies for sale on
            the internet. Whether you're looking for a purebred Australian
            Shepherd, a hypoallergenic Mini Poodle, a dashing designer breed
            like the Goldendoodle or the Cavapoo, or the ever-popular Golden
            Retriever, we've got what you're looking for. Our exclusive network
            of breeders is second to none, which is why every puppy provided
            through us is backed by our industry-leading 10-year health
            commitment
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+234-08-3306-1020</li>
            <li>musaumarfaruq17@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ Forever.com - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
