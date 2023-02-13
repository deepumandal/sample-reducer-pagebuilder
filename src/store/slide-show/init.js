import { BORDER_RADIUS_PIXELS, CONTROLS } from "../common-init";
import { v4 as uuidv4 } from "uuid";


export const initialState = {
  sequenceNumber: null,
  id: "",
  draftAreaId: "",
  specialPage: [],
  areaName: "",
  areaType: CONTROLS.SLIDESHOW,
  show: true,
  model: "",
  imagesPerLine: 1,
  numberOfLines: 1,
  carousel: false,
  properties: {
    backgroundColor: "#ffffff",
    textAlignment: "Left",
    heightLabel: "M",
    heightPercentage: 0.5,
    margin: "",
    marginTop: "0px",
    marginBottom: "0px",
    marginLeft: "0px",
    marginRight: "0px",
    padding: "",
    paddingTop: "0px",
    paddingBottom: "0px",
    paddingLeft: "0px",
    paddingRight: "0px",
    borderTopLeftRadius: `0${BORDER_RADIUS_PIXELS}`,
    borderTopRightRadius: `0${BORDER_RADIUS_PIXELS}`,
    borderBottomLeftRadius: `0${BORDER_RADIUS_PIXELS}`,
    borderBottomRightRadius: `0${BORDER_RADIUS_PIXELS}`,
    display: "grid",
    gridProps: {
      gridTemplateColumns: "repeat(1, 1fr)",
      gridTemplateRows: "",
      rowGap: "0px",
      columnGap: "0px",
      gridAutoRows: "minmax(auto, auto)",
      gridAutoFlow: "row",
    },
    flexProps: {
      flexDirection: "column",
      flexWrap: "",
      flexFlow: "",
    },
    scrollable: false,
    scrollProps: {
      overflowX: "unset",
      overflowY: "unset",
      scrollBehavior: "smooth",
    },
    border: "1px solid #fff",
    width: "100%",
    height: "100vh",
    justifyContent: "flex-start",
    alignItems: "center",

    url: "",
    backgroundImage: false,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "scroll",
    backgroundPosition: "center",
    backgroundOpacity: "linear-gradient(#ffffff, #ffffff)",
    backgroundOpacityValue: "0",
  },
  section: [],
};

//   for section reference
export const sectionsProps = {
  sequenceNumber: null,
  id: uuidv4(),
  draftSectionId: "",
  sectionName: "",
  toolTip: "",
  dataFrom: "",
  dataValue: "",
  title: {
    name: "",
    content: "",
    properties: {
      color: "#000000",
    },
  },
  subTitle: {
    name: "",
    content: "",
    properties: {
      color: "#000000",
    },
  },
  media: {
    type: "IMAGE", //  IMAGE || VIDEO
    url: "",
    align: "center",
    properties: {
      color: "#000000",
    },
  },
  animation: {
    type: "",
    properties: {
      opacity: "",
      mixBlendMode: "",
      filter: "",
    },
  },
  button: {
    label: "Get Started",
    buttonType: "defaultButton",
    show: false,
    properties: {
      color: "#000000",
    },
  },
};
