import Banner from "./banner";
import Navlik from "./nav-link";
import Footer from "./footer";

import Full from "../assets/Full.png"
import { useState } from "react";


const MainLayout = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            <Banner />
            <Navlik />
            <div class="flex flex-col md:flex-row-reverse justify-center justify-items-center mt-3 xl:mt-11 xl:pt-11">
                <div class='flex flex-col justify-center justify-items-center'>
                <h1 class="text-center mb-2 font-fut text-ascBlue text-5xl md:text-6xl">MINT IS LIVE!</h1>
                <h3 class='text-center mb-3 font-fut text-ascBlue text-2xl font-extralight md:text-4xl'>How many skeletons do you wish to mint?</h3>
                 <div class='flex flex-row self-center h-10 w-2/6 md:w-44 rounded-lg relative bg-transparent mt-1' >
                    <button onClick={()=> setCount(count -1)} disabled={count === 0} class='bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none'>
                    <span class="m-auto text-2xl font-thin">−</span>
                    </button>
                    <input class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"  type="number" name="input-number" value={count}/>
                    <button onClick={()=> setCount(count +1)} disabled={count === 10} class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                    <span class="m-auto text-2xl font-thin">+</span>
                    </button>
                 </div>
                 <button class='self-center bg-ascBlue text-white font-fut-300 mt-3 py-2 px-2 rounded hover:bg-ascBlueLight duration-500 w-48 sm:w-56 md:w-64'>MINT</button>
                </div>
                 <div class='flex justify-center justify-items-center'>
                    <img class='h-56 mt-5 md:h-96 md:mt-8 md:ml-10' src={Full} alt="" />
                 </div>
            </div>

            <Footer />
        </div>
       
    );
  }
  
  export default MainLayout;