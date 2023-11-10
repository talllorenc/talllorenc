import LatestTrack from "@/components/LatestTrack/LatestTrack";
import SearchBar from "@/components/SearchBar/SearchBar";
import Image from "next/image";
import Link from "next/link";

const HeaderPage = () => {
  return (
    <div className="flex justify-center items-center block p-[16px] mb-32 pt-16 in:pt-36">
      <div className="relative overflow-hidden container border border-[#5c5b5b] rounded-lg">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/header/vecteezy_pink-background-pink-cloud-background_27880279_471.mov"
        ></video>

        <div className="text-center flex flex-col p-4 items-center z-30">
          <span className="text-[22px] in:text-[40px] font-medium z-30">
            Welcome everyone to my self-written media library
          </span>
          <span className="text-[22px] in:text-[30px] font-italic z-30">
            I am{" "}
            <span className="font-sans font-medium text-[#F75380] z-30">
              talllorenc
            </span>{" "}
            and welcome to sad fun
          </span>
        </div>

        <div className="flex flex-col items-center z-30">
          <div className="flex gap-4 border-t border-[#5c5b5b] w-[450px] items-center justify-center py-[16px] z-30">
            <Link
              href="/playlist"
              className="text-[25px] font-medium border border-black px-2 rounded bg-[#F75370] hover:bg-[#F75390] z-30 "
            >
              Playlist
            </Link>
            <Link
              href="/contact"
              className="text-[25px] font-medium border border-black px-2 rounded hover:bg-white transition ease-in-out delay-70 hover:text-black z-30 "
            >
              Contact
            </Link>
          </div>
        </div>

        <SearchBar/>
        <LatestTrack/>
      </div>
    </div>
  );
};

export default HeaderPage;


