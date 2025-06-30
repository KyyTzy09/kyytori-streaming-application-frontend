import React from "react";
import ImageUploader from "../buttons/upload.button";

export default function AvatarForm() {
  const [image, setImage] = React.useState<File | null>();
  return (
    <form className="w-full h-full">
      <div className="w-40 h-40">
        <ImageUploader defaultImage="" setImageAction={setImage} />
      </div>
    </form>
  );
}
