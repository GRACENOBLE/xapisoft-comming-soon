import Image from "next/image";
import Container from "../container";
import { Button } from "../ui/button";

const AIIJ = () => {
  return (
    <section className="bg-white pb-20">
      <Container>
        <div className="flex justify-between">
          <div className="max-w-[480px] h-[700px] mx-auto flex flex-col items-center justify-center relative">
            <div>
              <p className="text-dark/65">AIIJ ASKED US:</p>
              <h2>Our word press site is a mess, can you fix it?</h2>
              <p className="py-[28px] text-dark/65">
                With years of experience in web design, branding, and
                development, we know what it takes to stand out online. We start
                by asking why your brand exists and use that understanding to
                build solutions that connect with your audience and drive real
                growth.
              </p>
              <Button>See AIIJ now</Button>
            </div>
            <Image
              src={"/images/aiij.png"}
              alt={""}
              width={43.42}
              height={43.42}
              className="absolute bottom-0 right-0"
            />
          </div>
          <Image
            src={"/images/upset-female-graphic-designer-office.jpg"}
            alt={""}
            width={589}
            height={488}
            className="rounded-[16px] w-[700px] h-[700px] object-cover object-bottom"
          />
        </div>
      </Container>
    </section>
  );
};

export default AIIJ;
