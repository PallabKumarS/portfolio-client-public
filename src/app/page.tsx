import AboutMe from "@/components/home/AboutMe";
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
      <AboutMe />

      <div className="mt-10">
        <h2 className="text-center mx-auto text-4xl">Skill Set</h2>
        <div className="xl:container border-t border-gray-300 dark:border-gray-700 my-4 xl:mx-auto mb-10 mx-10" />
        <SkillSet />
        <Featured />
      </div>
    </ContainerComponent>
  );
}
