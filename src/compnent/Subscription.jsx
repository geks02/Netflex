import React from "react";

const Subscription = () => {
  return (
    <div className="flex flex-col items-center gap-5 py-15">
      <div className="text-center">
        Ready to watch? Enter your email to create or restart your membership.
      </div>
      <div className="flex text-center justify-center items-center">
        <input
          className="border border-gray-500 p-3 pr-70 mr-2 "
          type="text"
          placeholder="Email Address"
        />
        <button className="bg-red-600 text-2xl text-white p-2 px-5 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Subscription;
