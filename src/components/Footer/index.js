import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/icons/logo.svg";
import fb from "../../../public/icons/fb.svg";
import x from "../../../public/icons/X.svg";
import insta from "../../../public/icons/insta.svg";
import linkedin from "../../../public/icons/linkedin.svg";
import snap from "../../../public/icons/snapchat.svg";

const Footer = () => {
  return (
    <footer
      className="w-full bg-white lg:px-[208px] px-[20px] md:px-[100px] pb-6  text-[#808080] pt-[30px] md:pt-[70px] rounded-tl-[50px] rounded-tr-[50px] font-medium "
      aria-label="footer"
    >
      <div>
        <div className="flex lg:flex-row flex-col gap-y-10 gap-x-6 w-full whitespace-nowrap">
          <div className="flex flex-col gap-y-5 w-[80%] ">
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
                <p className="text-black font-bold text-lg">
                  iPhilanthropy
                </p>
              </Link>
            </div>
            <p className="text-sm">
              Empowering communities
            </p>
            <div
              aria-label="socials"
              className="flex items-center  gap-8 -mt-3"
            >
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={fb}
                  alt="facebook"
                  priority
                />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={x}
                  alt="twitter"
                  priority
                />
              </a>
              <a
                href="https://www.instagram.com/wemabank/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={insta}
                  alt="instagram"
                  priority
                />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={linkedin}
                  alt="linkedin"
                  priority
                />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={snap}
                  alt="snapchat"
                  priority
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-start gap-y-10 md:flex-col lg:flex-row gap-x-4 w-full !leading-[21px] ">
            <div className="flex flex-col gap-y-3 text-sm w-full">
              <h1 className="font-bold text-black ">
                Organization
              </h1>
              <Link href="/about">About</Link>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy policy
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Charity disclosure
              </a>
            </div>
            <div className="flex flex-col md:gap-y-3 gap-y-3 text-sm w-full whitespace-nowrap">
              <h1 className="font-bold text-black">
                Explore
              </h1>
              <Link href="/">Project</Link>
              <Link href="/">How iPhilanthropy works</Link>
              <Link href="/">Donate</Link>
            </div>
            <div className="flex flex-col md:gap-y-3 gap-y-3 text-sm w-full">
              <h1 className="font-bold text-black">
                Contact Us
              </h1>
              <Link href="/">Support</Link>
              <Link href="/">Resources</Link>
              <Link href="/">Partner with us</Link>
            </div>
          </div>
        </div>
        <hr className="my-10 border" />
        <div className="text-center">
          <p>
            Copyright © 2024 Nigeria Philanthropy Office,
            All right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
