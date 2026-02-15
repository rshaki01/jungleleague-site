import Image from "next/image";
import { BoltIcon } from "@/components/icons/BoltIcon";


export default function Home() {

  {/* bg-gradient-to-br from-black via-yellow-600 to-yellow-200 */} 
  {/* bg-gradient-to-br from-black via-zinc-900 to-black */} 
  
  return (

    <div className="">
      <main className="min-h-screen text-white bg-gradient-to-br from-black via-zinc-900 to-black flex flex-col justify-center items-center */">
        
        {/* Hero Section */}
        <section className="min-h-screen flex items-center flex-col justify-center px-4 max-w-6xl text-center">
          <h1 className="text-7xl md:text-7xl lg:text-7xl font-display font-bold  mb-6">
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">Season 2: "The Next Chapter"</span>
          </h1>
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent text-xl font-bold ">Do you got next? Check out the Jungle Experience below!</span>

          {/* Sign up button */}
          <a className="mt-6 text-2xl space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-xl font-bold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/30 " target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/thejunglerecleague/">Sign up</a>
          
        </section>



        {/*Competitive Experience Cards */}
        <section className="max-w-2xl bg-gradient-to-br from-yellow-600/90 to-yellow-200/90 backdrop-blur-xl rounded-2xl p-10 mb-20 flex flex-col items-center justify-center">
          {/*Card Header */}
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white mb-1 flex flex-col justify-center items-center">
            <span className="">COMPETITIVE LEAGUE</span>
            <BoltIcon className="my-3 h-10 w-10 text-yellow-300" />
          </h1>
          {/*Header Caption */}
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-100 bg-clip-text text-transparent text-xl font-bold">Where intensity meets opportunity.</span>
          {/*Key Dates */}


        </section>
        

        {/*Recreational Experience Cards */}
        <section className="max-w-2xl bg-gradient-to-br from-yellow-600/90 to-yellow-200/90 backdrop-blur-xl rounded-2xl p-10 mb-20 flex flex-col items-center justify-center">
          {/*Card Header */}
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white mb-1 flex flex-col justify-center items-center text-center">
            <span className="">RECREATIONAL LEAGUE</span>
            <BoltIcon className="my-3 h-10 w-10 text-yellow-300" />
          </h1>
          {/*Header Caption */}
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-100 bg-clip-text text-transparent text-xl font-bold">Where intensity meets opportunity.</span>
          {/*Key Dates */}
          

        </section>
        
        
       
      </main>

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

      
    </div>
  );
}
