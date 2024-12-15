import Image from "next/image";
import Container from "../container";
import { Button } from "../ui/button";

const AmberLoops = () => {
  return (
    <section className="py-20 text-dark">
      <Container>
        <h2 className="mb-16 text-5xl">Transforming purpose into success</h2>
        <div className="bg-xgray rounded-[16px] flex gap-[116px] items-center relative">
          <Image
            src={"/images/online-presence.jpg"}
            alt={""}
            width={1000}
            height={1000}
            className="rounded-l-[16px] object-cover h-[700px] w-[700px]"
          />
          <div className="max-w-[480px]">
            <p className="text-dark/65">CPAF WANTED TO KNOW:</p>
            <h2>How can we enhance our brand's online presence.</h2>
            <p className="py-[28px] text-dark/65">
              With years of experience in web design, branding, and development,
              we know what it takes to stand out online. We start by asking why
              your brand exists and use that understanding to build solutions
              that connect with your audience and drive real growth.
            </p>
            <Button>Take a look</Button>
          </div>
          <Image
            src={"/images/amberloops.png"}
            alt={""}
            width={43.42}
            height={43.42}
            className="absolute bottom-[24px] right-[28px]"
          />
        </div>
      </Container>
    </section>
  );
};

export default AmberLoops;
