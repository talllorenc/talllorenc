import LatestTrack from "@/components/LatestTrack/LatestTrack";
import SearchBar from "@/components/SearchBar/SearchBar";
import Image from "next/image";
import Link from "next/link";

const HeaderPage = () => {
  return (
    <div className="flex justify-center items-center h-screen block p-[16px]">
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
        <LatestTrack/>
      </div>
    </div>
  );
};

export default HeaderPage;
