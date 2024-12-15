import { NavLinks } from "@/constants";
import Link from "next/link";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";
import SocialLinks from "../social-links";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";

const LargeNavigation = ({ scrolled }: { scrolled: boolean }) => {
  return (
    <>
      <ul
        className={cn(
          "hidden md:flex text-sm gap-2 font-medium h-full text-dark/60 items-center border border-dark/10 rounded-full px-5 py-2 backdrop-blur-md bg-white/25"
        )}
      >
        <li className="border-r h-full max-h-20">
          <Link href={"/"}>
            <Image
              src={"/images/xapisoft-logo-dark.png"}
              alt={""}
              width={500}
              height={500}
              draggable="false"
              className={cn("w-28 mr-10 object-contain shrink-0 2xl:hidden", {
                "2xl:block": scrolled,
              })}
            />
          </Link>
        </li>
        {NavLinks.map(({ id, title, route }) => (
          <li
            key={id}
            className="px-3 py-2 relative group flex flex-col items-center"
          >
            <button disabled={true}>{title}</button>
            <div className=" absolute -bottom-0 left-[50%] -translate-x-[50%] opacity-0 group-hover:opacity-100  w-2 h-2 rounded-full bg-primary-100/10 transition-all ease-in-out duration-500 after:w-1 after:h-1 after:bg-primary-100/60 after:rounded-full grid place-items-center" />
          </li>
        ))}
        <li className="group relative flex flex-col items-center">
          <button disabled={true} className="border-l border-dark/10 px-3 py-2">
            Contact Us
          </button>

          <div className=" absolute -bottom-0 left-[50%] -translate-x-[50%] opacity-0 group-hover:opacity-100  w-2 h-2 rounded-full bg-primary-100/10 transition-all ease-in-out duration-500 after:w-1 after:h-1 after:bg-primary-100/60 after:rounded-full grid place-items-center" />
          {/* <div className=" opacity-0 group-hover:opacity-100  w-1 h-1 rounded-full bg-dark transition-all ease-in-out duration-500" /> */}
        </li>
      </ul>
      <div
        className={cn("w-0 h-4 hidden 2xl:block", {
          "w-1/4 transition-all duration-500": scrolled,
          "w-0 transition-all duration-500": !scrolled,
        })}
      />
    </>
  );
};

const MobileNavigation = () => {
  return (
    <div className="flex justify-between border py-4 px-6 rounded-full w-full md:w-fit md:hidden bg-white/75 backdrop-blur-md">
      <Link href={"/"}>
        <Image
          src={"/images/xapisoft-logo-dark.png"}
          alt={""}
          width={500}
          height={500}
          draggable="false"
          className={cn("w-32 mr-10 object-contain shrink-0 2xl:hidden", {})}
        />
      </Link>
      <Sheet>
        <SheetTrigger className="md:hidden">
          <AlignJustify strokeWidth={1.5} />
        </SheetTrigger>
        <SheetContent className="bg-white border-none">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="flex flex-col justify-between h-full">
            <ul className="md:hidden gap-x-8 font-medium mt-4 text-dark flex flex-col gap-8">
              {NavLinks.map(({ id, title, route }) => (
                <li key={id}>
                  <Link
                    href=""
                    className="text-dark/60 transition-all ease-in-out duration-300"
                  >
                    {title}
                  </Link>
                </li>
              ))}
              <li className="mt-12">
                <Link href={"mailto:info@xapisoft.co"}>
                  <Button>Start a conversation</Button>
                </Link>
              </li>
            </ul>
            <SocialLinks />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export { LargeNavigation, MobileNavigation };
