import React from "react";
import { CircularProgress, Box } from "@mui/material";

export const Loading = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
