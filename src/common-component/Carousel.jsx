import { Box, Heading } from "@chakra-ui/react";
import React, { memo } from "react";

const Carousel = ({ carousel }) => {
  alert("Carousel rendered and value is", carousel);

  return (
    <Box
      sx={{
        
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Heading>is carousel rerender here ?</Heading>
    </Box>
  );
};

export default memo(Carousel);
