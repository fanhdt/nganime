import React from "react";
import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout " : "/api/auth/signin";

  return (
    <div className="flex justify-between gap-2">
      {user ? <Link className="py-1" href="/users/dashboard">Dashboard</Link> : null}

      <Link className="bg-color-dark text-color-accent py-1 px-12 inline-block rounded" href={actionURL}>
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
