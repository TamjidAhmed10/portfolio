import { useEffect, useState } from "react";
import { useScrollDirection } from "react-use-scroll-direction";
import { Transition } from "@headlessui/react";
import { FaBars } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";
import { useWindowSize } from "react-use";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isScrollingUp, isScrollingDown } = useScrollDirection();
  const [direction, setDirection] = useState(true);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width > 768) {
      setIsOpen(false);
    }
    if (isScrollingUp) {
      setDirection(true);
    } else if (isScrollingDown) {
      setDirection(false);
      setIsOpen(false);
    }
  }, [isScrollingUp, isScrollingDown, width]);

  return (
    <>
      <div
        className={
          "bg-customGreen-one border-b-2 relative sticky z-10  ease-in-out duration-700 " +
          (direction ? " top-0 " : " -top-36 ")
        }
      >
        <div className="navbar text-black container mx-auto">
          <div className="flex-1 px-2 mx-2">
            <span className="text-lg font-bold">daisyUI</span>
          </div>
          <div className="flex-none hidden px-2 mx-2 lg:flex">
            <div className="flex items-stretch">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <a className="btn btn-ghost btn-sm rounded-btn">Projects</a>
              </Link>
              <Link
                activeClass="active"
                to="certification1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <a className="btn btn-ghost btn-sm rounded-btn">
                  Certification
                </a>
              </Link>
              <Link
                activeClass="active"
                to="contactuse"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <a className="btn btn-ghost btn-sm rounded-btn">Contact</a>
              </Link>
            </div>
          </div>

          <div className="flex-none">
            <button
              className="btn btn-square btn-ghost md:hidden"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>
      <div className="fixed z-10 w-full">
        <Transition
          show={isOpen}
          enter="transition-opacity duration-110"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="  bg-neutral grid grid-cols-1 text-neutral-content justify-center text-center divide-y divide-gray-50 md:hidden ">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <div
                className="py-3 "
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Likes
              </div>
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <div
                className="py-3 "
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Likes
              </div>
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <div
                className="py-3 "
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Likes
              </div>
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <div
                className="py-3 "
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Likes
              </div>
            </Link>
          </div>
        </Transition>
      </div>
    </>
  );
};

export default Navbar;
