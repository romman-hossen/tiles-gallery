import Link from "next/link";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { BiLocationPlus, BiPhone } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="relative mt-24">
      {/* <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10 " /> */}

      {/* Background Layer */}
      <div className="absolute inset-0 -z-10  dark:bg-[#0a0a0b]" />

      {/* Subtle Gradient Glow */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {/* <Image
                src="/logo.png"
                alt="pixgen logo"
                width={32}
                height={32}
                className="dark:brightness-200"
              /> */}
              <h2 className="text-xl font-semibold tracking-tight text-primary dark:text-white">
                Tiles Gallery
              </h2>
            </div>

            <p className="text-sm leading-relaxed  transition text-gray-600 dark:text-gray-400 max-w-xs">
              Premium tile gallery bringing aesthetic beauty to your spac
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-primary dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary dark:hover:text-white transition"
                >
                 Home
                </Link>
              </li>
              <li>
                <Link
                  href="/all-tiles"
                  className="hover:text-primary dark:hover:text-white transition"
                >
                  All Tiles
                </Link>
              </li>
              <li>
                <Link
                  href="/my-profile"
                  className="hover:text-primary dark:hover:text-white transition"
                >
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-primary dark:text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="mailto:mdromman417@gmail.com"
                  className="hover:text-primary dark:hover:text-white transition flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdEmail /> mdromman417@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary dark:hover:text-white transition flex items-center gap-1"
                >
                  <BiPhone /> +1 (123) 456-7890
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-primary dark:hover:text-white transition flex items-center gap-1"
                >
                  <BiLocationPlus /> TGAve, NY
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA Block */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-primary dark:text-white">
              Start creating
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Generate your first AI image today.
            </p>

            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full 
              bg-primary  text-dark dark:bg-white dark:text-black 
              text-sm font-medium transition-all duration-200 
              hover:scale-[1.02] hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/10"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>
            © {new Date().getFullYear()} Tiles Gallery. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-white dark:hover:text-white transition"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white dark:hover:text-white transition"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
