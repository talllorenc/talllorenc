import Image from "next/image";
const navigation = {
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/tellmynumber",
      icon: (props) => (
        <Image
          src="/footer/instagram.svg"
          alt="Instagram"
          width={40}
          height={40}
          {...props}
        />
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/talllorenc",
      icon: (props) => (
        <Image
          src="/footer/github.svg"
          alt="GitHub"
          width={40}
          height={40}
          {...props}
        />
      ),
    },
  ],
};

const ContactForm = () => {
  return (
    <div className="mb-16">
    <div className="container flex flex-col gap-8 ">
      <span className="text-[40px] font-bold">Contact me</span>
      <form className="flex flex-col flex-1 gap-4 ">
        <div className="flex flex-col md:flex md:flex-row gap-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-[6px] bg-black text-white rounded-lg border-2 border-white focus:border-[#F75370] focus:outline-none"
          />
          <input
            type="text"
            placeholder="E-mail address"
            className="w-full p-[6px] bg-black text-white rounded-lg border-2 border-white focus:border-[#F75370] focus:outline-none"
          />
        </div>

        <textarea
          className="w-full h-[200px] p-[6px] bg-black text-white rounded-lg border-2 border-white focus:border-[#F75370] focus:outline-none resize-none"
          name="message"
          placeholder="Message"
        ></textarea>
        <div className="flex justify-between">
          <button type="submit">
            <span className="text-[20px] border-[3px]  border-[#F75370] rounded-lg bg-black p-2  transition-[300ms] hover:border-white">
              Send message
            </span>
          </button>
          <div className="flex gap-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-8 w-8" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </form>
    </div>
    </div>

  );
};

export default ContactForm;
