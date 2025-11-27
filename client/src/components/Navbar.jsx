import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import logo from "../assets/img/cbc_icon.svg";
import { Link } from "react-router-dom";

const spanListStyleFirst =
  "relative z-10 transition-colors duration-300 group-hover:text-gray-400";

const spanListStyleSecond =
  "absolute left-0 right-0 bottom-0 mx-[-8px] h-1 bg-white transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100";

// RTL version for Kurdish layout
// LTR version for English layout
export default function Navbar() {
  return (
    <header dir="rtl" className="bg-linear-to-t from-slate-800 to-indigo-950">
      {/* section 1 */}
      <div className="grid grid-cols-6 items-center py-5">
        {/* navigation links */}
        <div className="col-span-3 flex justify-center space-x-10 font-suhayb text-white text-lg">
          <Link to={"/"}>سەرەکی</Link>
          <Link to={"/about"}>دەربارە</Link>
          <Link to={"/contact"}>پەیوەندی</Link>
        </div>
        {/* Social icons */}
        <div className="col-span-2 flex justify-end space-x-4">
          <Link to="#" className="text-2xl">
            <FaFacebook className="text-blue-700" />
          </Link>
          <Link to="#" className="text-2xl">
            <FaYoutube className="text-red-600" />
          </Link>
          <Link to="#" className="text-2xl">
            <FaXTwitter />
          </Link>
          <Link to="#" className="text-2xl">
            <FaInstagram className="text-red-700" />
          </Link>
        </div>

        {/* divider */}

        <div className="col-span-6 mt-5 text-center">
          <hr className="w-350 mx-auto border-t-2 border-gray-400" />
        </div>

        {/* section 2 */}
        <div className="col-span-4 flex justify-center space-x-10 font-suhayb ms-60 my-2 text-lg text-white">
          <img src={logo} alt="logo" width={85} />

          <ul className="flex items-center space-x-10">
            <li className="relative group">
              <span className={spanListStyleFirst}>
                <Link to={"#"}>هەواڵەکان</Link>
              </span>

              <span className={spanListStyleSecond}></span>
            </li>

            <li className="relative group">
              <span className={spanListStyleFirst}>
                <Link to={"#"}>ڕاپۆرت</Link>
              </span>

              <span className={spanListStyleSecond}></span>
            </li>

            <li className="relative group">
              <span className={spanListStyleFirst}>
                <Link to={"#"}>بەرنامەکان</Link>
              </span>

              <span className={spanListStyleSecond}></span>
            </li>

            <li className="relative group">
              <span className={spanListStyleFirst}>
                <Link to={"#"}>پۆدکاست</Link>
              </span>

              <span className={spanListStyleSecond}></span>
            </li>

            <li className="relative group">
              <span className={spanListStyleFirst}>
                <Link to={"#"}>تەندرووستی</Link>
              </span>

              <span className={spanListStyleSecond}></span>
            </li>

            <li className="relative group">
              <span className={spanListStyleFirst}>
                <Link to={"#"}>بەڵگەنامەیی</Link>
              </span>

              <span className={spanListStyleSecond}></span>
            </li>

            <li className="relative group">
              <span className={spanListStyleFirst}>
                <Link to={"#"}>وەرزش</Link>
              </span>

              <span className={spanListStyleSecond}></span>
            </li>
          </ul>
        </div>

        {/* Social icons (left side in RTL) */}
        <div className="col-span-2 flex space-x-4 items-center ms-35 my-2 text-white cursor-pointer">
          <IoSearchSharp className="text-lg" />

          <button
            type="button"
            className="font-suhayb cursor-pointer flex items-center px-3 text-lg"
          >
            <ul className="flex space-x-5">
              <li className="relative group">
                <span className={`${spanListStyleFirst} hover:text-white`}>
                  <Link to={"#"}>کوردی</Link>
                </span>

                <span className={spanListStyleSecond}></span>
              </li>

              <li className="relative group">
                <span className={`${spanListStyleFirst} hover:text-white`}>
                  <Link to={"#"}>عربی</Link>
                </span>

                <span className={spanListStyleSecond}></span>
              </li>

              <li className="relative group">
                <span className={`${spanListStyleFirst} hover:text-white`}>
                  <Link to={"#"}>ئینگلیزی</Link>
                </span>

                <span className={spanListStyleSecond}></span>
              </li>
            </ul>
          </button>
        </div>
      </div>
    </header>
  );
}
