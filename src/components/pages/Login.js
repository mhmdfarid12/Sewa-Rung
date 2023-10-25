import React from "react";
import vector from "../../asset/vector.svg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="bg-[#B9B4C7] h-screen  flex justify-center items-center">
      <div className="bg-slate-50  w-96 h-[450px] rounded-l-3xl flex justify-center items-center">
        <img src={vector} alt="vector" className=" w-3/4 w-[100%]" />
      </div>
      <div className="bg-[#393646]  w-96 h-[450px] rounded-r-3xl">
        <div className="">
          <h3 className="text-4xl font-mono text-slate-50  w-96 text-center font-bold my-5">
            LOGIN
          </h3>
        </div>

        <form className=" card-body-color p-lg-5">
          <div className="my-6 flex justify-center items-center ">
            <input
              type="text"
              className=" rounded-lg w-80 h-14  placeholder:text-[20px] text-[20px]"
              id="Username"
              placeholder="User Name"
              name="username"
            />
          </div>

          <div className="my-6 flex justify-center items-center ">
            <input
              type="password"
              className=" rounded-lg w-80 h-14  placeholder:text-[20px] text-[20px]"
              id="password"
              name="password"
              placeholder="password"
            />
          </div>
          <div className=""></div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-slate-50 w-80 h-14 rounded-3xl text-3xl"
            >
              LOGIN
            </button>
          </div>
        </form>

        <div id="login" className="text-center mb-5 text-dark">
          <span className="my-9 text-slate-50">Belum Punya Akun?</span>
          <Link to={"/register"}>
            <span className="my-9 text-slate-50">
              klik di sini untuk Register
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
