import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const ButtonBack = () => {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()} className="flex items-center gap-1 text-[#41b6de] transition-all duration-200 hover:scale-90">
      <FaArrowLeft />
      Go back
    </button>
  );
};

export default ButtonBack;
