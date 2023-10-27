import React from "react";
import logoV3 from "../../asset/logoV3.png";
import "bootstrap/dist/css/bootstrap.min.css";

function ReportSewa() {
  return (
    <div className=" bg-[#B9B4C7] h-screen  ">
      <header class="bg-[#393646]">
        <div class=" px-4 sm:px-6 lg:px-8  w-[100%] h-[70px] flex ">
          <img src={logoV3} alt="logoV3 " className="h-[90px] mt-" />

          <div class="md:flex  md:gap-12  justify-center items-center w-[1000px]">
            <nav aria-label="Global" class="hidden md:block">
              <ul class="flex items-center gap-6 text-sm">
                <li>
                  <a
                    class="text-[#FFF7F7] transition hover:text-gray-500/75"
                    href="/"
                  >
                    HOME
                  </a>
                </li>

                <li>
                  <a
                    class="text-[#FFF7F7] transition hover:text-gray-500/75"
                    href="/tabel"
                  >
                    TABLE
                  </a>
                </li>

                <li>
                  <a
                    class="text-[#FFF7F7] transition hover:text-gray-500/75"
                    href="/tabel orders"
                  >
                    TABLE ORDERS
                  </a>
                </li>

                <li>
                  <a
                    class="text-[#FFF7F7] transition hover:text-gray-500/75"
                    href="/tabel customers"
                  >
                    TABLE CUSTOMERS
                  </a>
                </li>

                <li>
                  <a
                    class="text-[#FFF7F7] transition hover:text-gray-500/75"
                    href="/report sewa"
                  >
                    REPORT SEWA
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="flex items-center justify-end gap-4">
            <div class="sm:flex sm:gap-4  ">
              <a
                class="rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                href="/"
              >
                LOGOUT
              </a>

              <div class="hidden sm:flex">
                <a
                  class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                  href="/"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className=" justify-center items-center w-full h-screen ">
        <div className=" my-[50px] mx-auto border-4 border-indigo-600 w-[900px]">
          <div className="flex ">
            <div className="my-6 flex justify-center items-center mx-[10px]">
              <input
                type="text"
                className="rounded-lg w-80 h-[40px] placeholder:text-[20px] text-[20px] pr-8"
                id="SEARCH"
                name="SEARCH"
                placeholder="SEARCH"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search ml-[-40px] text-indigo-600"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>

            <div className=" flex justify-center items-center mx-[30px]">
              <select className="bg-zinc-700 text-[#FFF7F7] w-[100px] rounded-xl h-[40px] ">
                <option>5</option>
                <option>10</option>
                <option>15</option>
              </select>
            </div>

            <div className="flex justify-center items-center ">
              <button className="bg-zinc-700 text-[#FFF7F7] w-[100px] rounded-xl h-[40px] ">
                Create
              </button>
            </div>
          </div>
          <div className="justify-center items-center">
            <table className="border-collapse w-[800px] ">
              <thead>
                <tr className="bg-white even:bg-[#dddddd]">
                  <th className="border-2 border-[#dddddd] text-left p-[8px] text-center">
                    NOMOR LANTAI
                  </th>
                  <th className="border-2 border-[#dddddd] text-left p-[8px] text-center">
                    NOMOR KAMAR
                  </th>
                  <th className="border-2 border-[#dddddd] text-left p-[8px] text-center">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white even:bg-gray-100">
                  <td className="border-2 border-[#dddddd] text-left p-[8px] ">
                    2
                  </td>
                  <td className="border-2 border-[#dddddd] text-left p-[8px] ">
                    10
                  </td>
                  <td className="border-2 border-[#dddddd] text-left p-[8px] flex justify-center items-center ">
                    <button className="bg-zinc-700 w-[150px] rounded-xl h-[40px]  mx-[10px] text-[#FFF7F7]">
                      EDIT
                    </button>
                    <button className="bg-zinc-700 w-[150px] rounded-xl h-[40px]  mx-[10px] text-[#FFF7F7]">
                      DELETE
                    </button>
                  </td>
                </tr>
                <tr className="bg-white even:bg-gray-100">
                  <td className="border-2 border-[#dddddd] text-left p-[8px] ">
                    1
                  </td>
                  <td className="border-2 border-[#dddddd] text-left p-[8px] ">
                    10
                  </td>
                  <td className="border-2 border-[#dddddd] text-left p-[8px] flex justify-center items-center ">
                    <button className="bg-zinc-700 w-[150px] rounded-xl h-[40px]  mx-[10px] text-[#FFF7F7]">
                      EDIT
                    </button>
                    <button className="bg-zinc-700 w-[150px] rounded-xl h-[40px]  mx-[10px] text-[#FFF7F7]">
                      DELETE
                    </button>
                  </td>
                </tr>
                <tr className="bg-white even:bg-gray-100">
                  <td className="border-2 border-[#dddddd] text-left p-[8px] ">
                    2
                  </td>
                  <td className="border-2 border-[#dddddd] text-left p-[8px] ">
                    5
                  </td>
                  <td className="border-2 border-[#dddddd] text-left p-[8px] flex justify-center items-center ">
                    {" "}
                    <button className="bg-zinc-700 w-[150px] rounded-xl h-[40px]  mx-[10px] text-[#FFF7F7]">
                      EDIT
                    </button>
                    <button className="bg-zinc-700 w-[150px] rounded-xl h-[40px]  mx-[10px] text-[#FFF7F7]">
                      DELETE
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="inline-block my-[20px]">
            <a
              href="#"
              class="p-2 border border-gray-300 mx-1 bg-slate-50 active:bg-zinc-700 active:text-white"
            >
              {" "}
              &laquo;{" "}
            </a>
            <a
              href="#"
              class="p-2 border border-gray-300 mx-1 bg-slate-50 active:bg-zinc-700 active:text-white"
            >
              1
            </a>
            <a
              href="#"
              class="p-2 border border-gray-300 mx-1 bg-slate-50 active:bg-zinc-700 active:text-white "
            >
              2
            </a>
            <a
              href="#"
              class="p-2 border border-gray-300 mx-1 bg-slate-50 active:bg-zinc-700 active:text-white"
            >
              3
            </a>
            <a
              href="#"
              class="p-2 border border-gray-300 mx-1 bg-slate-50 active:bg-zinc-700 active:text-white"
            >
              4
            </a>
            <a
              href="#"
              class="p-2 border border-gray-300 mx-1 bg-slate-50 active:bg-zinc-700 active:text-white"
            >
              5
            </a>
            <a
              href="#"
              class="p-2 border border-gray-300 mx-1 bg-slate-50 active:bg-zinc-700 active:text-white"
            >
              6
            </a>
            <a
              href="#"
              class="p-2 border border-gray-300 mx-1 bg-slate-50 active:bg-zinc-700 active:text-white"
            >
              {" "}
              &raquo;{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportSewa;
