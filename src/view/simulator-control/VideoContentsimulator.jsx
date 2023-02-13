import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import Video from "../../common-component/Video";

const VideoContentsimulator = () => {
  const slideshow = useSelector((state) => state.SlideShow);
  console.log(slideshow);
  let titlecontent = slideshow?.section?.length? slideshow.section[0].title?.content : ""

  return (
    <Box>
      <Video src={slideshow?.section[0]?.media?.url} />
      {titlecontent}
    </Box>
  );
};

export default VideoContentsimulator;
