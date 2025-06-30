"use client";

import { Input } from "@/common/shadcn/input";
import { Label } from "@/common/shadcn/label";
import { ImageDownIcon } from "lucide-react";
import React from "react";

interface ImageUploaderProps {
  defaultImage: string;
  setImageAction: (image: File) => void;
}

export default function ImageUploader({
  defaultImage,
  setImageAction,
}: ImageUploaderProps) {
  const [preview, setPreview] = React.useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageAction(file || File);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full h-full relative">
      <img
        src={preview ? preview : defaultImage}
        className="w-full h-full"
        alt="upload"
      />
      <Label className="flex items-center justify-center absolute bottom-0 right-0 bg-white cursor-pointer rounded-l">
        <ImageDownIcon className="w-5 h-5 text-black" />
        <Input
          className="hidden"
          type="file"
          onChange={handleChange}
          accept="image/*"
        />
      </Label>
    </div>
  );
}
