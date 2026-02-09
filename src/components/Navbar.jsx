"use client";

import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import NavDropdown from './NavDropdown';
import Image from 'next/image';


export default function Navbar() {
  const [open, setOpen] = useState(false);


  return (
    <header className="sticky top-0 z-50 text-white text-yellow-300  ">
        <nav className="flex mx-auto max-w-7xl items-center px-6 py-2 justify-between bg-gradient-to-r from-black via-zinc-900 to-black backdrop-blur-md border-b border-yellow-400/20  ">
            <Link href="/" className="text-lg flex flex-col items-center ">
                <Image
                    src="/logo/jungle-logo-v2.svg"
                    width={72}
                    height={72}
                    alt ="Jungle League Logo"
                    className="rounded-full duration-300 ease-out hover:scale-110 "
                />
            </Link>
            
            {/* Navigation Links */}
            <ul className="hidden gap-8 md:flex font-bold text-lg">
                {/* Home Link Item */}

                {/* Standings Link Item */}
                <NavDropdown
                    label="Standings"
                    items={[
                        {text: "Competitive", href: "/standings/competitive"},
                        {text: "Recreational", href: "/standings/recreational"}

                    ]}
                />
                
                {/* Schedule Link Item */}
                <NavDropdown
                    label="Schedule"
                    items={[
                        {text: "Competitive", href: "/schedule/competitive"},
                        {text: "Recreational", href: "/schedule/recreational"}

                    ]}
                />

                {/* Scores Link Item */}
                <NavDropdown
                    label="Scores"
                    items={[
                        {text: "Competitive", href: "/scores/competitive"},
                        {text: "Recreational", href: "/scores/recreational"}

                    ]}
                />
    
                {/* Statistics Link Item */}
                <NavDropdown
                    label="Statistics"
                    items={[
                        {text: "Competitive", href: "/statistics/competitive"},
                        {text: "Recreational", href: "/scores/recreational"}

                    ]}
                />

                {/* Resources Link Item */}
                <NavDropdown
                    label="Resources"
                    items={[
                    ]}
                />
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
                <span className="font-bold pb-1 border-b">
                    Schedule
                </span>
                <div className="flex flex-col space-y-1">
                    <Link
                    href="/schedule/competitive"
                    onClick={() => setOpen(false)}
                    className="font-medium hover:bg-gray-100  ml-4 rounded-md"
                    >
                    Competitive Schedule
                    </Link>
                    <Link
                    href="/schedule/recreational"
                    onClick={() => setOpen(false)}
                    className="font-medium hover:bg-gray-100  ml-4 rounded-md"
                    >
                    Recreational Schedule
                    </Link>
                </div>

                <span className="font-bold pb-1 border-b">
                        Scores
                </span>
                <div className="flex flex-col space-y-1">
                    <Link
                    href="/scores/competitive"
                    onClick={() => setOpen(false)}
                    className="font-medium hover:bg-gray-100  ml-4 rounded-md"
                    >
                    Competitive Scores
                    </Link>
                    <Link
                    href="/scores/recreational"
                    onClick={() => setOpen(false)}
                    className="font-medium hover:bg-gray-100  ml-4 rounded-md"
                    >
                    Recreational Scores
                    </Link>
                </div>

                <span className="font-bold pb-1 border-b">
                     Statistics
                </span>
                <div className="flex flex-col space-y-1">
                    <Link
                    href="/statistics/competitive"
                    onClick={() => setOpen(false)}
                    className="font-medium hover:bg-gray-100  ml-4 rounded-md"
                    >
                    Competitive Statistcs
                    </Link>
                    <Link
                    href="/statistics/recreational"
                    onClick={() => setOpen(false)}
                    className="font-medium hover:bg-gray-100  ml-4 rounded-md"
                    >
                    Recreational Statistics
                    </Link>
                </div>
                    

                <span className="font-bold pb-1 border-b">
                    Standings
                </span>
                <div className="flex flex-col space-y-1">
                    <Link
                    href="/standings/competitive"
                    onClick={() => setOpen(false)}
                    className="font-medium hover:bg-gray-100  ml-4 rounded-md"
                    >
                    Competitive Standings
                    </Link>
                    <Link
                    href="/standings/recreational"
                    onClick={() => setOpen(false)}
                    className="font-medium hover:bg-gray-100  ml-4 rounded-md"
                    >
                    Recreational Standings
                    </Link>
                </div>
            </div>
        </div>
        
    </header>
  )
}

