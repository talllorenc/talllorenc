import Image from "next/image";

const GoogleButton = () => {
  return (
    <button className="flex items-center justify-center gap-4 w-full py-1 rounded-lg  border border-[#e1e1e1] shadow-buttonDark transition-all duration-200 hover:bg-neutral-100">
      <Image src="/SotialsIcons/google.png" alt="Google" width={15} height={15} />
      <p className="text-neutral-500">Continue with Google</p>
    </button>
  );
};

export default GoogleButton;
