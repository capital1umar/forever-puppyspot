import React from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border">
        <Title text1={"CONTACT US"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-SemiBold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            50709 Willms Station <br />
            Suite 350, Washinton, USA
          </p>
          <p>
            Tel: (415) 555-0132 <br />
            Email: admin@ferever.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Carrers at forever
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job opennings.
          </p>
          <button
            className="
          border border-black px-8 py-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500"
          >
            Explore Job
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Contact;
