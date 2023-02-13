import { Themeinit } from "./init";

export const ThemeReducer = (state = Themeinit, action) => {
  switch (action.type) {
    case "ADD_SECTION_AREA" : {
        return {
            ...state,
            sectionAreaList : [...state.sectionAreaList, action.payload]           
        }
    }
    case "DELETE_SECTION_AREA" : {
        return {
            ...state,
            sectionAreaList : state.sectionAreaList.filter(sectionArea => sectionArea.id!== action.payload)
        }
    }
    default:
      return state;
  }
};
