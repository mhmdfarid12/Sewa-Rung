import React from "react";
import logoV2 from "../../asset/logoV2.png";

import { Link } from "react-router-dom";

function EditCustomers() {
  return (
    <div
      className="bg-[#B9B4C7] h-screen flex flex-col justify-center items-center
    md:flex md:flex-row md:justify-center md:items-center
    lg:flex lg:flex-row lg:justify-center lg:items-center
    "
    >
      <div className=" w-[200px]  h-[150px] rounded-t-[20px]  md:w-[300px] md:h-[300px] md:rounded-l-3xl md:rounded-r-none bg-slate-50  lg:w-96 lg:h-[450px] lg:rounded-l-3xl  lg:rounded-r-none flex justify-center items-center">
        <img src={logoV2} alt="logoV2" className=" w-3/4 w-[100%]" />
      </div>
      <div className="  w-[200px]  h-[200px] rounded-b-[20px]   bg-[#393646]  md:w-[300px] md:h-[300px]  md:rounded-r-3xl md:rounded-l-none lg:w-96 lg:h-[450px] lg:rounded-r-3xl ">
        <div className="">
          <h3 className="  text-[10px]  md:text-center md:text-[20px]  lg:text-4xl font-mono text-slate-50   text-center font-bold my-[10px]">
            Edit CUSTOMERS
          </h3>
        </div>

        <form className=" card-body-color">
          <div className="my-2 flex justify-center items-center ">
            <input
              type="text "
              className="  rounded-[5px] placeholder:text-[10px] md:text-[10px]  w-[150px] h-[20px] md:rounded-lg md:w-[200px] md:h-[30px]  md:placeholder:text-[15px] md:text-[15px]  lg:w-80 lg:h-14    lg:placeholder:text-[20px] lg:text-[20px]"
              id="Name "
              name="Name "
              placeholder="Name "
            />
          </div>

          <div className="my-2 flex justify-center items-center ">
            <input
              type="number"
              className="  rounded-[5px] placeholder:text-[10px] md:text-[10px]   w-[150px] h-[20px] md:rounded-lg md:w-[200px] md:h-[30px]  md:placeholder:text-[15px] md:text-[15px] lg:w-80 lg:h-14     lg:placeholder:text-[20px] lg:text-[20px]"
              id="Phone"
              name="Phone"
              placeholder="Phone"
            />
          </div>
          <div className="my-2 flex justify-center items-center ">
            <input
              type="text"
              className="  rounded-[5px] placeholder:text-[10px] md:text-[10px]   w-[150px] h-[20px] md:rounded-lg md:w-[200px] md:h-[30px]  md:placeholder:text-[15px] md:text-[15px] lg:w-80 lg:h-14     lg:placeholder:text-[20px] lg:text-[20px]"
              id="Method"
              name="Method"
              placeholder="Method"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-slate-50 w-[150px] h-[20px]   md:w-[200px] md:h-[30px]  lg:w-80 lg:h-14 rounded-3xl text-[15px]"
            >
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditCustomers;
