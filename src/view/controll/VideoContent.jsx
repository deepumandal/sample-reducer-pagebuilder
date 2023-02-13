import { Button, HStack, Input, Select, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const VideoContent = ({ item }) => {
  const dispatch = useDispatch();

  const handleUploadvideo = (e) => {
    const file = e.target.files[0];

    const videoUrl = URL.createObjectURL(file);
    item.media.url = videoUrl;

    dispatch({
      type: "UPDATE_SLIDESHOW_SECTION",
      payload: {
        ...item,
        media: {
          ...item.media,
          url: videoUrl,
        },
      },
    });
  };

  ///////////////////////////

  const [sectionkey, setSectionkey] = useState("");
  const [sectionValue, setsectionValue] = useState("");

  const handleSectionquerry = (e) => {
    const name = e.target.name;
    if (name === "key") {
      setSectionkey(e.target.value);
    } else if (name === "value") {
      setsectionValue(e.target.value);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    dispatch({
      type: "UPDATE_SLIDESHOW_SECTION",
      payload: {
        ...item,
        [sectionkey]: {
          ...item[sectionkey],
          content: sectionValue,
        },
      },
    });
  };

  return (
    <VStack>
      <Input type="file" onChange={(e) => handleUploadvideo(e)} />
      12345678
      <HStack>
        <Select placeholder="key" name="key" onChange={handleSectionquerry}>
          <option value="title">title Content</option>

        </Select>
        <Input
          type="text"
          name="value"
          placeholder="enter your value"
          onChange={handleSectionquerry}
        />
      </HStack>
      <Button onClick={handleClick}> update </Button>
    </VStack>
  );
};

export default VideoContent;
