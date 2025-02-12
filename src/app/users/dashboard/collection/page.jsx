import Image from "next/image";
import Link from "next/link";
import Header from "@/components/dashboard/Header";
const page = () => {
  return (
    <section className="mt-4 px-4 w-full">
      <Header title={"My Favorite"} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link className=" relative border-2 border-color-accent" href="/">
          <Image src="" alt="" width={350} height={350} className="w-full"></Image>
          <div className=" absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16">
            <h5 className="text-xl text-center ">Judul Anime</h5>
          </div>
        </Link>
        <Link className=" relative border-2 border-color-accent" href="/">
          <Image src="" alt="" width={350} height={350} className="w-full"></Image>
          <div className=" absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16">
            <h5 className="text-xl text-center ">Judul Anime</h5>
          </div>
        </Link>
        <Link className=" relative border-2 border-color-accent" href="/">
          <Image src="" alt="" width={350} height={350} className="w-full"></Image>
          <div className=" absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16">
            <h5 className="text-xl text-center ">Judul Anime</h5>
          </div>
        </Link>
        <Link className=" relative border-2 border-color-accent" href="/">
          <Image src="" alt="" width={350} height={350} className="w-full"></Image>
          <div className=" absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16">
            <h5 className="text-xl text-center ">Judul Anime</h5>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default page;
