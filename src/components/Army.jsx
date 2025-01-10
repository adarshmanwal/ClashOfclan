import React from "react";
import { TroopsData } from "../troopsData";

export default function Army() {
  return (
    <>
      <div className="flex flex-col justify-center ">
        {/* Capacity Section */}
        <div className="bg-white w-[100%]">
          <p className="text-lg font-semibold">Troops: 50/100</p>
        </div>
        {/* SPELL QUEUE */}
        <div className="flex">
          <div className="bg-gray-200 flex-none w-[80%] rounded-lg h-[80px] m-1 flex justify-center items-center">
            <p className="text-lg font-semibold ">Your current army</p>
          </div>
          <div className="bg-gray-200 flex-1 w-1 rounded-lg h-[80px] m-1 flex justify-center items-center">
            <p className="text-lg font-semibold">Your current army</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center ">
        {/* Capacity Section */}
        <div className="bg-white w-[100%]">
          <p className="text-lg font-semibold">Spell: 50/100</p>
        </div>
        {/* SPELL QUEUE */}
        <div className="flex">
          <div className="bg-gray-200 flex-none w-[70%] rounded-lg h-[80px] m-1 flex justify-center items-center">
            <p className="text-lg font-semibold ">Your current army</p>
          </div>
          <div className="bg-gray-200 flex-1 w-1 rounded-lg h-[80px] m-1 flex justify-center items-center">
            <p className="text-lg font-semibold">Your current army</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center ">
        {/* Capacity Section */}
        <div className="bg-white w-[100%]">
          <p className="text-lg font-semibold">clan castle : 50/100</p>
        </div>
        {/* SPELL QUEUE */}
        <div className="flex">
          <div className="bg-gray-200 flex-none w-96 rounded-lg h-[80px] m-1 flex justify-center items-center">
            <p className="text-lg font-semibold ">Your current army</p>
          </div>
          <div className="bg-gray-200 flex-1 w-34 rounded-lg h-[80px] m-1 flex justify-center items-center">
            <p className="text-lg font-semibold">Your current army</p>
          </div>
          <div className="bg-gray-200 flex-2 w-32 rounded-lg h-[80px] m-1 flex justify-center items-center">
            <p className="text-lg font-semibold">Your current army</p>
          </div>
          <div className="bg-gray-200 flex-2 w-32 rounded-lg h-[80px] m-1 flex justify-center items-center">
            <div className="bg-white w-[100%] h-[25%] m-1 flex flex-col justify-end ">
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                Delete
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                Boost
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
