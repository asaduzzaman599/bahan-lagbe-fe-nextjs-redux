"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { SidebarItems } from "@/constants/sidebarItems";
import { getUserInfo } from "@/services/auth.service";
import { usePathname } from "next/navigation";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = ({ children, sidebarOpen, setSidebarOpen }: { children: React.ReactNode; sidebarOpen:boolean; setSidebarOpen: (val: boolean)=>void }) => {

  const { role } = getUserInfo() as any;
  const pathName = usePathname();
  return (
    <>
      <div className="bg-background dark:bg-slate-700 text-slate-900 dark:text-slate-200">
        {/* Mobile Sidebar */}
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-tertiary">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <nav className="mt-5 space-y-1 px-2">
                      {SidebarItems(role).map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.href === pathName
                              ? "bg-accent text-primary"
                              : "text-accent hover:bg-accent hover:text-primary",
                            "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                          )}
                        >
                          <item.icon
                            className="mr-4 h-6 w-6 flex-shrink-0 text-indigo-300"
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="md:flex">
        <div className="hidden sticky top-0 h-dull md:flex md:max-w-[20%] md:flex-col bg-light pr-6">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col bg-tertiary">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <nav className="mt-5 flex-1 space-y-1 px-2">
                {SidebarItems(role).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.href === pathName
                        ? "bg-accent text-primary"
                        : "text-accent hover:bg-accent hover:text-primary",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    )}
                  >
                    <item.icon
                      className="mr-3 h-6 w-6 flex-shrink-0 "
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col w-full">
          <div className="pl-1 py-1 sm:pl-3 sm:pt-3 md:hidden border-2 border-primary">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <section className="flex-1">
            {
              <div className="py-6">
                {
                  <div>
                    <Transition.Root show={sidebarOpen} as={Fragment}>
                      <Dialog
                        as="div"
                        className="relative z-40 md:hidden"
                        onClose={setSidebarOpen}
                      >
                        <Transition.Child
                          as={Fragment}
                          enter="transition-opacity ease-linear duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition-opacity ease-linear duration-300"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                          <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                          >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-tertiary">
                              <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <div className="absolute top-0 right-0 -mr-12 pt-2">
                                  <button
                                    type="button"
                                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    onClick={() => setSidebarOpen(false)}
                                  >
                                    <span className="sr-only">
                                      Close sidebar
                                    </span>
                                    <XMarkIcon
                                      className="h-6 w-6 text-white"
                                      aria-hidden="true"
                                    />
                                  </button>
                                </div>
                              </Transition.Child>
                              <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                                <nav className="mt-5 space-y-1 px-2">
                                  {SidebarItems(role).map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      className={classNames(
                                        item.href === pathName
                                          ? "bg-accent text-primary"
                                          : "text-accent hover:bg-accent hover:text-primary",
                                        "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                                      )}
                                    >
                                      <item.icon
                                        className="mr-4 h-6 w-6 flex-shrink-0"
                                        aria-hidden="true"
                                      />
                                      {item.name}
                                    </Link>
                                  ))}
                                </nav>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                          <div
                            className="w-14 flex-shrink-0"
                            aria-hidden="true"
                          >
                            {/* Force sidebar to shrink to fit close icon */}
                          </div>
                        </div>
                      </Dialog>
                    </Transition.Root>

                    <div className="w-full h-full">
                      <section className="w-full h-full">
                        {children}
                      </section>
                    </div>
                  </div>
                }
              </div>
            }
          </section>
        </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
