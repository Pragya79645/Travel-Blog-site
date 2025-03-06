"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [

    {
      text: "WELCOME",
       className: "text-teal-400 dark:text-teal-500"
    },
    {
      text: "TO",
       className: "text-teal-400 dark:text-teal-500"
    },
    {
      text: "NOMAD.",
      className: "text-teal-400 dark:text-teal-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-white-400-600 dark:text-white-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-white border dark:border-black border-transparent text-white text-sm">
          Join now
        </button>
      
      </div>
    </div>
  );
}
