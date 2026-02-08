"use client";

import React from 'react'
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
        <nav className="flex ">
            <Link href="/" className="text-lg font-extrabold">
                Jungle League
            </Link>
        </nav>
        
    </header>
  )
}

