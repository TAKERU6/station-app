import React from "react";
import InfoList from "./components/InfoList";
import Form from "./components/Form";
import Form2 from "./components/Form2";

const App = () => {
  return (
    <div className="App">
      <h1 className="h1"> 駅名検索</h1>
      <Form />
      <InfoList />
      <Form2 />
    </div>
  );
};

export default App;
