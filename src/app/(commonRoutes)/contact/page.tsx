import ContactForm from "@/components/forms/ContactForm";
import Profile from "./Profile";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { Metadata } from "next";
import ContainerComponent from "@/components/shared/ContainerComponent";

export const metadata: Metadata = {
  title: "Portfolio | Contact",
  description:
    "Get in touch with Pallab Kumar Sarker — Let's collaborate on your next web project.",
};

const ContactPage = () => {
  const words = "Let's Connect and Create Something Amazing Together!";

  return (
    <ContainerComponent className="relative mt-32">
      <div className="container mx-auto p-4 z-10 rounded-lg">
        <TextGenerateEffect
          words={words}
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground"
        />
        <div className="md:flex justify-center items-center md:space-x-4 space-y-4 md:space-y-0">
          <Profile />
          <ContactForm />
        </div>
      </div>
      <BackgroundBeams />
    </ContainerComponent>
  );
};

export default ContactPage;
