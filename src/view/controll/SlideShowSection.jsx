import { Button, HStack, Input, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { sectionsProps } from "../../store/slide-show/init";
import cloneDeep from "lodash/cloneDeep";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import VideoContent from "./VideoContent";

const SlideShowSection = () => {
  const dispatch = useDispatch();
  const sections = useSelector((state) => state.SlideShow.section);
  const [isopen, setIsopen] = useState(false);
  const [selected, setSelected] = useState({});

  const handleAddContent = (type) => {
    switch (type) {
      case "Image": {
        const ImageInstance = cloneDeep(sectionsProps);
        ImageInstance.media.type = "IMAGE";
        const id = uuidv4();
        ImageInstance.id = id;
        return dispatch({
          type: "ADD_SLIDESHOW_SECTIONS",
          payload: {
            id: ImageInstance.id,
            payload: ImageInstance,
          },
        });
      }
      case "Video": {
        const ImageInstance = cloneDeep(sectionsProps);
        ImageInstance.media.type = "VIDEO";
        const id = uuidv4();
        ImageInstance.id = id;
        return dispatch({
          type: "ADD_SLIDESHOW_SECTIONS",
          payload: {
            id: ImageInstance.id,
            payload: ImageInstance,
          },
        });
      }
      default:
        return;
    }
  };
  const handleRemoveContent = (id) => {
    dispatch({
      type: "REMOVE_SLIDESHOW_SECTION",
      payload: id,
    });
  };

  return (
    <VStack>
      {isopen ? (
        <VideoContent item={selected} />
      ) : (
        <>
          <HStack>
            <Button onClick={() => handleAddContent("Image")}>Add Image</Button>
            <Button onClick={() => handleAddContent("Video")}>Add Video</Button>
          </HStack>
          <VStack>
            <Text>List</Text>
            {sections?.map((item, index) => (
              <HStack key={index}>
                <Text
                  onClick={() => {
                    setSelected(item), setIsopen(true);
                  }}
                >
                  {item.media.type}
                </Text>{" "}
                -----{" "}
                <Button onClick={() => handleRemoveContent(item.id)}>
                  {" "}
                  del{" "}
                </Button>
              </HStack>
            ))}
          </VStack>
        </>
      )}
    </VStack>
  );
};

export default SlideShowSection;
