import Rating from "@mui/material/Rating";
import React from "react";

interface AnimeRatingProps {
  rating: string;
}

export default function AnimeRating({ rating }: AnimeRatingProps) {
  return <Rating defaultValue={Number(rating) / 2} precision={0.1} readOnly />;
}
