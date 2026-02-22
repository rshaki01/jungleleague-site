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
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent text-xl font-bold ">Do you got next? Check out the Jungle Experience below!</span>

          {/* Sign up button */}
          <a className="mt-6 text-2xl space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-xl font-bold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/30 " target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/thejunglerecleague/">Sign up</a>
          
        </section>

        {/*Experience Section */}
        <section className="grid grid-cols-1 gap-10 px-5 md:grid-cols-2 mb-20">
          {/*Competitive Experience Cards */}
          <div className="h-[520px] w-full bg-gradient-to-br from-yellow-600/90 to-yellow-200/90 backdrop-blur-xl rounded-2xl py-10 px-10  flex flex-col items-center justify-between hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform ">
            {/*Card Header */}
            <h1 className="text-xl sm:text-2xl font-display font-bold text-white mb-1 flex flex-col justify-center items-center">
              <span className="text-shadow-lg">Competitive League</span>
              <BoltIcon className="my-5 h-10 w-10 text-yellow-300" />
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-100 bg-clip-text text-transparent text-md font-bold text-center opacity-40">Intensity meets opportunity.</span>
            </h1>
            {/*Key Dates */}
            <div className="flex flex-col gap-2">
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent text-md font-bold text-center opacity-90 ">April 19th</span>
              <span className="bg-clip-text text-shadow-sm text-base font-bold text-center opacity-90 text-sm">Jungle League Opener</span>

              <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent text-md font-bold text-center opacity-90 ">May 24th</span>
              <span className="bg-clip-text text-shadow-sm text-base font-bold text-center opacity-90 text-sm">Jungle All Star Game</span>

              <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent text-md font-bold text-center opacity-90 ">July 5th</span>
              <span className="bg-clip-text text-shadow-sm text-base font-bold text-center opacity-90 text-sm">Playoffs: Race to the thrones</span>

              <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent text-md font-bold text-center opacity-90 ">July 19th</span>
              <span className="bg-clip-text text-shadow-sm text-base font-bold text-center opacity-90 text-sm">Playoffs: Race to the thrones</span>
            </div>       
          </div>

          {/*Recreational Experience Cards */}
          <div className="h-[520px] w-full bg-gradient-to-br from-yellow-600/90 to-yellow-200/90 backdrop-blur-xl rounded-2xl py-10 px-10  flex flex-col items-center justify-between hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform">
            {/*Card Header */}
            <h1 className="text-lg sm:text-2xl font-display font-bold text-white mb-1 flex flex-col justify-center items-center text-center">
              <span className="text-shadow-lg">Recreational League</span>
              <CommunityIcon className="my-5 h-10 w-10 text-yellow-300" />
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-100 bg-clip-text text-transparent text-md font-bold text-center opacity-40">Community meets competition.</span>
            </h1>
            {/*Key Dates */}
            <div className="flex flex-col gap-2">
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent text-md font-bold text-center opacity-90">April 19th</span>
              <span className="bg-clip-text text-shadow-sm text-base font-bold text-center opacity-90 text-sm">Jungle League Opener</span>

              <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent text-md font-bold text-center opacity-90">May 24th</span>
              <span className="bg-clip-text text-shadow-sm text-base font-bold text-center opacity-90 text-sm">Jungle All Star Game</span>

              <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent text-md font-bold text-center opacity-90">July 5th</span>
              <span className="bg-clip-text text-shadow-sm text-base font-bold text-center opacity-90 text-sm">Playoffs: Race to the thrones</span>

              <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent text-md font-bold text-center opacity-90">July 19th</span>
              <span className="bg-clip-text text-shadow-sm text-base font-bold text-center opacity-90 text-sm text-sm">Playoffs: Race to the thrones</span>
            </div>
            
            
         
          </div>
        </section>
  
        

        
        
        
       
      </main>

      

      
    </div>
  );
}
