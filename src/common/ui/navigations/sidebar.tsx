"use client";

import { Button } from "@/common/shadcn/button";
import { Separator } from "@/common/shadcn/separator";
import { User } from "@/common/types/user";
import { useSignOut } from "@/features/auth/hooks/auth-hook";
import { Bookmark, LucideLogOut, UserIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FaComment } from "react-icons/fa";
import AlertModal from "../modals/alert-modal";

export default function DashboardSideBar({ data }: { data: User }) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const router = useRouter();
  const pathName = usePathname();

  const sideBarItems = [
    {
      name: "Profil",
      path: "/dashboard",
      icon: UserIcon,
    },
    {
      name: "Favorit",
      path: "/dashboard/favorite",
      icon: Bookmark,
    },
    {
      name: "Komentar",
      path: "/dashboard/comment",
      icon: FaComment,
    },
  ];

  const { mutate: deleteUser, isPending: isLoading } = useSignOut();
  const handleLogout = async () => {
    deleteUser();
    router.push("/");
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
        <aside className="bg-gradient-to-br from-gray-900 via-red-700 to-red-500 w-full h-full flex flex-col items-center rounded-r-sm">
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
          <Separator className="mt-5 border" />
          <section className="pt-5 w-full flex flex-col h-full justify-between bg-gray-200 pb-5">
            <div className="w-full flex flex-col px-3 gap-2">
              <p className="text-red-600 font-bold text-[15px] w-full px-3">
                Sidebar Menu
              </p>
              {sideBarItems.map((item) => (
                <Button
                  onClick={() => router.push(item.path)}
                  key={item.name}
                  className={`w-full justify-start items-center flex px-5 hover:bg-red-600 shadow-md ${
                    pathName === item.path && pathName.startsWith(item.path)
                      ? "bg-red-600 opacity-80"
                      : "bg-white"
                  }`}
                >
                  <item.icon
                    className={`w-5 h-5 text-black  ${
                      pathName === item.path && pathName.startsWith(item.path)
                        ? "text-white fill-white"
                        : "text-black"
                    }`}
                  />
                  <p
                    className={`${
                      pathName === item.path && pathName.startsWith(item.path)
                        ? "text-white"
                        : "text-black"
                    } font-semibold`}
                  >
                    {item.name}
                  </p>
                </Button>
              ))}
            </div>
            <div className="w-full flex flex-col px-3 gap-2 items-center">
              <Button
                onClick={() => setIsOpen(true)}
                className="w-full bg-white justify-start items-start flex px-5 hover:bg-red-500"
              >
                <LucideLogOut className="w-5 h-5 text-black" />
                <p className="text-black font-semibold">Logout</p>
              </Button>
            </div>
          </section>
        </aside>
      )}
    </>
  );
}
