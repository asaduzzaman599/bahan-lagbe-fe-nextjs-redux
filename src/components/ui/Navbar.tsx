/* eslint-disable @next/next/no-img-element */
"use client";
import logo from '@/assets/logo/logo.png'
import { authKey } from "@/constants/storageKey"
import { getUserInfo, removeUserInfo } from "@/services/auth.service"
import {
  Menu,
  Popover,
  Transition
} from "@headlessui/react"
import {
  SquaresPlusIcon,
  UserCircleIcon,
  Bars3Icon
} from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Fragment, useState } from "react"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({children}: {children?: React.ReactNode}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { userId, name, email, role, imageUrl } = getUserInfo() as any;

  const router = useRouter();

  const signOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  return (
    <div className={`bg-primary sticky top-0 z-10 px-2`}>
      <nav
        className="mx-auto flex lg:max-w-7xl items-center justify-between py-4"
        aria-label="Global"
      >
        {children && children}
        <div className="flex lg:flex-1 cursor-pointer">
          <Link href="/" className="">
            <span
              className={`text-lg lg:text-3xl text-accent pl-5 lg:pl-0   flex items-center gap-2`}
            >
              <Image src={logo} height={40} width={40} alt='logo'/>
              Bahan Lagbe
            </span>
          </Link>
        </div>
        {/* <div className="hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-end rounded-md p-2.5 text-accent"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div> */}
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-accent hover:text-secondary"
          >
            Home
          </Link>
          <Link
            href="/vehicles"
            className="text-sm font-semibold leading-6 text-accent hover:text-secondary"
          >
            Service
          </Link>
          
          <Link
            href="/feedbacks"
            className="text-sm font-semibold leading-6 text-accent hover:text-secondary"
          >
            Feedbacks
          </Link>
        </Popover.Group>
        <div className="lg:flex lg:flex-1 lg:justify-end lg:items-center gap-8">
          <Link
            href="/bookings"
            className="hidden lg:flex iem-center text-sm font-semibold  text-accent border-2 py-1 px-3 rounded-full border-accent hover:text-secondary hover:bg-accent hover:border-secondary"
          >
            <SquaresPlusIcon className="w-4 h-4 mr-3" />
            Book Now
          </Link>
         {/*  {userId ? ( */}
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="relative flex rounded-full bg-white text-sm border-2 border-secondary">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  {imageUrl ? (
                    <img
                      className="h-10 w-10 rounded-full"
                      src={imageUrl}
                      alt=""
                    />
                  ) : (
                    <UserCircleIcon className="h-10 w-10 text-slate-500" />
                  )}
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  
                  {userId  ? 
                  (
                    <>
                    <Link
                    href="/bookings"
                    className="flex item-center lg:hidden text-sm font-semibold leading-6 gap-3  py-1 px-3 rounded border border-gray-200 text-gray-800"
                  >
                    <SquaresPlusIcon className="w-4 h-4  inline-block  text-black" />
                    Book Now
                  </Link>
                    <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/profile"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Profile
                      </Link>
                    )}
                  </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/profile"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Dashboard
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/bookings"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Bookings
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        onClick={() => signOut()}
                        className={classNames(
                          active ? "bg-red-200 text-primary" : "text-primary",
                          "block px-4 py-2 text-sm text-red-600 cursor-pointer"
                        )}
                      >
                        Logout
                      </div>
                    )}
                  </Menu.Item>
                  </>
                  ):(<>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/login"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Login
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/signup"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Create an Account
                      </Link>
                    )}
                  </Menu.Item>
                  </>)}
                  
                </Menu.Items>
              </Transition>
            </Menu>
          
        </div>
      </nav>
    </div>
  );
}
