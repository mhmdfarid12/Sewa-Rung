import React from "react";
import { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logoV3 from "../../asset/logoV3.png";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function TableCustomers() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [customers, setCustomers] = useState([]);
  // function for supervisor START

  const getCustomers = async () => {
    try {
      const respons = await axios.get("http://localhost:1234/customers");
      const allCustomers = respons.data;
      const filteredCustomers = allCustomers.filter(
        (employee) =>
          employee.name?.toLowerCase().includes(searchTerm?.toLowerCase()) &&
          employee.role !== "supervisor"
      );

      setCustomers(filteredCustomers);
      console.log(filteredCustomers);
    } catch (error) {
      console.log(error);
    }
  };

  const firstIndex = (currentPage - 1) * recordsPerPage;
  const lastIndex = currentPage * recordsPerPage;
  const records = customers.slice(firstIndex, lastIndex);

  const npage = Math.ceil(customers.length / recordsPerPage);
  const number = [...Array(npage + 1).keys()].slice(1);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changePage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div className=" bg-[#B9B4C7] w-[900px] h-[1500px] md:w-[900px] lg:w-[100%]">
      <header class="bg-zinc-700">
        <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <a class="block text-teal-600" href="/">
            <span class="sr-only">Home</span>
            <img src={logoV3} alt="logoV2" className="mt-[10px] w-[70px] " />
          </a>

          <div class="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" class="hidden md:block">
              <ul class="flex items-center gap-6 text-sm">
                <li>
                  <a
                    class="text-gray-500 transition hover:text-gray-500/75"
                    href="/home"
                  >
                    HOME
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-500 transition hover:text-gray-500/75"
                    href="/tabel"
                  >
                    ROOMS
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-500 transition hover:text-gray-500/75"
                    href="/tabel orders"
                  >
                    ORDERS
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-500 transition hover:text-gray-500/75"
                    href="/tabel customers"
                  >
                    CUSTOMERS
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-500 transition hover:text-gray-500/75"
                    href="/report sewa"
                  >
                    REPORT SEWA
                  </a>
                </li>
              </ul>
            </nav>

            <div class="flex items-center gap-4">
              <div class="sm:flex sm:gap-4">
                <a
                  class="block rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                  href="/"
                >
                  Logout
                </a>

                <a
                  class="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                  href="/"
                >
                  Register
                </a>
              </div>

              <button class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span class="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className=" justify-center items-center w-full h-screen  md:justify-center md:items-center w-full h-screen lg:justify-center lg:items-center lg:w-full h-screen">
        <div className=" my-[50px] mx-auto   w-[900px] flex flex-col justify-center items-center">
          <div className="flex ">
            <div className="my-6 flex justify-center items-center mx-[10px]">
              <input
                type="text"
                className="rounded-lg w-80 h-[40px] placeholder:text-[20px] text-[20px] pr-8"
                id="SEARCH"
                name="SEARCH"
                placeholder="SEARCH"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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

            <div className=" flex justify-center items-center mx-[30px] ">
              <select className=" bg-zinc-700 text-[#FFF7F7] w-[60px] rounded-xl h-[40px]  md:bg-zinc-700 text-[#FFF7F7] md:w-[60px] rounded-xl h-[40px]    lg:bg-zinc-700 text-[#FFF7F7] lg:w-[100px] rounded-xl h-[40px] ">
                <option>5</option>
                <option>10</option>
                <option>15</option>
              </select>
            </div>

            <div className="flex justify-center items-center ">
              <button className="bg-zinc-700 text-[#FFF7F7]  w-[60px] rounded-xl h-[40px]   md:bg-zinc-700 text-[#FFF7F7]  md:w-[60px] rounded-xl h-[40px]   lg:bg-zinc-700 text-[#FFF7F7] lg:w-[100px] rounded-xl h-[40px] ">
                Create
              </button>
            </div>
          </div>
          <div className=" flex justify-center items-center ">
            <table className="border-collapse w-[800px]  w-[100%] md:w-[50%] lg:w-[100%]">
              <thead>
                <tr className="bg-white even:bg-[#dddddd]">
                  <th className="border-2 border-[#dddddd] text-left p-[8px] text-center">
                    NAME
                  </th>
                  <th className="border-2 border-[#dddddd] text-left p-[8px] text-center">
                    PHONE
                  </th>
                  <th className="border-2 border-[#dddddd] text-left p-[8px] text-center">
                    PAYMETHOD
                  </th>
                  <th className="border-2 border-[#dddddd] text-left p-[8px] text-center">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody className="w-[100%] md:w-[50%]  g:w-[80%] ">
                {customers && customers.length > 0 ? (
                  records.map((item, index) => {
                    return (
                      <tr className="bg-white even:bg-gray-100" key={index}>
                        <td className="border-2 border-[#dddddd] text-left p-[8px]">
                          {item.name}
                        </td>
                        <td className="border-2 border-[#dddddd] text-left p-[8px]">
                          {item.phone}
                        </td>
                        <td className="border-2 border-[#dddddd] text-left p-[8px]">
                          {item.payMethod}
                        </td>

                        <td className="border-2 border-[#dddddd] text-left p-[8px] flex justify-center items-center">
                          <button className="bg-zinc-700 w-[150px] rounded-xl h-[40px]  mx-[10px] text-[#FFF7F7]">
                            EDIT
                          </button>
                          &nbsp;
                          <button className="bg-zinc-700 w-[150px] rounded-xl h-[40px]  mx-[10px] text-[#FFF7F7]">
                            DELETE
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="3">No data available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <Pagination>
            <Pagination.Prev onClick={prePage} />
            {number.map((n, i) => (
              <Pagination.Item
                key={i}
                active={currentPage === n}
                onClick={() => changePage(n)}
              >
                {n}
              </Pagination.Item>
            ))}
            <Pagination.Next onClick={nextPage} />
          </Pagination>
        </div>
      </div>
    </div>
  );
}

export default TableCustomers;
