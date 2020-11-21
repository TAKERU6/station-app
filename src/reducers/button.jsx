import { RECEIVEDATA, STARTREQUEST } from "../actions/getUrls";
const initialState = "Search now!";

const infoUrls = (state = initialState, action) => {
  switch (action.type) {
    case STARTREQUEST:
      return "Loading...";
    case RECEIVEDATA:
      return initialState;
    default:
      return state;
  }
};

export default infoUrls;
