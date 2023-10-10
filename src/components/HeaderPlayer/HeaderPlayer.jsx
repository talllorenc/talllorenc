import Image from "next/image";

const HeaderPlayer = () => {
  return (
    <div className="p-[16px]">
      <div className="flex items-center bg-[#18181b] h-[50px] rounded-lg">
        <div className="flex items-center gap-4 px-5">
          <Image
            src="/header/heart.png"
            width={25}
            height={25}
            alt="heart icon"
            className="cursor-pointer"
          />
          <Image
            src="/header/play.png"
            width={35}
            height={35}
            alt="play icon"
            className="cursor-pointer"
          />
          <Image
            src="/header/sound.png"
            width={25}
            height={25}
            alt="volume icon"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderPlayer;
