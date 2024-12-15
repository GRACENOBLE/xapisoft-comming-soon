import Link from "next/link";
import { Button } from "../ui/button";
import Container from "../container";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-white text-dark pt-16 md:pt-32 md:h-screen overflow-hidden">
      <Container>
        <div className="flex flex-col items-start justify-center gap-4 ">
          <div className="flex items-center justify-center 2xl:justify-start gap-6 text-lg">
            <p className="hidden md:flex rounded-full px-4 py-2 bg-red-500/10 w-fit ">
              🚧{" "}
              <span className="text-red-500/60">
                {" "}
                Website under maintenance. We will be up and running shortly.{" "}
              </span>
              🚧
            </p>
            <p className="rounded-full px-4 py-2 mt-16 bg-red-500/10 w-fit md:hidden ">
              🚧{" "}
              <span className="text-red-500/60">
                {" "}
                Website under maintenance.
              </span>
              🚧
            </p>
          </div>
          <h1 className="text-4xl xl:text-7xl 2xl:text-8xl 2xl:mb-8 pb-8">
            <p className="leading-tight md:leading-none">
              We create websites, apps and brand designs that work{" "}
              <span className="md:hidden">for your business</span>
            </p>

            <Link href={"mailto:info@xapisoft.co"}>
              <Button className="mt-12 md:hidden" size={"lg"} variant={"dark"}>
                Start a conversation
              </Button>
            </Link>
            <p className="flex items-center gap-8">
              <span className="hidden md:block">for your business</span>
              <Link href={"mailto:info@xapisoft.co"}>
                <Button
                  className="mt-4 hidden md:flex"
                  size={"lg"}
                  variant={"dark"}
                >
                  Start a conversation
                </Button>
              </Link>
            </p>
          </h1>
          <Image
            src={"/images/hero-image.png"}
            alt={""}
            height={300}
            width={1200}
            className="w-full object-cover h-[350px]"
          />
          <p className="rounded-full px-4 py-2 mt-10 mb-6 bg-red-500/10 w-fit md:hidden mx-auto">
            🚧{" "}
            <span className="text-red-500/60">
              We will be up and running shortly.
            </span>
            🚧
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
