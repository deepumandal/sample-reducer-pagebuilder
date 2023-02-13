import thunk from "redux-thunk";
import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { SpacerReducer } from "./spacer/Spacer.reducer";
import { FooterReducer } from "./footers/Footer.reducer";
import { GallaryReducer } from "./Gallary/Gallary.reducer";
import { ProImageReducer } from "./pro-image/Pro-image.reducer";
import { LogosReducer } from "./logos/Logos.reducer";
import { HeadersReducer } from "./headers/headers.reducer";
import { SlideShowReducer } from "./slide-show/Slide-show.reducer";
import { CollectionReducer } from "./collections/Collection.reducer";
import { ThemeReducer } from "./Theme/Theme.reducer";

const roots = combineReducers({
  // roote level reducers
  Theme: ThemeReducer,
  Spacer: SpacerReducer,
  SlideShow: SlideShowReducer,
  Gallary: GallaryReducer,
  ProImage: ProImageReducer,
  Logos: LogosReducer,
  Header: HeadersReducer,
  Footer: FooterReducer,
  Collections: CollectionReducer,
  // todo
});

export const Store = legacy_createStore(
  roots,
  composeWithDevTools(applyMiddleware(thunk))
);
