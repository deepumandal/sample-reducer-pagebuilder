import { Box, Heading } from "@chakra-ui/react";
import React, { memo } from "react";

const BackgroundColor = ({ backgroundColor }) => {
  alert("BackgroundColor rendered and value is", backgroundColor);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Heading>is BackgroundColor rerender here ?</Heading>
    </Box>
  );
};

export default memo(BackgroundColor)
