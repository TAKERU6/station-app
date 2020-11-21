import { ERROR_MESSAGE } from "../actions/getUrls";
const initialState = "";

const infoUrls = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_MESSAGE:
      return "その駅名は見つかりませんでした";
    default:
      return state;
  }
};

export default infoUrls;
