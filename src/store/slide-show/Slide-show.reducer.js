import { initialState } from "./init";

export const SlideShowReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // todo

    case "SLIDE_SHOW_TOPLEVEL": {
      return {
        ...state,
        ...payload,
      };
    }
    case "SLIDE_SHOW_PROPERTIES_LEVEL": {
      // console.log(state.properties);
      return {
        ...state,
        properties: {
          ...state.properties,
          ...payload,
        },
      };
    }
    case "SLIDE_SHOW_PROPERTIES_LEVEL_DISPLAY": {
      return {
        ...state,
        properties: {
          ...state.properties,
          gridProps: {
            ...state.properties.gridProps,
            ...payload,
          },
        },
      };
    }
    case "ADD_SLIDESHOW_SECTIONS": {
      return {
        ...state,
        section: [...state.section, payload.payload],
      };
    }
    case "REMOVE_SLIDESHOW_SECTION": {
      let filteredArray = state.section.filter(
        (section) => section.id !== payload
      );

      return {
        ...state,
        section: [...filteredArray],
      };
    }
    case "UPDATE_SLIDESHOW_SECTION": {
      const filteredArray = state.section.map((section, index) => {
        if (section.id === payload.id) {
          return { ...state.section[index], ...payload };
        } else return section;
      });
      console.log(filteredArray);

      return {
        ...state,
        section: [...filteredArray],
      };
    }

    default: {
      return state;
    }
  }
};
