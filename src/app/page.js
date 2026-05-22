import Image from "next/image";
import { BoltIcon } from "@/components/icons/BoltIcon";
import { CommunityIcon } from "@/components/icons/CommunityIcon";


export default function Home() {

  {/* bg-gradient-to-br from-black via-yellow-600 to-yellow-200 */} 
  {/* bg-gradient-to-br from-black via-zinc-900 to-black */} 
  
  return (

    <div className="">
      <main className="min-h-screen text-white  flex flex-col justify-center items-center">
        
        {/* Hero Section */}
        <section className="min-h-screen flex items-center flex-col justify-center px-4 max-w-6xl text-center">
          <h1 className="text-6xl md:text-7xl lg:text-7xl font-display font-bold  mb-6">
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">Season 2: "The Next Chapter"</span>
          </h1>
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent text-xl font-bold ">Think you got next? Check out our social media below!</span>

          <div className="flex gap-4 mt-6">
            {/* Instragram Button button */}
            <a className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-xl hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/30" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/thejunglerecleague/">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* YouTube Button */}
            <a className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-xl hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/30" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@TheJungleLeague">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
          
        </section>        
       
      </main>

      

      
    </div>
  );
}
