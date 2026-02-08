"use client";

import React from 'react'
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
        <nav className="flex mx-auto max-w-7xl items-center px-6 py-6 justify-between">
            <Link href="/" className="text-lg">
                Jungle League
            </Link>
            
            {/* Navigation Links */}
            <ul className="hidden gap-8 md:flex">
                <li>
                    <Link href="" className="hover:underline">Schedule</Link>
                </li>

                <li>
                    <Link href="" className="hover:underline">Scores</Link>
                </li>

                <li>
                    <Link href="" className="hover:underline">Statistics</Link>
                </li>

                <li>
                    <Link href="" className="hover:underline">Standings</Link>
                </li>
            </ul>
        </nav>

    </header>
  )
}

