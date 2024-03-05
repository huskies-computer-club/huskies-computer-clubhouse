import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import { BackgroundGradient } from "@/components/ui/background-gradient"

export default function Home() {
  return (
    <main>
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight className="top-0 left-0" fill="white" />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Huskies Computer  <br /> ClubHouse
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto mb-4">
            The spotlight is on you! Join us to stay connected on the latest events, hackatons, workshops and meetings.
          </p>

          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"
          >
              <Link
                href="/home"
                className="flex justify-center gap-2 px-4 py-2 font-semibold text-white transition-colors duration-200 rounded-lg bg-primary-600 hover:bg-primary-700"
              >
                Sign Up or Login
              </Link>
      </BackgroundGradient>

    </div>

      </div >
    </main >
  );
}
