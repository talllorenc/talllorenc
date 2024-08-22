import Link from "next/link";

interface ILinkButtonProps {
  href: string;
  text: string;
  icon?: React.ReactNode;
}

const LinkButton: React.FC<ILinkButtonProps> = ({
  href,
  text,
  icon,
}) => {
  return (
    <Link
      href={href}
      className={`flex items-center justify-center w-full text-white bg-black dark:bg-white dark:text-black gap-4 p-2 border border-neutral-900 rounded-lg
                 hover:opacity-80 transition-all duration-200`}
    >
      {text}
      {icon}
    </Link>
  );
};

export default LinkButton;
