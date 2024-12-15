import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center text-dark">
      <div className="space-y-8">
        <h1>Oops! </h1>
        <h2>You're not supposed to be here. </h2>
        <div>
          <Link href={"/"}>
            <Button>Get back to safety</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default page;
