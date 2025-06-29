import React from "react";

export default function AvatarSkeleton() {
  return (
    <div className="bg-gray-600 w-10 h-10 rounded-full flex items-center justify-center animate-pulse">
        <img
              src={"/img/user.jpg"}
              alt="Profile"
              className="rounded-full w-full h-full animate-pulse"
            />
    </div>
  );
}
