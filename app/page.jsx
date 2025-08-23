"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const handleDownloadCV = () => {
    // Create a link element to trigger the download
    const link = document.createElement("a");
    link.href = "/assets/cv.pdf";
    link.download = "Dilmin_Ekanayaka_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-4 py-8 -mt-14">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-0 mt-8 xl:pb-12">
          {/*text*/}
          <div className="text-center xl:text-left order-2 xl:order-none mt-8 xl:mt-0">
            <span className="text-lg xl:text-xl text-white/80 mb-3 block">
              Full Stack Developer
            </span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Dilmin Ekanayaka</span>
            </h1>
            <p className="max-w-[500px] mb-8 text-white/70 text-base xl:text-lg leading-relaxed">
              Turning caffeine and code into web magic that works beautifully on
              every screen.
            </p>
            {/* btn and socials*/}
            <div className="flex flex-col xl:flex-row items-center gap-6 xl:gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownloadCV}
              >
                <span>Download CV</span>
                <FiDownload className="text-lg" />
              </Button>
              <div className="mb-6 xl:mb-0">
                <Social
                  containerStyles="flex gap-4"
                  iconStyles="w-8 h-8 border border-accent rounded-full flex justify-center items-center text-accent text-sm hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/*photo*/}
          <div className="order-1 xl:order-none mb-6 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
