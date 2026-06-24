import { Suspense } from "react";
import Banner from "@/components/home/Banner";
import AboutMe from "@/components/home/AboutMe";
import Featured from "@/components/home/Featured";
import SkillSet from "@/components/home/SkillSet";
import ContainerComponent from "@/components/shared/ContainerComponent";
import { LoaderComponent } from "@/components/shared/LoaderComponent";
import { Metadata } from "next";
import {
  getAboutMe,
  getAllSkills,
  getAllProjects,
} from "@/services/api.services";

export const metadata: Metadata = {
  title: "Portfolio | Home",
  description:
    "Welcome to my portfolio — I build modern, responsive web applications with cutting-edge technologies.",
};

export default function HomePage() {
  // Initiate fetches in the Server Component — don't await, pass as Promises
  const aboutPromise = getAboutMe();
  const skillsPromise = getAllSkills();
  const projectsPromise = getAllProjects();

  return (
    <ContainerComponent className="mt-32">
      <Banner />

      <Suspense
        fallback={
          <LoaderComponent centered size="xl" text="Loading information..." />
        }
      >
        <AboutMe dataPromise={aboutPromise} />
      </Suspense>

      <div className="mt-10">
        <Suspense
          fallback={
            <LoaderComponent centered size="xl" text="Loading Skills..." />
          }
        >
          <SkillSet dataPromise={skillsPromise} />
        </Suspense>

        <Suspense
          fallback={
            <LoaderComponent centered size="xl" text="Loading projects..." />
          }
        >
          <Featured dataPromise={projectsPromise} />
        </Suspense>
      </div>
    </ContainerComponent>
  );
}
