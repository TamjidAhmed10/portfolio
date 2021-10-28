import { useState } from "react";
import { Transition } from "@headlessui/react";
import {FaBars} from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
 
        <div className="bg-neutral border-b-2 relative">
          <div className="navbar shadow-lg text-neutral-content container mx-auto">
            <div className="flex-1 px-2 mx-2">
              <span className="text-lg font-bold">daisyUI</span>
            </div>
            <div className="flex-none hidden px-2 mx-2 lg:flex">
              <div className="flex items-stretch">
                <a className="btn btn-ghost btn-sm rounded-btn">Likes</a>
                <a className="btn btn-ghost btn-sm rounded-btn">
                  Notifications
                </a>
                <a className="btn btn-ghost btn-sm rounded-btn">Files</a>
                <a className="btn btn-ghost btn-sm rounded-btn">Config</a>
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

        <Transition
          show={isOpen}
          enter="transition-opacity duration-110"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className=" absolute bg-neutral grid grid-cols-1 text-neutral-content justify-center text-center divide-y divide-gray-50 md:hidden z-10 w-full">
            <div className="py-3 ">Likes</div>
            <div className="py-3 ">Notification</div>
            <div className="py-3 ">Files</div>
            <div className="py-3 ">Config</div>
          </div>
        </Transition>

    </>
  );
};

export default Navbar;
