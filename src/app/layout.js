import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const inter = Inter({
  subsets: ["latin"],
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
});
//                                                                                                                                                                              

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${inter.className} h-full antialiased `}
    >
      
      
      <body className="min-h-full flex flex-col bg-bg text-white ">
        <Navbar/>
        <div className="flex-1 border-b-2 border-t-2 border-yellow-300/50">{children}</div>
        <Footer />
        </body>
    </html>
  );
}
