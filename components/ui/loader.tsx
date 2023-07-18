"use client";

import { useTheme } from "next-themes";
import { ClipLoader } from "react-spinners";

export const Loader = () => {
  const theme = useTheme();

  return (
    <ClipLoader
      color={theme.resolvedTheme === "dark" ? "#ffffff" : "#000000"}
      size={65}
    />
  );
};
