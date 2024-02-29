"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/icons/logo.svg";
import grouplogo from "../../../public/icons/GroupLogo.svg";
import cancel from "../../../public/icons/cancel.svg";
import { GoChevronDown } from "react-icons/go";
import { useState } from "react";
import Harmburger from "../Harmburger";
import Button from "../Button";
import NavDropdown from "../NavDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const toggle = () => setIsOpen(!isOpen);

  const hide = () => setIsOpen(false);
  return (
    <header className="bg-white relative py-2 md:pl-[36px] md:pr-3.5 px-6  flex justify-between items-center box-border w-full rounded-[50px] border border-[#E0E4E8] font-satoshi">
      <div
        aria-label="logo-container"
        className="flex justify-between items-center gap-3"
      >
        <Link
          href="/"
          className="flex gap-x-2 items-center"
        >
          <Image
            src={logo}
            alt="iphilantropy-logo"
            priority
          />
          <p className="text-black font-bold text-lg md:block hidden">
            iPhilanthropy
          </p>
        </Link>
      </div>
      <nav
        aria-label="links-container"
        className="hidden lg:flex justify-between items-center gap-5 font-semibold text-[#333333] text-sm leading-4"
      >
        <div
          role="button"
          onClick={toggleDropdown}
          className="flex gap-x-1 items-center cursor-pointer "
        >
          <p> Target Sectors</p>
          <span className="mt-1">
            <GoChevronDown className="h-4 w-4" />
          </span>
          {openDropdown && (
            <NavDropdown onClose={toggleDropdown} />
          )}
        </div>
        <Link href="/">Evidence</Link>
        <Link href="/about">About us</Link>
        <Link href="/">How it works</Link>
      </nav>

      <Button
        title="Make a donation"
        className="text-white font-semibold bg-lightGreen text-xs"
      />

      <div className="cursor-pointer block lg:hidden md:block mt-1">
        <Harmburger
          onClick={toggle}
          isOpen={isOpen}
        />
      </div>
      <div
        onClick={hide}
        className={`${
          isOpen ? "translate-x-0" : "translate-x-[-100vw]"
        } fixed z-10 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center cursor-pointer overflow-y-auto lg:hidden`}
      >
        <div
          className={`${
            isOpen
              ? "translate-x-0"
              : "translate-x-[-100vw]"
          } flex bg-white flex-col gap-y-4 absolute z-50 top-0 left-0 right-0 w-[50%]  transition duration-[600ms]  lg:hidden `}
        >
          <div className="relative h-screen w-full p-10">
            <div className="flex justify-end items-end">
              <Image
                src={cancel}
                alt="close"
                role="button"
                onClick={hide}
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-y-12 text-black text-lg font-bold mt-16">
              <div className="flex gap-x-1 items-center cursor-pointer ">
                <p> Target Sectors</p>
                <span className="mt-1">
                  <GoChevronDown className="h-4 w-4" />
                </span>
              </div>
              <Link href="/">Evidence</Link>
              <Link href="/about">About us</Link>
              <Link href="/">How it works</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
