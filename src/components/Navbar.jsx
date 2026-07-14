"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, } from "@heroui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { UserProfile } from "./Skeleton";
import { showToast } from "nextjs-toast-notify";
import Navlinks from "./Navlinks";
import { CiMenuBurger } from "react-icons/ci";
import { RiCloseLargeLine } from "react-icons/ri";

const Navbar = () => {
  
  const [open,setOpen] = useState(false);

  const { data: session, isPending, error } = authClient.useSession();
  const user = session?.user;
  const handleSignOut = async () => {
    try{
    const ok = window.confirm("Do you want to sign out?")
    if(!ok) return;
    await authClient.signOut();
    showToast.success("SignOut success", {
    duration: 4000,
    progress: true,
    position: "top-center",
    transition: "bounceInDown",
    icon: '',
    sound: true,
  });
    }
    catch(err){
     console.error(err)
     showToast.error("Failed to sign out", {
    duration: 4000,
    progress: true,
    position: "top-center",
    transition: "bounceInDown",
    icon: '',
    sound: true,
  });
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
          <Link className="hidden md:block" href={"/"}>
            <h3 className="font-black text-white text-lg flex gap-1 items-center " >
              <TbLayoutDashboardFilled />
              Tiles Gallery
            </h3>
          </Link>
          <span className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
            {open ? <RiCloseLargeLine />  : <CiMenuBurger /> }
       
          </span>
        </div>
        <div className="md:hidden">
             {open && (
              
        <ul className={`md:hidden  mt-4 flex flex-col gap-3  text-white bg-bg backdrop-blur-sm rounded-2xl transition absolute top-9 z-20  left-2 p-6`}>
           <h3 className="font-black text-white text-lg flex gap-1 items-center " >
              <TbLayoutDashboardFilled />
              Tiles Gallery
            </h3>
          <li><Link onClick={() => setOpen(!open)} href="/">Home</Link></li>
          <li><Link onClick={() => setOpen(!open)} href={"/all-tiles"}>All Tiles</Link></li>
          <li><Link onClick={() => setOpen(!open)} href={"/my-profile"}>My Profile</Link></li>
        </ul>
      )}

        </div>

        <ul className="hidden md:flex items-center gap-5 text-sm text-gray-200 ">
          <li>
            <Navlinks href={"/"}>Home</Navlinks>
          </li>
          <li>
            <Navlinks href={"/all-tiles"}>All Tiles</Navlinks>
          </li>
          <li>
            <Navlinks href={"/my-profile"}>My Profile</Navlinks>
          </li>
        </ul>

        <div className="flex gap-4">
          {isPending && !user && <UserProfile />}
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
            <div className="flex items-center gap-3">
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
