import React from "react";

interface CommentNestedCardProps {
  commentId: string;
  episodeTitle: string;
}

export default function CommentNestedCard({ commentId, episodeTitle } : CommentNestedCardProps) {
  
    return (
    <div className="w-full h-full flex flex-col overflow-y-auto ml-5 gap-5 p-5"></div>
  );
}
