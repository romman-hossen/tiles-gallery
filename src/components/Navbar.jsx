"use client";

// import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { UserProfile } from "./Skeleton";
// export const getData =async () => {
//   const  res = await fetch("http://localhost:5001/tiles");
//   return res.json();

// }

const Navbar = () => {
  // const data =await getData();
  // console.log(data);
  const { data: session, isPending, error } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    try{
    const ok = window.confirm("Do you want to sign out?")
    if(!ok) return;
    await authClient.signOut();
    }
    catch(err){
     console.error(err)
     alert("Failed to sign out")
    }
  };
  useEffect(() => {
    if (error) {
      alert(error.message || "Something went wrong");
    }
  }, [error]);
  

  return (
    <div className=" px-2 bg-transparent sticky top-0 z-50 backdrop-blur-sm">
      <nav className=" flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          {/* {
            data.map(tile => <Image

            src={tile?.image}
            key={tile?.id}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"/> )
          } */}
          {/* <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          /> */}
          <Link href={"/"}>
            <h3 className="font-black text-white text-lg flex gap-1 items-center ">
              <TbLayoutDashboardFilled />
              Tiles Gallery
            </h3>
          </Link>
        </div>

        <ul className="flex items-center gap-5 text-sm text-gray-200">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-tiles"}>All Tiles</Link>
          </li>
          <li>
            <Link href={"/my-profile"}>My Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          {isPending && <UserProfile/>}
          {!isPending && !user && (
            <ul className="flex items-center text-white  text-sm gap-5">
              {/* <li>
              <Link href={"/signUp"}>SignUp</Link>
            </li> */}
              <li>
                <Link href={"/signIn"}>
                  <Button
                    className={"text-white rounded-xl hover:bg-black/50"}
                    variant="outline"
                  >
                    Login
                  </Button>
                </Link>
              </li>
            </ul>
          )}

          {!isPending && user && (
            <div className="flex gap-3">
              <Avatar size="sm">
                <Avatar.Image
                  alt={user?.name}
                  src={
                    user?.image ||
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/3840px-User-avatar.svg.png"
                  }
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0) || "U"}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleSignOut} size="sm" variant="outline" className={"hover:bg-black/40 text-white hover:text-primary rounded-xl"}>
                SignOut
              </Button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
