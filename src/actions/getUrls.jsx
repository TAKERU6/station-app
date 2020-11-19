import ekispertAPI from "../APIs/ekispertAPI";
export const RECEIVEDATA = "RECEIVEDATA";

const receiveData = (data) => {
  return {
    type: RECEIVEDATA,
    payload: data,
  };
};

const getUrls = (name) => {
  return (dispatch) => {
    ekispertAPI(name).then((res) => {
      const stations = res.data.ResultSet.Point;
      const data = stations.map((obj) => obj.Station);
      dispatch(receiveData(data));
    });
  };
};

export default getUrls;
