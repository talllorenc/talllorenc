import HeaderPlayer from "@/components/HeaderPlayer/HeaderPlayer";
import SearchBar from "@/components/SearchBar/SearchBar";
import Image from "next/image";
import Link from "next/link";

const HeaderPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container border border-[#5c5b5b] rounded-lg bg-gradient-to-b from-black via-transparent to-[#F75380]">
        <div className="flex flex-col p-4 items-center">
          <span className="text-[44px] font-medium ">
            Welcome everyone to my self-written media library
          </span>
          <span className="text-[33px] font-italic">
            I am{" "}
            <span className="font-sans font-medium text-[#F75380]">
              talllorenc
            </span>{" "}
            and welcome to sad fun
          </span>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex gap-4 border-t border-[#5c5b5b] w-[450px] items-center justify-center py-[16px] ">
            <Link
              href="/playlist"
              className="text-[25px] font-medium border border-[#8c8b8b] px-2 rounded bg-[#F75370] hover:bg-[#F75390]"
            >
              Playlist
            </Link>
            <Link
              href="/contact"
              className="text-[25px] font-medium border border-[#8c8b8b] px-2 rounded hover:bg-white transition ease-in-out delay-70 hover:text-black "
            >
              Contact
            </Link>
          </div>
        </div>

        <SearchBar className=""/>

        <div className="flex p-4 justify-between mt-[70px]">
          <div className="flex">
            <Image
              src="/header/beat_image.jpg"
              width={250}
              height={250}
              alt="beat cover"
              className="rounded-lg"
            />
            <div className="flex px-2 justify-between">
              <div className="flex flex-col justify-between">
                <div className="flex flex-col">
                  <span className="text-[40px] font-bold">
                    Some Type Beat
                  </span>
                  <span className="text-[#8c8b8b] text-[25px] font-bold">140 BPM</span>
                  <span className="text-[25px] text-[#8c8b8b] font-medium">talllorenc</span>
                </div>
                <div className="text-[15px] p-2">
                  <span className="bg-[#2c2b2b] p-1 border border-[#4c4b4b]">
                    typebeat
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-[40px] flex flex-col items-center justify-center">
            <span className="p-2 text-[#F75380] font-bold">Latest track</span>
            <button className="text-[20px] border-[3px] border-[#F75370] rounded-lg bg-black px-1 py-[2px] flex items-center gap-1 transition-[300ms] hover:border-white ">
              download
              <Image
                src="/header/download.png"
                width={30}
                height={30}
                alt="download icon"
              />
            </button>
          </div>
        </div>

        <HeaderPlayer />
      </div>
    </div>
  );
};

export default HeaderPage;
