import React from "react";

export default function Final() {
  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <div className="text-green-400">
          <svg></svg>
        </div>
        <div className="mt-3 text-xl font-semibold uppercase text-green-500">
          Congratulations!
        </div>
        <div className="text-lg font-semibold text-gray-500">
          Your Account has been created.
        </div>
        <a className="mt-10" href="/">
          <button className="bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out">
            Close
          </button>
        </a>
      </div>
    </div>
  );
}
