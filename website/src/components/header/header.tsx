"use client";
import { useEffect, useState } from "react";
import Container from "../container";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { NavLinks } from "@/constants";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SocialLinks from "../social-links";
import { AlignJustify } from "lucide-react";
import { LargeNavigation, MobileNavigation } from "./navigation";
import Logo from "./logo";

const Header = () => {
  const [scrolled, setIsScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setScrollPosition(currentScrollPosition);
    };

    scrollPosition > 50 ? setIsScrolled(true) : setIsScrolled(false);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <header className={cn("fixed w-full top-0 z-20 py-5")}>
      <Container>
        <div
          className={cn(
            "flex items-center justify-center 2xl:justify-end transition-all duration-300 relative"
          )}
        >
          <Logo scrolled={scrolled} />
          <LargeNavigation scrolled={scrolled} />
          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;
