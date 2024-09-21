// import React, { useContext, useState } from "react";
// import Title from "../components/Title";
// import CartTotal from "../components/CartTotal";
// import { assets } from "../assets/assets";
// import { ShopContext } from "../context/ShopContext";
// import { useRef } from "react";
// import emailjs from "@emailjs/browser";

// const PlaceOrder = () => {
//   const [method, setMethod] = useState("cod");

//   const { navigate } = useContext(ShopContext);

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("service_4ongjx7", "template_e2dajde", form.current, {
//         publicKey: "oTWdf20H0zfW7VEn-",
//       })
//       .then(
//         () => {
//           console.log("SUCCESS!");
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };

//   const handleMakeTransfer = () => {
//     sendEmail(); // Call to send the email
//     navigate("/make-payment"); // Navigate to the payment page
//   };

//   return (
//     <div className="flex flex-col justify-between sm:flex-row  gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t ">
//       <form
//         onSubmit={sendEmail}
//         ref={form}
//         className="flex flex-col gap-4 w-full sm:max-w-[480px]"
//       >
//         <div className="text-xl sm:text-2xl my-3">
//           <Title text1={"DELIVERY"} text2={"INFORMATION"} />
//         </div>
//         <div className="flex gap-3 ">
//           <input
//             className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
//             placeholder="First name"
//             type="text"
//             name="first_name"
//           />
//           <input
//             className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
//             placeholder="Last name"
//             type="text"
//             name="last_name"
//           />
//         </div>
//         <input
//           className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
//           placeholder="Email address"
//           type="email"
//           name="user_email"
//         />
//         <input
//           className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
//           placeholder="Street"
//           type="text"
//           name="user_street"
//         />
//         <div className="flex gap-3 ">
//           <input
//             className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
//             placeholder="City"
//             type="text"
//             name="user_city"
//           />
//           <input
//             className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
//             placeholder="State"
//             type="text"
//             name="user_state"
//           />
//         </div>
//         <div className="flex gap-3 ">
//           <input
//             className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
//             placeholder="Zipcode"
//             type="number"
//             name="user_zipcode"
//           />
//           <input
//             className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
//             placeholder="country"
//             type="text"
//             name="user_country"
//           />
//         </div>
//         <input
//           className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
//           placeholder="Phone"
//           type="number"
//           name="user_number"
//         />
//       </form>

//       <div className="mt-8">
//         <div className="mt-8 min-w-80">
//           <CartTotal />
//         </div>
//         <div className="mt-12">
//           <Title text1={"PAYMENT"} text2={"METHOD"} />
//           <div className="flex gap-3 flex-col lg:flex-row">
//             <div
//               onClick={() => setMethod("stripe")}
//               className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
//             >
//               <p
//                 className={`min-w-3.5 h-3.5 border rounded-full ${
//                   method === "stripe" ? "bg-green-400" : ""
//                 }`}
//               ></p>
//               <img className="h-5 mx-4 " src={assets.stripe_logo} alt="" />
//             </div>
//             <div
//               onClick={() => setMethod("razorpay")}
//               className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
//             >
//               <p
//                 className={`min-w-3.5 h-3.5 border rounded-full ${
//                   method === "razorpay" ? "bg-green-400" : ""
//                 }`}
//               ></p>
//               <img className="h-5 mx-4 " src={assets.razorpay_logo} alt="" />
//             </div>
//             <div
//               onClick={() => setMethod("cod")}
//               className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
//             >
//               <p
//                 className={`min-w-3.5 h-3.5 border rounded-full ${
//                   method === "cod" ? "bg-green-400" : ""
//                 }`}
//               ></p>
//               <p
//                 type="submit"
//                 onClick={handleMakeTransfer}
//                 className="text-gray text-sm font-medium mx-4"
//               >
//                 Make A Wire Transfer
//               </p>
//             </div>
//           </div>
//           <div className="w-full text-end mt-8">
//             <button
//               type="submit"
//               onClick={() => navigate("/support")}
//               className="bg-black text-white px-16 py-3 text-sm"
//             >
//               Support Admin
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlaceOrder;

import React, { useContext, useState, useRef } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import emailjs from "@emailjs/browser";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(ShopContext);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default behavior

    emailjs
      .sendForm("service_4ongjx7", "template_e2dajde", form.current, {
        publicKey: "oTWdf20H0zfW7VEn-",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          navigate("/make-payment"); // Navigate to the payment page after success
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleMakeTransfer = (e) => {
    sendEmail(e); // Pass the event to sendEmail
  };

  return (
    <div className="flex flex-col justify-between sm:flex-row gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      <form
        onSubmit={sendEmail}
        ref={form}
        className="flex flex-col gap-4 w-full sm:max-w-[480px]"
      >
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="First name"
            type="text"
            name="first_name"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Last name"
            type="text"
            name="last_name"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Email address"
          type="email"
          name="user_email"
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Street"
          type="text"
          name="user_street"
        />
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="City"
            type="text"
            name="user_city"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="State"
            type="text"
            name="user_state"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Zipcode"
            type="number"
            name="user_zipcode"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Country"
            type="text"
            name="user_country"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Phone"
          type="number"
          name="user_number"
        />
      </form>

      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p
                onClick={handleMakeTransfer} // Ensure this is calling the transfer handler
                className="text-gray text-sm font-medium mx-4"
              >
                Make A Wire Transfer
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              type="button"
              onClick={() => navigate("/support")}
              className="bg-black text-white px-16 py-3 text-sm"
            >
              Support Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
