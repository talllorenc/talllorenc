import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";

const HomeButton = () => {
  return (
    <Link
      href="/"
      className="flex mx-auto text-white items-center gap-2 shadow-buttonBlue bg-[#41b6de] uppercase transition-all duration-200 px-6 py-3 font-bold rounded-md hover:shadow-buttonBlueBrick"
    >
      <FaAngleDoubleRight /> Go back to the home page
    </Link>
  );
}

export default HomeButton
