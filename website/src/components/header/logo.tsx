import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Logo = ({ scrolled }: { scrolled: boolean }) => {
  return (
    <Link href={"/"} className="hidden 2xl:flex items-center absolute left-0">
      <Image
        src={"/images/xapisoft-logo-dark.png"}
        alt={""}
        width={500}
        height={500}
        draggable="false"
        className={cn("h-6 min-w-32 object-contain w-fit shrink-0 ", {
          "opacity-0 transition-all duration-500 translate-x-[500%]": scrolled,
          "opacity-100 transition-all duration-500 translate-x-0": !scrolled,
        })}
      />
    </Link>
  );
};

export default Logo;
