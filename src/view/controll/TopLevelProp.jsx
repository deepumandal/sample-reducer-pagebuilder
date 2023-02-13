import { Button, HStack, Input, Select, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TopLevelProp = () => {
  const dispatch = useDispatch();
  const slideshow = useSelector((state) => state.SlideShow);

  const [slidewhowkey, setSlidewhowkey] = useState("");
  const [value, setValue] = useState("");

  const handleOnchangeslideshowvalue = (e) => {
    const name = e.target.name;
    if (name === "key") {
      setSlidewhowkey(e.target.value);
    } else if (name === "value") {
      setValue(e.target.value);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    let map = {};
    map[slidewhowkey] = value;
    console.log(map);

    dispatch({ type: "SLIDE_SHOW_TOPLEVEL", payload: map })
  };

  
  return (
    <>
      <Text color={"red"}> TopLevel </Text>
      <HStack>
        <Select
          placeholder="key"
          name="key"
          onChange={handleOnchangeslideshowvalue}
        >
          <option value="sequenceNumber">sequenceNumber</option>
          <option value="id">id</option>
          <option value="draftAreaId">draftAreaId</option>
          <option value="specialPage">specialPage</option>
          <option value="areaName">areaName</option>
          <option value="show">show</option>
          <option value="modal">modal</option>
          <option value="imagePerLine">imagePerLine</option>
          <option value="numberOfLines">numberOfLines</option>
          <option value="carousel">carousel</option>
        </Select>
        <Input
          type="text"
          name="value"
          placeholder="enter your value"
          onChange={handleOnchangeslideshowvalue}
        />
      </HStack>
      <Button onClick={handleClick}> update </Button>
    </>
  );
};

export default TopLevelProp;
