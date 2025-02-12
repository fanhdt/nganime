"use client";
import { FileSearch } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center ">
      <div className="flex jusctify-center items-center gap-4 flex-col">
        {" "}
        <FileSearch size={44} className="text-color-accent" />
        <h1 className="text-color-accent align-middle items-center flex  text-4xl justify-center">PAGE NOT FOUND</h1>
        <button onClick={() => router.back()} href="/" className="text-color-primary hover:text-color-accent transition-all underline text-xl">
          Kembali
        </button>
      </div>
    </div>
  );
};

export default Page;
