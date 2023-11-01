import React from "react";
import logoV2 from "../../asset/logoV2.png";

import { Link } from "react-router-dom";

function AddOrders() {
  return (
    <div
      className="bg-[#B9B4C7] h-screen flex flex-col justify-center items-center
    md:flex md:flex-row md:justify-center md:items-center
    lg:flex lg:flex-row lg:justify-center lg:items-center
    "
    >
      <div className=" w-[200px]  h-[150px] rounded-t-[20px]  md:w-[300px] md:h-[400px] md:rounded-l-3xl md:rounded-r-none bg-slate-50  lg:w-96 lg:h-[550px] lg:rounded-l-3xl  lg:rounded-r-none flex justify-center items-center">
        <img src={logoV2} alt="logoV2" className=" w-3/4 w-[100%]" />
      </div>
      <div className="  w-[200px]  h-[300px] rounded-b-[20px]   bg-[#393646]  md:w-[300px] md:h-[400px]  md:rounded-r-3xl md:rounded-l-none lg:w-96 lg:h-[550px] lg:rounded-r-3xl ">
        <div className="">
          <h3 className="  text-[10px]  md:text-center md:text-[20px]  lg:text-4xl font-mono text-slate-50   text-center font-bold my-[10px]">
            CREATE ORDERS
          </h3>
        </div>

        <form className=" card-body-color">
          <div className="my-2 flex justify-center items-center ">
            <input
              type="text "
              className="  rounded-[5px] placeholder:text-[10px] md:text-[10px]  w-[150px] h-[20px] md:rounded-lg md:w-[200px] md:h-[30px]  md:placeholder:text-[15px] md:text-[15px]  lg:w-80 lg:h-14    lg:placeholder:text-[20px] lg:text-[20px]"
              id="Rooms "
              name="Rooms "
              placeholder="Rooms "
            />
          </div>

          <div className="my-2 flex justify-center items-center ">
            <input
              type="text"
              className="  rounded-[5px] placeholder:text-[10px] md:text-[10px]   w-[150px] h-[20px] md:rounded-lg md:w-[200px] md:h-[30px]  md:placeholder:text-[15px] md:text-[15px] lg:w-80 lg:h-14     lg:placeholder:text-[20px] lg:text-[20px]"
              id="capacity"
              name="capacity"
              placeholder="capacity"
            />
          </div>
          <div className="my-2 flex justify-center items-center ">
            <input
              type="text"
              className="  rounded-[5px] placeholder:text-[10px] md:text-[10px]   w-[150px] h-[20px] md:rounded-lg md:w-[200px] md:h-[30px]  md:placeholder:text-[15px] md:text-[15px] lg:w-80 lg:h-14     lg:placeholder:text-[20px] lg:text-[20px]"
              id="Snack"
              name="Snack"
              placeholder="Snack"
            />
          </div>
          <div className="my-2 flex justify-center items-center ">
            <input
              type="text"
              className="  rounded-[5px] placeholder:text-[10px] md:text-[10px]   w-[150px] h-[20px] md:rounded-lg md:w-[200px] md:h-[30px]  md:placeholder:text-[15px] md:text-[15px] lg:w-80 lg:h-14     lg:placeholder:text-[20px] lg:text-[20px]"
              id="Lunch"
              name="Lunch"
              placeholder="Lunch"
            />
          </div>
          <div className="my-2 flex justify-center items-center ">
            <input
              type="text"
              className="  rounded-[5px] placeholder:text-[10px] md:text-[10px]   w-[150px] h-[20px] md:rounded-lg md:w-[200px] md:h-[30px]  md:placeholder:text-[15px] md:text-[15px] lg:w-80 lg:h-14     lg:placeholder:text-[20px] lg:text-[20px]"
              id="Extra Time"
              name="Extra Time"
              placeholder="Extra Time"
            />
          </div>
          <div className="my-2 flex justify-center items-center ">
            <input
              type="text"
              className="  rounded-[5px] placeholder:text-[10px] md:text-[10px]   w-[150px] h-[20px] md:rounded-lg md:w-[200px] md:h-[30px]  md:placeholder:text-[15px] md:text-[15px] lg:w-80 lg:h-14     lg:placeholder:text-[20px] lg:text-[20px]"
              id="Booking"
              name="Booking"
              placeholder="Booking"
            />
          </div>
          <div className=""></div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-slate-50 w-[150px] h-[20px]   md:w-[200px] md:h-[30px]  lg:w-80 lg:h-14 rounded-3xl text-[15px]"
            >
              CREATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddOrders;
