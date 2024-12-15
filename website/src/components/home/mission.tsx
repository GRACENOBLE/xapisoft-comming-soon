import { RetailSolutions } from "@/constants";
import Container from "../container";
import { Button } from "../ui/button";
import SolutionCard from "./solution-card";

const Mission = () => {
  return (
    <section className="py-20 bg-xbone">
      <Container>
        <div className="relative isolate overflow-hidden bg-dark text-center w-full rounded-[16px] py-[60px] text-white space-y-7 flex flex-col items-center mb-16">
          <h2>
            <p className="flex flex-col">
              <span>
                Our mission is to provide innovative user friendly digital
              </span>
              <span>
                solutions that enhance online visibilty and engagement for
              </span>
              <span>businesses and individuals</span>
            </p>
          </h2>

          <p className="flex flex-col text-white/65">
            <span>
              In today’s world, being online is not optional. Many businesses
              struggle to get
            </span>
            <span>
              noticed or connect with their audience effectively. We’re here to
              change that by
            </span>
            <span>
              delivering simple, impactful digital tools that make a real
              difference.
            </span>
          </p>
          <Button variant={"light2"}>Learn more</Button>
          <div className="absolute -top-[50%] -z-10 border border-dashed border-white/25 w-[800px] h-[800px] rounded-full my-spin" />
        </div>
        <div className="text-dark">
          <div className="pb-8">
            <p className="text-base">RETAIL SOLUTIONS</p>
            <h2 className="text-5xl">Revolutionising online visibility</h2>
          </div>
          <ul className="grid grid-cols-2 gap-16">
            {RetailSolutions.map(({ key, ...rest }) => (
              <SolutionCard key={key} {...rest} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Mission;
