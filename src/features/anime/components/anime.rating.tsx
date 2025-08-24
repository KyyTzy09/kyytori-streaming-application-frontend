import Rating from "@mui/material/Rating";
import React from "react";

export const dynamic = "force-dynamic";
interface AnimeRatingProps {
  rating: string;
}

export default function AnimeRating({ rating }: AnimeRatingProps) {
  return (
    <Rating
      defaultValue={Number(rating) / 2}
      precision={0.1}
      sx={{
        "&": {
          color: "#FACC15", 
          strokeWidth: 0.8, 
        },
        "& .MuiRating-iconEmpty": {
          color: "#FFFFFF",
          strokeWidth: 0.8,
        },
      }}
      readOnly
    />
  );
}
