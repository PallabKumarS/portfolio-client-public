import AboutMe from "@/components/home/AboutMe";
import Banner from "@/components/home/Banner";
import Featured from "@/components/home/Featured";
import SkillSet from "@/components/home/SkillSet";
import ContainerComponent from "@/components/shared/ContainerComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Home",
  description: "Home page of my portfolio",
};

export default function HomePage() {
  return (
    <ContainerComponent className="py-2">
      <Banner />
      <AboutMe />

      <div className="mt-10">
        <SkillSet />
        <Featured />
      </div>
    </ContainerComponent>
  );
}
