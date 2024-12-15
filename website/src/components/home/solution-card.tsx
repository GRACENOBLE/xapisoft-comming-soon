import Image from "next/image";

const SolutionCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    // <div className="bg-white rounded-[16px]  px-12 py-10 text-center">
    //   <div className=" space-y-6 flex flex-col items-center">
    //     <Image src={icon} alt={""} width={108} height={68.12} />
    //     <div className="space-y-3 flex flex-col items-center">
    //       <h3>{title}</h3>
    //       <p className="text-sm">{description}</p>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-white/60 rounded-[16px]  px-12 py-[32px] relative">
      <div className="absolute top-[20px] right-12 bg-xgray rounded-full h-[60px] w-[60px] grid place-items-center p-2">
        <Image src={icon} alt={""} width={108} height={68.12} />
      </div>
      <div className="space-y-16">
        <h3 className="max-w-60">{title}</h3>
        <p className="text-dark/65">{description}</p>
      </div>
    </div>
  );
};

export default SolutionCard;
