import { Metadata } from "next";
import AboutPage from "./AboutPage";
import { getAbout } from "@/services/about.service";
import { Suspense } from "react";
import ContainerComponent from "@/components/shared/ContainerComponent";
import { LoaderComponent } from "@/components/shared/LoaderComponent";

export const metadata: Metadata = {
  title: "Dashboard | About",
  description:
    "Dashboard page contains personal information about Pallab Kumar Sarker",
};

const ProfilePage = async () => {
  const aboutPromise = getAbout();

  return (
    <ContainerComponent>
      <Suspense fallback={<LoaderComponent centered size="xl" />}>
        <AboutPage dataPromise={aboutPromise} />
      </Suspense>
    </ContainerComponent>
  );
};

export default ProfilePage;
