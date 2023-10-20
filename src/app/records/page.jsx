import Image from "next/image";
import Link from "next/link";

const RecordsPage = () => {
  return (
    <div className="p-[16px] flex items-center justify-center h-screen">
      <div
        className=" overflow-hidden container border border-[#5c5b5b] rounded-lg flex flex-col items-center justify-center h-[400px] bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: 'url("/header/records-bg.png")' }}
      >
       <div className="text-[22px] text-center">
          <span>
            If you've been inspired by my music and have created something
            unique, I'd love to hear it! Share your tracks with the community
            and showcase your talent.
          </span>
          <span className="bg-[#ef648e] font-bold inline-block my-1 rounded-lg">
          "Remember, there's no such thing as 'bad' music – it might just be
            that you haven't found your audience yet."
          </span>
        </div>
        <Link
          href="/recordsPage"
          className="mt-[40px] text-[20px] border-[3px] border-[#F75370] rounded-lg bg-black px-1 py-[2px] flex items-center gap-1 transition-[300ms] hover:border-white "
        >
          Share with me
          <Image
            src="/header/music-notes.png"
            width={30}
            height={30}
            alt="music-notes icon"
          />
        </Link>
      </div>
    </div>
  );
};

export default RecordsPage;
