import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa6";

const Profile = () => {
  return (
    <div className="bg-card border border-border px-6 py-10 rounded-lg shadow-md max-w-md w-full">
      {/* Banner Profile */}
      <div className="relative">
        <Image
          src="/github-header-image.png"
          alt="Banner Profile"
          width={500}
          height={200}
          className="w-full rounded-t-lg h-40"
          priority
        />
        <Image
          src="https://avatars.githubusercontent.com/u/25210910?v=4"
          alt="Profile Picture"
          width={500}
          height={200}
          className="absolute bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-background"
          priority
        />
      </div>
      {/* User Info with Verified Button */}
      <div className="flex items-center mt-12">
        <h2 className="text-xl font-bold text-foreground">Pallab Kumar Sarker</h2>
        <button className=" px-2 py-1 rounded-full" aria-label="Verified account">
          <MdVerified className="text-2xl text-blue-500" />
        </button>
      </div>
      {/* Bio */}
      <p className="text-muted-foreground mt-2"> Web Developer | Music Lover | Gamer</p>
      {/* Social Links */}
      <div className="flex items-center mt-4 gap-5 justify-center flex-wrap">
        <a
          href="https://www.instagram.com/pallabkumars/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:scale-110 transition-transform"
        >
          <FaInstagram className="text-5xl text-rose-500" />
        </a>
        <a
          href="https://www.facebook.com/PallabKumars/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook className="text-5xl text-blue-500" />
        </a>
        <a
          href="https://github.com/PallabKumarS"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:scale-110 transition-transform"
        >
          <FaGithub className="text-5xl text-muted-foreground" />
        </a>
        <a
          href="https://www.linkedin.com/in/pallab-kumar-sarker-7a6362251/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-5xl text-sky-500" />
        </a>
      </div>
      {/* Separator Line */}
      <hr className="my-4 border-t border-border" />
      {/* Stats */}
      <div className="flex justify-center items-center text-foreground mx-2 gap-5 flex-wrap">
        <div className="text-center">
          <span className="block font-bold text-lg">Phone No.</span>
          <span className="text-xs text-muted-foreground">+8801521577820</span>
        </div>
        <div className="text-center">
          <span className="block font-bold text-lg">Address</span>
          <span className="text-xs text-muted-foreground">Rangpur, Bangladesh</span>
        </div>
        <div className="text-center">
          <span className="block font-bold text-lg">Email</span>
          <span className="text-xs text-muted-foreground">pallabkumar26@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
