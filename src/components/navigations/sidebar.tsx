"use client";

import { Button } from "@/common/shadcn/button";
import { Separator } from "@/common/shadcn/separator";
import { User } from "@/common/types/user";
import useSession from "@/hooks/session";
import { Bookmark, LucideLogOut, UserIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FaComment } from "react-icons/fa";
import AlertModal from "../modals/alert.modals";

export default function DashboardSideBar({ data }: { data: User }) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();
  const pathName = usePathname();
  const { SignOut } = useSession();

  const sideBarItems = [
    {
      name: "Profile",
      path: "/dashboard",
      icon: UserIcon,
    },
    {
      name: "Favorite",
      path: "/dashboard/favorite",
      icon: Bookmark,
    },
    {
      name: "Comment",
      path: "/dashboard/comment",
      icon: FaComment,
    },
  ];

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await SignOut();
      router.push("/");
    } catch (error) {
      return;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={isOpen}
        setIsOpenAction={setIsOpen}
        isLoading={isLoading}
        alertAction={handleLogout}
        title="Apakah anda yakin?"
        description="Tindakan tidak dapat dibatalkan"
      />
      {data && (
        <aside className="bg-red-600 w-full h-full flex flex-col items-center rounded-r-sm pb-5">
          <section className="w-full flex bg-transparent pl-5 pt-5 items-center justify-center gap-2">
            <div className="h-10 w-12">
              <img
                src={data.profile.avatar || "/img/user.jpg"}
                alt="profile"
                className="w-full h-full rounded-full border-black border"
              />
            </div>
            <div className="w-full flex-col flex items-start justify-start">
              <p className="text-[15px] font-bold text-white">
                {data.profile.userName || "name"}
              </p>
              <p className="text-[13px] font-semibold text-white">
                {data.email || "email"}
              </p>
            </div>
          </section>
          <Separator className="my-5 border" />
          <section className="w-full flex flex-col h-full justify-between">
            <div className="w-full flex flex-col px-3 gap-2">
              <p className="text-white font-semibold text-[15px] w-full px-3">
                Sidebar Menu
              </p>
              {sideBarItems.map((item) => (
                <Button
                  onClick={() => router.push(item.path)}
                  key={item.name}
                  className={`w-full justify-start items-center flex px-5 hover:bg-red-800 ${
                    pathName === item.path || pathName.startsWith(item.path)
                      ? "bg-red-800 opacity-80"
                      : "bg-transparent"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <p className="text-white font-semibold">{item.name}</p>
                </Button>
              ))}
            </div>
            <div className="w-full flex flex-col px-3 gap-2 items-center">
              <Button
                onClick={() => setIsOpen(true)}
                className="w-full bg-transparent justify-start items-start flex px-5"
              >
                <LucideLogOut className="w-5 h-5" />
                <p className="text-white font-semibold">Logout</p>
              </Button>
            </div>
          </section>
        </aside>
      )}
    </>
  );
}
