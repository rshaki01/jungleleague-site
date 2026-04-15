"use client";

import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import NavDropdown from './NavDropdown';
import Image from 'next/image';


export default function Navbar() {
  const [open, setOpen] = useState(false);


  return (
    <header className="sticky top-0 z-50 text-white text-yellow-300 bg-gradient-to-r from-black via-zinc-900 to-black backdrop-blur-md border-b border-yellow-500/20 ">
        <nav className="flex mx-auto max-w-7xl items-center px-6 py-2 justify-between ">
            <Link href="/" className="text-lg flex flex-col items-center ">
                <Image
                    src="/logo/jungle-logo-v2.svg"
                    href="/"
                    width={64}
                    height={64}
                    alt ="Jungle League Logo"
                    className="rounded-full duration-300 ease-out hover:scale-110"
                />
            </Link>
            
            {/* Navigation Links */}
            <ul className="hidden gap-8 md:flex font-bold text-lg">
                {/* Home Link Item */}

                {/* Standings Link Item */}
                <Link href="/standings/recreational" className='duration-300 ease-out hover:text-yellow-500'>
                    <NavDropdown
                        label="Standings"
                        items={[
                            {text: "Competitive", href: "/standings/competitive"},
                            {text: "Recreational", href: "/standings/recreational"}

                        ]}
                    />
                </Link>
                
                {/* Schedule Link Item */}
                <Link href="/schedule/recreational" className='duration-300 ease-out hover:text-yellow-500'>
                    <NavDropdown
                        label="Schedule"
                        items={[
                            {text: "Competitive", href: "/standings/competitive"},
                            {text: "Recreational", href: "/standings/recreational"}

                        ]}
                    />
                </Link>

                {/* Scores Link Item */}
                <Link href="/scores/recreational" className='duration-300 ease-out hover:text-yellow-500'>
                    <NavDropdown
                        label="Scores"
                        items={[
                            {text: "Competitive", href: "/scores/competitive"},
                            {text: "Recreational", href: "/scores/recreational"}

                        ]}
                    />
                </Link>
                {/* Statistics Link Item */}
                <Link href="/statistics/recreational" className='duration-300 ease-out hover:text-yellow-500'>
                    <NavDropdown
                        label="Statistics"
                        items={[
                            {text: "Competitive", href: "/statistics/competitive"},
                            {text: "Recreational", href: "/statistics/recreational"}

                        ]}
                    />
                </Link>
            </ul>

            {/* Mobile toggle (default is hidden until viewport is < md) */}
            <button
                onClick={() => setOpen(!open)}
                className="md:hidden cursor-pointer"
                aria-label="Toggle menu"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </nav>

        {/* Mobile menu */}
        <div
            className={`
                md:hidden
                border-t
                overflow-hidden        

                transition-all
                duration-300
                ease-out

                ${open
                ? "max-h-[500px] opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-1"
                }
            `} 
        >


            <div className="flex flex-col space-y-2 px-4 py-3">

                <Link
                        href="/standings/recreational"
                        onClick={() => setOpen(false)}
                        className="font-medium px-2 hover:bg-yellow-200/30 rounded-sm"
                        >
                        <span className="font-bold border-zinc-100/20">
                        Standings
                        </span>
                </Link>
                
                {/* <div className="flex flex-col space-y-1 text-gray-100">
                    <Link
                        href="/standings/competitive"
                        onClick={() => setOpen(false)}
                        className="font-medium hover:bg-yellow-200/30 ml-3 rounded-sm p-1"
                        >
                        Competitive Standings
                    </Link>
                    <Link
                        href="/standings/recreational"
                        onClick={() => setOpen(false)}
                        className="font-medium hover:bg-yellow-200/30 ml-3 rounded-sm p-1"
                        >
                        Recreational Standings
                    </Link>
                </div> */}

                <Link
                        href="/schedule/recreational"
                        onClick={() => setOpen(false)}
                        className="font-medium px-2 hover:bg-yellow-200/30 rounded-sm"
                        >
                        <span className="font-bold  border-zinc-100/20">
                        Schedule
                        </span>
                </Link>

                {/* <div className="flex flex-col space-y-1 text-gray-100">
                    <Link
                    href="/schedule/competitive"
                    onClick={() => setOpen(false)}
                    className="font-medium hover:bg-yellow-200/30 ml-3 rounded-sm p-1"
                    >
                    Competitive Schedule
                    </Link>
                    <Link
                    href="/schedule/recreational"
                    onClick={() => setOpen(false)}
                    className="font-medium hover:bg-yellow-200/30 ml-3 rounded-sm p-1"
                    >
                    Recreational Schedule
                    </Link>
                </div> */}

                <Link
                        href="/scores/recreational"
                        onClick={() => setOpen(false)}
                        className="font-medium px-2 hover:bg-yellow-200/30 rounded-sm"
                        >
                        <span className="font-bold border-zinc-100/20">
                        Scores
                        </span>
                </Link>

                {/* <div className="flex flex-col space-y-1 text-gray-100">
                    <Link
                    href="/scores/competitive"
                    onClick={() => setOpen(false)}
                    className="font-medium hover:bg-yellow-200/30 ml-3 rounded-sm p-1"
                    >
                    Competitive Scores
                    </Link>
                    <Link
                    href="/scores/recreational"
                    onClick={() => setOpen(false)}
                    className="font-medium hover:bg-yellow-200/30 ml-3 rounded-sm p-1"
                    >
                    Recreational Scores
                    </Link>
                </div> */}

                <Link
                        href="/statistics/recreational"
                        onClick={() => setOpen(false)}
                        className="font-medium px-2 hover:bg-yellow-200/30 rounded-sm"
                        >
                        <span className="font-bold  border-zinc-100/20">
                        Statistics
                        </span>
                </Link>

               
                {/* <div className="flex flex-col space-y-1 text-gray-100">
                    <Link
                    href="/statistics/competitive"
                    onClick={() => setOpen(false)}
                    className="font-medium hover:bg-yellow-200/30 ml-3 rounded-sm p-1"
                    >
                    Competitive Statistics
                    </Link>
                    <Link
                    href="/statistics/recreational"
                    onClick={() => setOpen(false)}
                    className="font-medium hover:bg-yellow-200/30 ml-3 rounded-sm p-1"
                    >
                    Recreational Statistics
                    </Link>
                </div> */}
            </div>
        </div>
        
    </header>
  )
}

