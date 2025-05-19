import ContactForm from "@/components/forms/ContactForm";
import Profile from "@/components/Profile";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Contact",
  description: "Contact Page from where you can contact me",
};

const ContactPage = () => {
  const words = "Let's Connect and Create Something Amazing Together!";

  return (
    <div className="min-h-screen w-full relative">
      <div className="container mx-auto p-4 mt-10 mb-5 relative z-10 bg-black/30 rounded-lg">
        <TextGenerateEffect
          words={words}
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-white/90"
        />
        <div className="md:flex justify-center items-center md:space-x-4 space-y-4 md:space-y-0">
          <Profile />
          <ContactForm />
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default ContactPage;
