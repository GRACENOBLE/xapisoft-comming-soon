import Image from "next/image";
import Container from "./container";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { Button } from "./ui/button";
import SocialLinks from "./social-links";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between py-16 h-[500px] gap-8">
          <div>
            <Image
              src={"/images/xapisoft-logo-light.png"}
              alt={""}
              width={500}
              height={500}
              draggable="false"
              className="h-8 min-w-32 w-fit shrink-0 object-contain"
            />
            <ul className="text-sm font-medium flex flex-col gap-2 pt-8 text-white/60">
              {NavLinks.map(({ id, title, route }) => (
                <li key={id}>
                  <Link
                    href={route}
                    className="hover:text-white transition-all ease-in-out duration-300"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-extrabold text-7xl max-w-[822px] flex-1">
              <p>Ready to transform your</p>
              <p className="flex items-center gap-6">
                <span>online presence</span>
                <Button className="mt-4" variant={"light"} size={"lg"}>
                  Start a conversation
                </Button>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center py-2 font-light text-sm text-white/60 h-16">
          <p>Copyright © 2024 Xapisoft</p>
          <SocialLinks />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
