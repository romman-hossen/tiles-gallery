
// "use client";

// import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { TbLayoutDashboardFilled } from "react-icons/tb";
export const getData =async () => {
  const  res = await fetch("http://localhost:5001/tiles");
  return res.json();

}

const Navbar =async () => {

  const data =await getData();
  console.log(data);

  return (
    <div className="border-b px-2 ">
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
          <h3 className="font-black text-white text-lg flex gap-1 items-center"><TbLayoutDashboardFilled />
Tiles Gallery</h3>
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
            <ul className="flex items-center text-white  text-sm gap-5">
              <li>
                <Link href={"/signup"}>SignUp</Link>
              </li>
              <li>
                <Link href={"/signin"}>SignIn</Link>
              </li>
            </ul>

          {/* {!user && (
            <ul className="flex items-center  text-sm gap-5">
              <li>
                <Link href={"/signup"}>SignUp</Link>
              </li>
              <li>
                <Link href={"/signin"}>SignIn</Link>
              </li>
            </ul>
          )}

          {user && (
            <div className="flex gap-3">
              <Avatar size="sm">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button size="sm" variant="danger">SignOut</Button>
            </div>
          )} */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;