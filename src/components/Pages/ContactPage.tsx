import { Dancing_Script } from "next/font/google";
import ContactForm from "../ContactForm/ContactForm";

const dansing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const ContactPage = () => {
  return (
    <div>
      <h1 className={`text-6xl font-bold mb-8 ${dansing.className}`}>
        Contact
      </h1>
      <div className="max-w-lg mx-auto">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
