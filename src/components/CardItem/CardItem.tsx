import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import {FaPlay} from "react-icons/fa"

export default function CardItem() {
  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      <Image
        alt="Woman listing to music"
        className="object-cover hover:scale-105 cursor-pointer"
        height={250}
        src="/test2.jpg"
        width={250}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-md text-white/80 truncate overflow-hidden whitespace-nowrap">
          Aint me
        </p>
        <Button
          className="text-tiny text-[#f31260] shadow-buttonRed bg-black/20 hover:bg-black/40"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          <FaPlay />
        </Button>
      </CardFooter>
    </Card>
  );
}
