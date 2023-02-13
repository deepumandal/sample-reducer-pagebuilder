import React from "react";
import { useSelector } from "react-redux";
import Carousel from "../../common-component/Carousel";
import { Box, Heading } from "@chakra-ui/react";

const FirstLevelRender = () => {
  const slideshow = useSelector((state) => state.SlideShow);
  console.log(slideshow);

  return (
    <Box>
      <Carousel carousel={slideshow.carousel} />
    </Box>
  );
};

export default FirstLevelRender;
