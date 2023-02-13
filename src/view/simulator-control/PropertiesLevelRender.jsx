import React from "react";
import BackgroundColor from "../../common-component/BackgroundColor";
import { useSelector } from "react-redux";
import { Box, Heading } from "@chakra-ui/react";

const PropertiesLevelRender = () => {
  const slideshow = useSelector((state) => state.SlideShow.properties);
  console.log(slideshow);

  return (
    <Box>
      <BackgroundColor backgroundColor={slideshow.backgroundColor} />
    </Box>
  );
};

export default PropertiesLevelRender;
