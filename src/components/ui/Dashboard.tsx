"use client";
import React, {useEffect, useState} from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Bars3Icon } from "@heroicons/react/24/outline"
import Loading from './Loading'
import { useRouter } from 'next/navigation'
import { isLoggedIn } from '@/services/auth.service'

const Dashboard = ({children}:{children: React.ReactNode}) => {
    const userLoggedIn = isLoggedIn()
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading, userLoggedIn]);

  if (!isLoading) {
    return (
        <Loading />
    );
  }
    return (
        <div className='w-full min-h-screen flex flex-col'>
            <Navbar> 
            <div className="lg:hidden">
          <button
            type="button"
            className=" inline-flex items-center justify-end rounded-md p-2.5 text-accent"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        </Navbar>
            <div className='flex-grow'>
                <Sidebar sidebarOpen={sidebarOpen}  setSidebarOpen={setSidebarOpen}>{children}</Sidebar>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;