import React from "react";
import { Link } from "react-router-dom";
import ruangRapat from "../../asset/ruangRapat.webp";
import kamar from "../../asset/kamar.jpg";
import logoV2 from "../../asset/logoV2.png";
import rooftop from "../../asset/rooftop.jpg";

function Home() {
  return (
    <div className="bg-[#B9B4C7] py-2.5 w-[100%] sm:w-[100%] lg:w-[100%]">
      <div className=" flex justify-center items-center">
        <img src={logoV2} alt="logoV2" className=" w-3/4 w-[50%]" />
      </div>

      <div className="rounded-2xl  flex justify-center items-center">
        <img
          className="rounded-2xl  flex justify-center items-center h-[150px] sm:h-[300px] lg:h-[500px]"
          src={ruangRapat}
          alt="ruang Rapat"
        />
      </div>
      <br></br>
      <h4 className="sm:text-2xl lg:text-4xl font-mono text-zinc-700 text-center">
        Ciptakan Ruangan Impian Anda
      </h4>
      <div className="flex items-center justify-center my-9">
        <Link to={"/register"}>
          <button className="bg-zinc-700 rounded-lg w-40 h-10 text-slate-50 items-center just ify-items-center font-semibold">
            Daftar sekarang!
          </button>
        </Link>
      </div>
      <br></br>
      <div class="flex items-center justify-center space-x-4 my-9 ">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-instagram"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-whatsapp"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-envelope"
            viewBox="0 0 16 16"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-twitter-x"
            viewBox="0 0 16 16"
          >
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-facebook"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg>
        </span>
      </div>
      <br></br>
      <div className="bg-slate-200  ">
        <br></br>
        <br></br>
        <div class="grid grid-cols-1 gap-7 lg:grid-cols-2 ">
          <div className="	flex justify-center">
            {" "}
            <img src={kamar} alt="kamar" className="rounded-3xl w-3/4 " />
          </div>
          <div className="	flex justify-center flex-col px-20">
            {" "}
            <h1 className="text-2xl sm:text-6xl font-serif text-zinc-700">
              Kamar VIP
            </h1>
            <p className="text-2xl sm:text-4xl font-mono text-zinc-500 w-[200px] sm:w-96">
              Kamar dengan private kolam renang yang indah siap membuat keluarga
              Anda lebih harmonis.
            </p>
            <button className="bg-zinc-700 rounded-lg w-40 h-10 text-slate-50 font-semibold">
              Lihat Detail
            </button>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div class="grid grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-8 ">
          <div className=" flex justify-center flex-col px-20">
            {" "}
            <h1 className="text-2xl sm:text-6xl font-serif text-zinc-700 ">
              Kolam renang rooftop
            </h1>
            <p className="text-2xl sm:text-4xl font-mono text-zinc-500 w-[200px] sm:w-96	">
              kolam renang dengan sensasi alam yang menenangkan siap membuat
              keluarga Anda lebih harmonis..
            </p>
            <button className="bg-zinc-700 rounded-lg w-40 h-10 text-slate-50 font-semibold">
              L ihat Detail
            </button>
          </div>{" "}
          <div className="	flex justify-center">
            {" "}
            <img
              src={rooftop}
              alt="rooftop"
              className="rounded-3xl  w-[200px] md:w-[500px]"
            />
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="bg-[#B9B4C7]  flex justify-center flex-col items-center   h-96">
          <h1 className="	flex justify-center text-2xl sm:text-6xl my-6 font-bold">
            FAQ
          </h1>
          <div class="bg-gray-200 w-[300px] sm:w-1/2 lg:w-1/2  divide-y divide-gray-500 rounded-2xl   ">
            <details>
              <summary class="question py-3 px-4 cursor-pointer select-none w-full">
                Berapa biaya sewa runang per malam?
              </summary>
              <p class="pt-1 pb-3 px-4">
                Harga sewa ruang per malam adalah tergantung tipe kamar yang mau
                di sewa
              </p>
            </details>
            <details className="flex justify-center">
              <summary class="question py-3 px-4 cursor-pointer select-none w-full">
                Apa saja fasilitas yang termasuk dalam harga sewa?
              </summary>
              <p class="pt-1 pb-3 px-4">
                Harga sewa sudah termasuk [daftar fasilitas yang disediakan
                seperti kamar tidur, dapur, ruang tamu, fasilitas mandi, akses
                internet, dll.].
              </p>
            </details>
            <details className="flex justify-center">
              <summary class="question py-3 px-4 cursor-pointer select-none w-full">
                Apa yang harus dilakukan jika ada masalah selama menginap?
              </summary>
              <p class="pt-1 pb-3 px-4">
                Jika Anda mengalami masalah selama menginap, silakan hubungi
                nomor [kontak darurat] atau datang ke resepsionis untuk bantuan.
              </p>
            </details>
          </div>
          <br></br>
        </div>
        <div>
          <h1 className="	flex justify-center text-2xl sm:text-6xl my-3 sm:my-8 font-bold">
            Sign up today
          </h1>
          <div className="flex items-center justify-center">
            <button className="bg-zinc-700 rounded-lg w-40 h-10 text-slate-50 items-center my-3 sm:my-6 font-semibold">
              Get started
            </button>
          </div>
          <div className="w-full h-20 bg-slate-700"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
