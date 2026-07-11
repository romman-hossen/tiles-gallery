"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Skeleton } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { showToast } from "nextjs-toast-notify";
import { BiUser } from "react-icons/bi";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { MdAddAPhoto, MdOutlineAccountCircle, MdOutlineEmail } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TbPasswordUser, TbPhotoCode } from "react-icons/tb";
import UpdateProfile from "./UpdateProfile";


const ProfileCard = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    const ok = window.confirm("Do you want to signOut");
    if(!ok)return;
    await authClient.signOut();
     showToast.success("SignOut successful!", {
      duration: 5000,
      progress: true,
      position: "top-right",
      transition: "bounceIn",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>',
      sound: true,
    });
    router.push("/signIn");
  };
  console.log(user?.image)

  // ── Loading ──
  if (isPending) {
    return (
      <div className="flex min-h-screen ">
        {/* Sidebar skeleton */}
        {/* <div className="w-[72px] bg-[#1a1a2e] border-r border-[#e8c547]/10 flex flex-col items-center py-6 gap-3">
          {[1,2,3,4,5].map(i => (
            <Skeleton key={i} className="w-11 h-11 rounded-xl bg-white/5" />
          ))}
        </div> */}
        {/* Main skeleton */}
        <div className="flex-1 py-10 flex flex-col gap-4">
          <Skeleton className="h-9 w-40 rounded-xl bg-white/5" />
          <Skeleton className="h-72 w-full rounded-2xl bg-[#1a1a2e]" />
        </div>
      </div>
    );
  }

  // ── Not logged in ──
  if (!user) {
    return (
      <div className="min-h-screen bg-[#0f0e17] flex flex-col items-center justify-center gap-4">
        <span className="text-5xl">🔒</span>
        <h2 className="text-2xl font-medium text-white">Access restricted</h2>
        <p className="text-gray-400 text-sm">You need to be logged in to view this page.</p>
        <Link href="/login"
          className="bg-[#e8c547] text-[#0f0e17] font-semibold px-6 py-2.5 rounded-xl hover:bg-yellow-400 transition-colors">
          Go to login
        </Link>
      </div>
    );
  }

  const joinedDate = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long" })
    : "N/A";

  const fields = [
    { label: "User name",    value: user?.name || "—",   icon: <BiUser /> },
    { label: "Account type", value: user?.image ? "Social login" : "Email & password", icon: <MdOutlineAccountCircle /> },
    { label: "E-mail",       value: user?.email || "—",  icon: <MdOutlineEmail /> },
    { label: "Member since", value: joinedDate,           icon: <SlCalender /> },
    { label: "Password",     value: "●●●●●●●●",          icon: <TbPasswordUser />, dots: true },
    { label: "Photo URL",    value: user?.image ? user.image.slice(0, 28) + "…" : "Not set", icon: <TbPhotoCode /> },
  ];

  return (
    <div className="flex min-h-[40vh]bg-black/50]">

      {/* ── MAIN ── */}
      <main className="flex-1  py-10 max-w-7xl">

        {/* ── Profile card ── */}
        <div className="bg-black/50 border border-primary/20 rounded-2xl overflow-hidden mb-4">
          {/* Gold top line */}
          <div className="h-0.75 bg-linear-to-r from-transparent via-primary to-transparent" />

          <div className="p-7">
            {/* Avatar + info */}
            <div className="flex items-center gap-5 mb-7">
              <div className="relative">
                 <Avatar 
                  className="w-20 h-20 text-3xl font-medium bg-[#e8c547]/10  text-primary border-2 border-[#e8c547]/40">
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
                  
                {/* Camera icon */}
                <Link href="/my-profile/update"
                  className="absolute bottom-0 right-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-[#0f0e17] text-xs border-2 border-[#1a1a2e] hover:bg-yellow-400 transition-colors"
                  title="Change photo">
                <MdAddAPhoto />
                </Link>
              </div>

              <div>
                <h2 className="text-lg font-medium text-white mb-1">
                  {user?.name || "Unknown user"}
                </h2>
                <p className="text-gray-400 text-sm mb-2">{user?.email}</p>
                <span className="inline-flex items-center gap-1.5 bg-[#e8c547]/10 border border-[#e8c547]/25 text-[#e8c547] text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e8c547]" />
                   Member
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/7 mb-6" />

            {/* Fields grid — same layout as the screenshot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5 mb-7">
              {fields.map(({ label, value, icon, dots }) => (
                <div key={label}>
                  <p className="text-[10px] uppercase tracking-[2px] text-white/30 mb-2">
                    {label}
                  </p>
                  <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                    <span className="text-base">{icon}</span>
                    <span className={`text-sm ${dots ? "tracking-[4px] text-white/40 text-xs" : "text-white"}`}>
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-white/7 mb-5" />

            {/* Action buttons */}
            <div className="flex justify-end gap-3">
              <Button
                onPress={handleLogout}
                variant="bordered"
                className="border-white/15 text-white/50 hover:border-red-500/40 hover:text-red-400 rounded-xl"
              >
                <LiaSignOutAltSolid />
 Sign out
              </Button>
              {/* <Link href="/">
                <Button >
                </Button>
              </Link> */}
              <UpdateProfile />
              
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default ProfileCard;