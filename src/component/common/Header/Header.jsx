import { Button } from "@material-tailwind/react";
import React from "react";
import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import HeaderTop from "../Header/HeaderTop";
import HambergerMenu from "./HambergerMenu";
import DarkTheme from "../DarkTheme";
import SearchLanding from "../SearchLanding";

const Header = () => {
  return (
    <Fragment>
      <div className="border-2 border-transparent dark:bg-[#22445D]">
        <div className=" bg-white rounded-2xl w-[85%] mt-9 mx-auto flex justify-between h-32 dark:bg-blue-950 max-md:w-[95%]">
          <Link to="/" className="flex  gap-2  w-60 h-20 m-6 ">
            <div className=" w-[150px] h-[100px] relative bottom-5 right-9 max-sm:mr-16 max-sm:mt-[10%]">
              <img
                src="./logoabi.png "
                className=" max-sm:w-[80%]  max-md:hidden max-sm:justify-center max-sm:block"
              />
            </div>

            <h1 className="text-[#22445D;] font-inter text-[14px] m-3"></h1>
          </Link>
          <HambergerMenu />
          
          <div className="lg:block xl:block md:block sm:hidden max-sm:hidden min-sm:hidden">
            <SearchLanding />
          </div>
          <div className="lg:block xl:block md:block sm:hidden max-sm:hidden min-sm:hidden">
            <DarkTheme />
          </div>

          <div className="m-6">
            <NavLink to={"/Login"}>
              <Button
                className="btn font-sans ml-10 hover:text-[#5c7158] relative top-3 bg-[#5c7158] w-36"
                variant="contained"
              >
                ورود / ثبت نام
              </Button>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="w-[75%] mx-auto h-16 bg-base-300 rounded-b-2xl flex justify-center gap-6 dark:bg-slate-900 max-sm:hidden max-md:hidden">
        <div className="w-[75%] mx-auto flex justify-center gap-6 mt-3">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${
                isActive &&
                "text-gray-600 border-2 bg-slate-300 h-14 relative bottom-2 leading-9 rounded-md "
              } whitespace-normal hover:text-blue-600 text-xl font-sans text-black dark:text-white`
            }
          >
            صفحه اصلی{" "}
          </NavLink>
          <NavLink
            to={"/courses"}
            className={({ isActive }) =>
              `${
                isActive &&
                "text-gray-600 border-2 bg-slate-300 h-14 relative bottom-2 leading-9 rounded-md "
              } whitespace-normal hover:text-blue-600 text-xl font-sans text-black dark:text-white`
            }
          >
            دوره های آموزشی{" "}
          </NavLink>
          <NavLink
            to={"/News"}
            className={({ isActive }) =>
              `${
                isActive &&
                "text-gray-600 border-2 bg-slate-300 h-14 relative bottom-2 leading-9 rounded-md "
              } whitespace-normal hover:text-blue-600 text-xl font-sans text-black dark:text-white`
            }
          >
            مقالات{" "}
          </NavLink>

          <div>
            <HeaderTop />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Header;
