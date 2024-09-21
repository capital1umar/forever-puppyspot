import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = () => {
    event.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        We have spent over twenty years sourcing the highest quality breeders
        from all around the country. From the Miniature Poodle to the Great
        Dane, each puppy comes with a special AKC registration package provided
        through PuppySpot. We want you to feel secure in your purchase, knowing
        your breeder only utilizes the most responsible, sustainable breeding
        practices.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
        />
        <button
          className="bg-black text-white text-xs px-10 py-4 "
          type="submit"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
