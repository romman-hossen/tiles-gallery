"use client";
import Marquee from "react-fast-marquee";

const MarqueeBar = ({marqueeItems}) => {
    return (
       <div className="bg-primary text-center py-2 text-xs font-medium text-[#0f0e17] tracking-widest ">
         <Marquee pauseOnClick>
        {marqueeItems.map((item,index) =><span className="mx-8 whitespace-nowrap" key={index}>{item}</span> )}
         </Marquee>
     </div>
    );
};

export default MarqueeBar;