/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./navmodule.css";
import foodyZone from "/Foody Zone(1).svg";

// eslint-disable-next-line react/prop-types

export const Navbar = ({ SearchFood, filtedFood, category }) => {
  const filterOption = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  return (
    <>
      <nav className=" w-full">
        <section className=" navcss p-3">
          <div className=" flex flex-wrap justify-center       sm:justify-between  ">
            <img src={foodyZone} alt="" />

            <input
              type="text"
              placeholder=" search here.."
              className=" bg-transparent rounded-md text-white py-1 px-2  mt-6 border-2 border-red-500 "
              onChange={SearchFood}
            />
          </div>
        </section>

        <ul className="category">
          {filterOption.map((filter, i) => (
            <li
              key={i}
              onClick={() => {
                filtedFood(filter.type);
              }}
            >
              {filter.name}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
