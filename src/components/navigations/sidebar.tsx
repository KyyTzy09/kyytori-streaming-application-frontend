import { Bookmark, User } from "lucide-react";
import React from "react";
import { FaComment } from "react-icons/fa";

export default function DashboardSideBar() {
  const sideBarItems = [
    {
      name: "Profile",
      path: "/dashboard",
      icon: User,
    },
    {
        name  : "Favorite",
        path : "/dashboard/favorite",
        icon : Bookmark
    },
    {
        name : "Comment",
        path : "/dashboard/comment",
        icon : FaComment
    }
  ];
  return (
    <aside className="bg-blue-500 w-full h-full flex flex-col items-center justify-between">
    </aside>
  );
}
