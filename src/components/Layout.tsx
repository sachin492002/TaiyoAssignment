import React from 'react';
import {FcBusinessContact} from "react-icons/fc";
import {Link, Outlet} from "react-router-dom";
import {SiGooglemaps} from "react-icons/si";

function Layout() {
    return (
        <div className='inline-flex min-w-full'>
        <aside className='w-1/6 px-6 bg-amber-50  flex flex-col gap-8 h-svh py-20'>
            <div className='inline-flex justify-center gap-2 items-center'>
                <img src='/logo.png' className='w-8' alt='CM'/>
                <span className='text-2xl font-serif text-gray-700'>CoM</span>
            </div>
            <span className='w-full h-1 bg-amber-300'/>
            <div className='flex flex-col items-start w-full gap-4'>
                <Link to='/contacts' className='inline-flex justify-center gap-2 items-center'>
                    <FcBusinessContact className='text-2xl'/>
                    <span className='text-xl font-serif text-gray-500'>Contacts</span>
                </Link>
                <Link to='/maps' className='inline-flex justify-center gap-2 items-center'>
                    <SiGooglemaps className='text-lime-500 text-2xl'/>
                    <span className='text-xl font-serif text-gray-500'>Charts & Maps</span>
                </Link>
            </div>
        </aside>
        <Outlet />
    </div>
    );
}

export default Layout;