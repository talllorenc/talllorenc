import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="relative">
      <Image
        src="/main-logo3.png"
        alt="logo"
        width={80}
        height={80}
        className="rounded-lg border-2 border-[#f31260]"
      />
      <p
        className="absolute top-10 left-2 font-bold transform origin-bottom-left text-[#41b6de]"
        style={{ transform: "rotate(-15deg)" }}
      >
        TALLLORENC
      </p>
    </Link>
  );
}
