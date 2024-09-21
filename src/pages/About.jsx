import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed impedit
            quidem dolores est molestiae eveniet facere modi provident incidunt
            a recusandae quo praesentium amet eligendi, alias culpa quaerat
            minus. Vitae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus,
            iusto labore commodi ipsa neque nemo facilis reiciendis mollitia
            porro ea praesentium doloribus impedit atque fuga nihil cupiditate.
            Quisquam, eligendi veniam?
          </p>
          <b className="text-gray-800">OUR Mission</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
            dolorum labore quam aperiam earum blanditiis soluta nihil fuga
            voluptatum debitis aspernatur laborum dolor facere saepe neque
            architecto nemo, quo omnis!
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugiat
            necessitatibus ipsa sit doloremque libero nostrum, dicta aspernatur
            omnis ducimus commodi non autem dolores a molestias fugit, minima
            cumque reiciendis?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convinence</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugiat
            necessitatibus ipsa sit doloremque libero nostrum, dicta aspernatur
            omnis ducimus commodi non autem dolores a molestias fugit, minima
            cumque reiciendis?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugiat
            necessitatibus ipsa sit doloremque libero nostrum, dicta aspernatur
            omnis ducimus commodi non autem dolores a molestias fugit, minima
            cumque reiciendis?
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
}

export default About;