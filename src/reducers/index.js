import {
    combineReducers
} from "redux";
import infoUrls from "./infoUrls";
import button from "./button"
import errorText from "./errorText"
import infoUrls2 from "./infoUrls2"

export default combineReducers({
    infoUrls,
    button,
    errorText,
    infoUrls2
});