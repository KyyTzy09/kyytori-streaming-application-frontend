"use client";

import { Button } from "@/common/shadcn/button";
import { Input } from "@/common/shadcn/input";
import { Label } from "@/common/shadcn/label";
import { ImageDownIcon, Trash, Trash2 } from "lucide-react";
import React from "react";

interface ImageUploaderProps {
  defaultImage: string;
  setImageAction: (image: File | null) => void;
}

export default function ImageUploader({
  defaultImage,
  setImageAction,
}: ImageUploaderProps) {
  const [preview, setPreview] = React.useState<string>("");

  const handleDelete = () => {
    setPreview("");
    setImageAction(null);
  };
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
      <Button disabled={!preview} onClick={handleDelete} className="flex w-6 h-6 p-0 hover:bg-red-300 items-center justify-center absolute top-0 left-0 bg-red-500 cursor-pointer rounded-l-none rounded-r">
        <Trash2 className="w-5 h-5 text-white" />
      </Button>
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
