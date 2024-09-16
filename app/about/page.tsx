import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rene A Franco ",
  description:
    "Rene A Franco is a software engineer with many years of experience ",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/avatar.png" alt={siteConfig.author} />
            <AvatarFallback>RF</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Software Engineer
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
          Hello, my name is Rene A Franco. I&apos;ve had a deep passion for
          technology since my early years. I&apos;ve always been fascinated by
          the process of building things, which led me to pursue a career in the
          tech industry. My primary goal is to leverage my passion for
          technology to create innovative tools that can benefit society.
        </p>
      </div>
    </div>
  );
}
