import React from 'react'

export default function Footer()  {
  return (
    
    <footer className="w-full bg-gradient-to-r from-black via-zinc-900 to-black backdrop-blur-md border-t border-yellow-500/20">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left: brand */}
          <span className="text-sm text-white/60">
            © {new Date().getFullYear()}{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent font-semibold">
              Jungle League
            </span>
            . All rights reserved.
          </span>

          {/* Right: links */}
          <div className="flex gap-6 text-sm font-medium">
            <a
              href="/rules"
              className="text-white/70 hover:text-yellow-400 transition-colors"
            >
              Rules
            </a>
            <a
              href="/faqs"
              className="text-white/70 hover:text-yellow-400 transition-colors"
            >
              FAQs
            </a>
            <a
              href="https://www.instagram.com/thejunglerecleague/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-yellow-400 transition-colors"
            >
              Instagram
            </a>
          </div>

        </div>
      </footer>

  )
}

