import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaInstagram, FaGithub } from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300 dark:from-neutral-950 dark:to-neutral-900">
      <footer className="p-10 mx-auto">
        <div className="">
          <div className="md:flex items-center gap-4 justify-around space-y-3">
            {/* Logo and Created With Section */}
            <div className="text-center">
              <Logo />
            </div>

            {/* Created With Text */}
            <div className="text-center text-neutral-800 dark:text-neutral-200">
              Created With{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                NextJs{" "}
              </span>
              and{" "}
              <span className="text-purple-600 dark:text-purple-400 font-semibold">
                Shadcn{" "}
              </span>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://www.facebook.com/PallabKumars"
                className="transition-transform hover:scale-110"
              >
                <BsFacebook className="text-4xl text-indigo-600 dark:text-indigo-400 hover:text-indigo-500" />
              </a>
              <a
                href="https://www.instagram.com/pallabkumars/"
                className="transition-transform hover:scale-110"
              >
                <FaInstagram className="text-4xl text-purple-600 dark:text-purple-400 hover:text-purple-500" />
              </a>
              <a
                href="https://twitter.com/PallabKumarS"
                className="transition-transform hover:scale-110"
              >
                <BsTwitter className="text-4xl text-indigo-600 dark:text-indigo-400 hover:text-indigo-500" />
              </a>
              <a
                href="https://github.com/PallabKumarS"
                className="transition-transform hover:scale-110"
              >
                <FaGithub className="text-4xl text-purple-600 dark:text-purple-400 hover:text-purple-500" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-neutral-700 dark:text-neutral-400 text-center mt-4">
            Copyright © 2025 - All right reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
