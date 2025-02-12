import React from "react";
import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();
  return (
    <div className=" flex flex-col justify-items-center items-center mt-8 text-color-primary">
      <h3 className="text-2xl font-bold">Welcome, {user.name}</h3>

      <Image src={user?.image} alt="" width={250} height={250} />
      <div className="py-8 flex gap-4 flex-wrap">
        <Link className="hover:scale-[0.98] rounded bg-color-accent text-color-dark font-bold px-4 py-2 text-xl transition-all" href="/users/dashboard/collection">
          My Favourite
        </Link>
        <Link className="hover:scale-[0.98] rounded bg-color-accent text-color-dark font-bold px-4 py-2 text-xl transition-all" href="/users/dashboard/comment">
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default Page;
