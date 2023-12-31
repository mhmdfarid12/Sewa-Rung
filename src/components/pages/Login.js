import React from "react";
import logoV2 from "../../asset/logoV2.png";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.get("http://localhost:1234/accounts");
      console.log(data);

      if (formData.username !== "" && formData.password !== "") {
        // const storedAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
        const obj = data.data;
        const existingAccount = obj.find(
          (account) =>
            account.username === formData.username &&
            account.password === formData.password
        );

        if (existingAccount) {
          Swal.fire({
            position: "top-middle",
            icon: "success",
            title: "Login Berhasil!!",
            showConfirmButton: false,
            timer: 1500,
          });
          localStorage.setItem("UserRole", existingAccount.role);
          localStorage.setItem("id", existingAccount.id);
          navigate("/home");
        } else {
          Swal.fire({
            position: "top-middle",
            icon: "error",
            title: "Username atau password salah!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else {
        Swal.fire({
          position: "top-middle",
          icon: "error",
          title: "Tolong isi semua kolom!!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
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
            LOGIN
          </h3>
        </div>

        <form className=" card-body-color">
          <div className="my-6  md:my-9 flex justify-center items-center ">
            <input
              type="username"
              className=" rounded-[5px] placeholder:text-[10px] md:text-[10px]  w-[150px] h-[20px]  md:rounded-lg md:w-[200px] md:h-[30px]  md:placeholder:text-[15px] md:text-[15px] lg:w-80 lg:h-14 lg:placeholder:text-[20px] lg:text-[20px]"
              id="Username"
              placeholder="User Name"
              name="username"
              value={formData.username}
              onChange={handleChange}
              aria-describedby="emailHelp"
            />
          </div>

          <div className="my-6  md:my-9 flex justify-center items-center ">
            <input
              type="password"
              className="  rounded-[5px] placeholder:text-[10px] md:text-[10px]   w-[150px] h-[20px] md:rounded-lg md:w-[200px] md:h-[30px]  md:placeholder:text-[15px] md:text-[15px] lg:w-80 lg:h-14     lg:placeholder:text-[20px] lg:text-[20px]"
              id="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className=""></div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-slate-50 w-[150px] h-[20px]   md:w-[200px] md:h-[30px]  lg:w-80 lg:h-14 rounded-3xl text-[15px]"
            >
              LOGIN
            </button>
          </div>
        </form>

        <div id="login" className="text-center mb-5 text-dark">
          <span className="my-9 text-slate-50 text-[8px]  md:text-[10px]  lg:text-[20px]">
            Belum Punya Akun?
          </span>
          <Link to={"/register"}>
            <span className="my-9 text-slate-50 text-[8px]  md:text-[10px]   lg:text-[20px]">
              klik Di Sini Untuk Register
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
