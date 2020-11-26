import ekispertAPI2 from "../APIs/ekispertAPI2";
export const RECEIVEDATA = "RECEIVEDATA";
export const ERROR_MESSAGE = "ERROR_MESSAGE";

const receiveData = (uri) => {
  return {
    type: RECEIVEDATA,
    payload: uri,
  };
};

const errorMessage = (e) => {
  return {
    type: ERROR_MESSAGE,
    payload: e,
  };
};

const getUrls2 = (from, to) => {
  return (dispatch) => {
    ekispertAPI2(from, to)
      .then((res) => {
        const uri = res.data.ResultSet.ResourceURI;
        dispatch(receiveData(uri));
      })
      .catch((e) => dispatch(errorMessage(e)));
  };
};

export default getUrls2;
