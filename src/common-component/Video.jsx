import { Box } from "@chakra-ui/react";
import React, { memo } from "react";

const Video = ({ src }) => {
  alert("Video and value is", src);
  console.log("Video and value is", src);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {src ? (
        <iframe title="test" src={src} allowFullScreen />
      ) : (
        "add some video"
      )}
    </Box>
  );
};

export default memo(Video);
