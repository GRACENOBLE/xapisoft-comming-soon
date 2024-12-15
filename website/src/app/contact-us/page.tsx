import Container from "@/components/container";
import { ContactUsForm } from "@/components/forms/contact-us-form";
import { ContactData } from "@/constants";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const page = () => {
  return (
    <section className="mt-24 mb-16 min-h-[65vh] flex items-center">
      <Container>
        <h1 className="text-4xl font-bold text-dark mb-20">
          Ready to innovate?
        </h1>
        <div className="flex justify-between">
          <ContactUsForm />
          <div className="flex flex-col justify-between mx-auto w-fit">
            {ContactData.map(({ key, ...props }) => (
              <ContactDetailsCard key={key} {...props} />
            ))}
          </div>
        </div>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7423401314027!2d32.60544397909486!3d0.35359979872225017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb3077fe4443%3A0x496f1deee13c39eb!2sK.S.%20Plaza!5e0!3m2!1sen!2sug!4v1725110328852!5m2!1sen!2sug"
          width="800"
          height="400"
          className="w-full rounded-md border border-slate-600/50 mt-16 mb-20"
          // style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}
      </Container>
    </section>
  );
};

const ContactDetailsCard = ({
  method,
  description,
  icon,
  detail,
}: {
  method: string;
  description: string;
  icon: any;
  detail: string;
}) => (
  <div className="group">
    <h3 className="font-bold text-sm text-dark mb-1 ">{method}</h3>
    <p className="text-sm mb-3">{description}</p>
    <p className="flex items-center text-primary-500 gap-4">
      <span className="rounded-full h-10 w-10 bg-slate-600/5 group-hover:text-primary-50 grid place-items-center shrink-0 transition-all ease-in-out duration-300">
        {icon}
      </span>
      <span className="font-medium text-sm">{detail}</span>
    </p>
  </div>
);

export default page;
