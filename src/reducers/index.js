import {
    combineReducers
} from "redux";
import infoUrls from "./infoUrls";
import button from "./button"
import errorText from "./errorText"

export default combineReducers({
    infoUrls,
    button,
    errorText
});