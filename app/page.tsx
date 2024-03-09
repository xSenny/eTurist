import Image from "next/image";
import LandingNavbar from "@/components/shared/LandingNavbar";
import {TypewriterEffect} from "@/components/ui/typewriter-effect";
import StickyScrollLanding from "@/components/shared/StickyScrollLanding";

export default function Home() {
  return (
    <main className={"bg-gray-10 h-full"}>
      <section className={"bg-[#100F57] h-[calc(100vh-75px)] w-full"}>
          <LandingNavbar />
          <div className={"flex flex-col justify-center items-center h-full"}>
              <TypewriterEffect words={[
                  {
                      text: "Descopera",
                      className: "text-gray-10"
                  },
                  {
                      text: "si",
                      className: "text-gray-10",
                  },
                  {
                      text: "Exploreaza:",
                      className: "text-gray-10",
                  },
                  {
                      text: "Destinatii",
                      className: "text-gray-10",
                  },
                  {
                      text: "Uimitoare",
                      className: "text-gray-10",
                  },
                  {
                      text: "si",
                      className: "text-gray-10",
                  },
                  {
                      text: "Excursii",
                      className: "text-secondary-300",
                  },
                  {
                      text: "Memorabile",
                      className: "text-secondary-300",
                  }
                ]} className={"text-3xl text-gray-10 font-bold text-center px-5 transform -translate-y-1/2"} cursorClassName={"bg-secondary-300"}/>
              <p className={"text-white text-xl mt-3 text-center text-gray-5 font-extralight transform -translate-y-1/2"}>Ghidul Tău de Călătorie Perfect!</p>
          </div>
      </section>
        <div className={"relative"}>
            <Image src={'/assets/landing.png'} alt={'Landing image'} width={700} height={700}  className={"px-4 md:px-0 absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-[25%] rounded-lg object-cover"}/>
        </div>
        <section className={"h-screen flex items-center justify-center mt-72"}>
            <StickyScrollLanding />
        </section>
    </main>
  );
}
