import React from "react";
import { Board } from "./Components/Board";
import { ToolBox } from "./Components/ToolBox";
import { DataContextProvider } from "./Context/DataContext";

const App = () => {
  return (
    <DataContextProvider>
      <ToolBox></ToolBox>
      <Board></Board>
    </DataContextProvider>
  );
};

export default App;
