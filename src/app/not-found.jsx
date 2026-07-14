import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { IoGrid } from "react-icons/io5";

const NotFoundPage = () => {
    return (
        <div className=" min-h-[90vh] md:min-h-screen flex items-center justify-center bg-black/70">
        <div className="">
         <h1
          className="text-[90px] md:text-[110px] font-medium leading-none mb-2 tracking-tight text-center"
          style={{
            color: "transparent",
            WebkitTextStroke: "2px #e8c547",
          }}
        >
          4<span style={{ color: "#e8c547", WebkitTextStroke: "0" }}>0</span>4
        </h1>
            <h2 className="text-xl md:text-3xl font-medium text-white mb-4 md:mb-7 text-center">
          Something Went Wrong !!
        </h2>
         <div className="flex gap-3 flex-wrap justify-center mb-8">
          <Link
            href="/"
            className="bg-primary text-[#0f0e17] font-semibold px-6 py-3 rounded-xl text-sm hover:bg-yellow-400 transition-colors flex items-center gap-2"
          >
           <AiOutlineHome /> Back to home
          </Link>
          <Link
            href="/all-tiles"
            className="border border-white/15 text-white/50 px-6 py-3 rounded-xl text-sm hover:border-[#e8c547]/35 hover:text-[#e8c547] transition-colors flex items-center gap-2"
          >
            <IoGrid /> Browse tiles
          </Link>
        </div>

            </div>
          
        </div>
    );
};

export default NotFoundPage;