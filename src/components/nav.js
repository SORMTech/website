import React from "react";
import logo from "../images/logo2.png";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

function Nav() {
  const [nav, setNav] = React.useState(false);
  return (
    <nav className='p-4 capitalize w-full flex flex-col md:flex-row md:justify-between'>
      <div className='flex justify-between items-center w-full md:w-1/3'>
        <img className='w-1/4 md:w-1/2' src={logo} alt='logo' />
        <i onClick={() => setNav(!nav)}>
          {nav ? (
            <IoMdClose className='text-red-300 text-3xl md:hidden' />
          ) : (
            <MdMenu className='text-red-300 text-3xl md:hidden' />
          )}
        </i>
      </div>
      <div
        className={`${
          nav ? "flex" : "hidden"
        } md:flex text-sm gap-5 flex-col my-4 md:flex-row md:items-center`}
      >
        <Link className='block' to='/'>
          Home
        </Link>
        <hr className='md:hidden border-b-1 border-solid border-red-200' />
        <Link className='block' to='/'>
          Services
        </Link>
        <hr className='md:hidden border-b-1 border-solid border-red-200' />
        <Link className='block' to='/'>
          About Us
        </Link>
        <hr className='md:hidden border-b-1 border-solid border-red-200' />
        <Link className='block' to='/'>
          Contact us
        </Link>
        <hr className='md:hidden border-b-1 border-solid border-red-200' />
        <Link
          className='block rounded bg-orange-600 text-white py-2 px-4 w-fit'
          to='/'
        >
          get started
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
