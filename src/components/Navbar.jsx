"use client";

import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import NavDropdown from './NavDropdown';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
        <nav className="flex mx-auto max-w-7xl items-center px-6 py-6 justify-between">
            <Link href="/" className="text-lg">
                Jungle League
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
        </nav>

    </header>
  )
}

