import Image from "next/image";

export default function Home() {

  {/* bg-gradient-to-br from-black via-yellow-600 to-yellow-200 */} 
  {/* bg-gradient-to-br from-black via-zinc-900 to-black */} 
  
  return (

    <div className="">
      <main className="min-h-screen text-white bg-gradient-to-br from-black via-zinc-900 to-black flex flex-col justify-center items-center */">
        
        {/* Hero Section */}
        <section className="min-h-screen flex items-center flex-col justify-center px-4 max-w-6xl text-center">
          <h1 className="text-7xl md:text-7xl lg:text-7xl font-display font-bold  mb-6">
            <span class="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">Season 2: "The Next Chapter"</span>
          </h1>
          <span class="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent text-xl font-bold">Do you got next? Check out the Jungle Experience below!</span>

                  {/* Sign up button */}
          <button className="mt-6 text-2xl space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-xl font-bold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/30">Sign up</button>
          
        </section>



        {/*Competitive Experience Cards */}
        <section className="max-w-2xl bg-gradient-to-br from-yellow-600/90 to-yellow-200/90 backdrop-blur-xl rounded-2xl p-12 border border-gray-700/50">
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white mb-6 p-4">
            <span class="">COMPETITIVE LEAGUE</span>
          </h1>
          <span class="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent text-xl font-bold">Do you got next? Check out the Jungle Experience below!</span>
        </section>
        

        {/*Recreational Experience Cards */}
        
        
       
      </main>
    </div>
  );
}
