import React from "react";
import InfoList from "./components/InfoList";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="App">
      <h1 className="h1"> 駅名検索</h1>
      <Form />
      <InfoList />
    </div>
  );
};

export default App;
